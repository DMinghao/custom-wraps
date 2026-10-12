#!/usr/bin/env python3
"""Upload original MODEL 2.9 rendered PNGs to GitHub as unchanged Git blobs.

Zero non-standard dependencies; requires Git installed and GitHub authentication
on the computer where this is run (Git Credential Manager, `gh auth login`,
or GITHUB_TOKEN environment variable). Run from the extracted archive:

    python3 sync_livery_pngs.py
    python3 sync_livery_pngs.py --dry-run
    python3 sync_livery_pngs.py --add 28=/path/to/new_render.png

A version's iteration directory must exist before uploading its image.
"""
from __future__ import annotations

import argparse
import base64
import datetime as dt
import hashlib
import json
import os
from pathlib import Path
import re
import shutil
import struct
import subprocess
import sys
import tempfile
import urllib.request

HERE = Path(__file__).resolve().parent
DEFAULT_REPO = 'https://github.com/DMinghao/custom-wraps.git'
TARGET_ROOT = Path('livery/iterations')
GALLERY = Path('livery/visual-archive/RENDER_GALLERY_20_ONWARD.md')
MARK_START = '<!-- AUTO_PNG_ARCHIVE_START -->'
MARK_END = '<!-- AUTO_PNG_ARCHIVE_END -->'


def digest(path: Path):
    """Return byte length, SHA-256 and actual Git blob OID (SHA-1)."""
    b = path.read_bytes()
    if b[:8] != b'\x89PNG\r\n\x1a\n':
        raise ValueError(f'Not a PNG: {path}')
    if b[12:16] != b'IHDR':
        raise ValueError(f'Missing PNG IHDR: {path}')
    width, height = struct.unpack('>II', b[16:24])
    return {
        'bytes': len(b),
        'sha256': hashlib.sha256(b).hexdigest(),
        'git_blob_sha1': hashlib.sha1(f'blob {len(b)}\0'.encode() + b).hexdigest(),
        'width': width,
        'height': height,
    }


def run(args, cwd=None, env=None, capture=True):
    p = subprocess.run(args, cwd=cwd, env=env, text=True,
                       stdout=subprocess.PIPE if capture else None,
                       stderr=subprocess.PIPE if capture else None)
    if p.returncode:
        err = p.stderr if capture else '(see command output)'
        raise RuntimeError(f"Command failed ({p.returncode}): {' '.join(args[:3])}\n{err}")
    return p.stdout.strip() if capture else ''


def git_env():
    env = dict(os.environ)
    env['GIT_TERMINAL_PROMPT'] = '1' if sys.stdin.isatty() else '0'
    token = env.get('GITHUB_TOKEN') or env.get('GH_TOKEN')
    if token:
        # Token remains in child environment, never a remote URL or git config file.
        header = base64.b64encode(('x-access-token:' + token).encode()).decode()
        env['GIT_CONFIG_COUNT'] = '1'
        env['GIT_CONFIG_KEY_0'] = 'http.https://github.com/.extraheader'
        env['GIT_CONFIG_VALUE_0'] = 'Basic ' + header
    return env


def clean_git(repo: Path, env):
    if run(['git', 'status', '--porcelain'], cwd=repo, env=env):
        raise RuntimeError(f'Local git worktree has changes; refusing to touch them: {repo}')
    branch = run(['git', 'branch', '--show-current'], cwd=repo, env=env)
    if branch != 'master':
        raise RuntimeError(f'Expected master branch, got {branch!r}.')
    run(['git', 'pull', '--ff-only'], cwd=repo, env=env)


def find_version_folder(repo: Path, number: int, override: str | None):
    if override:
        p = repo / override
        if not p.is_dir() or not str(p.relative_to(repo)).startswith(str(TARGET_ROOT)):
            raise ValueError(f'Invalid version folder: {override}')
        return p
    matches = [p for p in (repo / TARGET_ROOT).iterdir()
               if p.is_dir() and re.search(rf'-v{number}(?:-|$)', p.name)]
    if len(matches) != 1:
        raise ValueError(f'Expected exactly one v{number} iteration directory, got {matches}. '
                         'Create its README on GitHub first or use --folder N=path.')
    return matches[0]


def parse_pairs(values, flag):
    out = {}
    for raw in values:
        if '=' not in raw:
            raise ValueError(f'Bad {flag} entry {raw!r}: use N=VALUE')
        n, value = raw.split('=', 1)
        if not n.isdecimal() or int(n) < 1 or not value:
            raise ValueError(f'Bad {flag} entry: {raw!r}')
        out[int(n)] = value
    return out


def load_assets(args):
    assets = {}
    manifest = HERE / 'manifest.json'
    if manifest.exists():
        for item in json.loads(manifest.read_text(encoding='utf-8'))['images']:
            n = int(item['version'])
            path = args.assets_dir / item['filename']
            if not path.is_file():
                raise FileNotFoundError(f'Missing source {path}')
            observed = digest(path)
            for field in ('bytes', 'sha256', 'git_blob_sha1'):
                if observed[field] != item[field]:
                    raise RuntimeError(f'Source changed/corrupted: v{n}, {field}: '
                                       f'{observed[field]} != manifest {item[field]}')
            assets[n] = (path, observed)
    for n, pathstr in parse_pairs(args.add, '--add').items():
        path = Path(pathstr).expanduser().resolve()
        if not path.is_file():
            raise FileNotFoundError(path)
        assets[n] = (path, digest(path))
    if not assets:
        raise RuntimeError('No images found in manifest or --add.')
    return dict(sorted(assets.items()))


def embed_status(readme: Path, number: int, filename: str, info: dict):
    prev = readme.read_text(encoding='utf-8') if readme.exists() else f'# Version {number}\n'
    notice = (f'{MARK_START}\n'
              f'**Archive update (verified from original PNG):** '
              f'![#{number} DAY/NIGHT original](renders/{filename})\n\n'
              f'PNG bytes: **{info["bytes"]}** · '
              f'SHA-256: `{info["sha256"]}` · '
              f'Git blob: `{info["git_blob_sha1"]}`. '
              f'Any older “PNG pending” statements below describe the historical pre-upload state.\n'
              f'{MARK_END}')
    if MARK_START in prev and MARK_END in prev:
        prev = re.sub(re.escape(MARK_START) + r'.*?' + re.escape(MARK_END),
                      lambda _: notice, prev, count=1, flags=re.S)
    else:
        lines = prev.split('\n', 1)
        prev = lines[0] + '\n\n' + notice + '\n\n' + (lines[1] if len(lines) > 1 else '')
    readme.write_text(prev, encoding='utf-8')


def create_gallery(repo: Path, records):
    gallery = repo / GALLERY
    gallery.parent.mkdir(parents=True, exist_ok=True)
    rows = ['# MODEL 2.9 — Original full-resolution renders (#20 onward)',
            '', 'All previews below link directly to original, unchanged PNG blobs ',
            'inside this repository. The image is a concept render, not fabrication data.', '']
    for n, rel, info in records:
        relative = os.path.relpath(repo / rel, gallery.parent).replace(os.sep, '/')
        rows += [f'## Version {n}', '', f'![Version {n} DAY and NIGHT]({relative})', '',
                 f'Original PNG · {info["width"]}×{info["height"]} · '
                 f'{info["bytes"]:,} bytes · SHA-256 `{info["sha256"]}`', '']
    gallery.write_text('\n'.join(rows), encoding='utf-8')
    homepage = repo / 'livery/README.md'
    orig = homepage.read_text(encoding='utf-8')
    status = (f'{MARK_START}\n'
              f'**Verified visual archive:** [Original renders #20–#{max(n for n, _, _ in records)}]'
              f'(visual-archive/{GALLERY.name}) with direct embedded PNG previews. '
              f'Earlier “PNG pending” notes in historical iterations predate this batch upload.\n'
              f'{MARK_END}')
    if MARK_START in orig and MARK_END in orig:
        orig = re.sub(re.escape(MARK_START) + r'.*?' + re.escape(MARK_END),
                      lambda _: status, orig, count=1, flags=re.S)
    else:
        rows = orig.split('\n', 1)
        orig = rows[0] + '\n\n' + status + '\n\n' + (rows[1] if len(rows) > 1 else '')
    homepage.write_text(orig, encoding='utf-8')


def remote_http_verify(repo_url: str, sha: str, records):
    m = re.fullmatch(r'https://github\.com/([^/]+)/([^/]+?)(?:\.git)?', repo_url)
    if not m:
        print('SKIP raw HTTP content verification: custom remote URL')
        return
    owner, project = m.groups()
    for n, rel, info in records:
        url = f'https://raw.githubusercontent.com/{owner}/{project}/{sha}/{rel.as_posix()}'
        with urllib.request.urlopen(urllib.request.Request(url, headers={'User-Agent': 'MODEL29-archive-verifier'}), timeout=45) as res:
            content = res.read()
        actual = hashlib.sha256(content).hexdigest()
        if len(content) != info['bytes'] or actual != info['sha256']:
            raise RuntimeError(f'Remote original mismatch for v{n}: {len(content)} bytes, {actual}')
        print(f'  Remote v{n}: VERIFIED {len(content):,} bytes, SHA-256 {actual[:16]}…')


def main():
    parser = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    parser.add_argument('--assets-dir', type=Path, default=HERE / 'originals', help='Directory with manifest PNGs')
    parser.add_argument('--repo-url', default=DEFAULT_REPO)
    parser.add_argument('--repo-dir', type=Path, help='Existing clean local clone; otherwise clone in a temporary directory')
    parser.add_argument('--branch', default='master')
    parser.add_argument('--add', action='append', default=[], metavar='N=/path/image.png',
                        help='Add/replace a render for any future version')
    parser.add_argument('--folder', action='append', default=[], metavar='N=livery/iterations/...',
                        help='Specify iteration directory for version N')
    parser.add_argument('--dry-run', action='store_true', help='Validate all inputs offline; do not clone or push')
    parser.add_argument('--no-push', action='store_true', help='Prepare local commit without pushing')
    parser.add_argument('--skip-remote-verify', action='store_true', help='Skip optional raw HTTPS byte verification')
    args = parser.parse_args()
    if args.branch != 'master':
        raise ValueError('Only master currently supported (protects archive naming conventions).')
    folders = parse_pairs(args.folder, '--folder')
    imgs = load_assets(args)
    print(f'Validated {len(imgs)} original PNG files:')
    for n, (path, v) in imgs.items():
        print(f'  v{n}: {v["bytes"]:,} bytes, {v["width"]}x{v["height"]}, sha256 {v["sha256"][:16]}… — {path.name}')
    if args.dry_run:
        print('Dry-run complete; no GitHub writes attempted.')
        return
    env = git_env()
    if not shutil.which('git'):
        raise RuntimeError('Git is not installed. Install Git and authenticate with GitHub.')
    with tempfile.TemporaryDirectory(prefix='model29-git-') as tmp:
        if args.repo_dir:
            repo = args.repo_dir.expanduser().resolve()
            clean_git(repo, env)
        else:
            repo = Path(tmp) / 'custom-wraps'
            print('Cloning current master...')
            run(['git', 'clone', '-q', '--depth', '1', '--branch', args.branch, args.repo_url, str(repo)], env=env)
        records = []
        for n, (src, info) in imgs.items():
            folder = find_version_folder(repo, n, folders.get(n))
            target = folder / 'renders' / f'{n}_day_night_full_reveal_original.png'
            target.parent.mkdir(parents=True, exist_ok=True)
            if target.exists():
                before = digest(target)
                if before['sha256'] != info['sha256']:
                    raise RuntimeError(f'REFUSING to overwrite different existing original: {target}')
            else:
                shutil.copyfile(src, target)
            if digest(target) != info:
                raise RuntimeError(f'Checksum mismatch after copying v{n}')
            rel = target.relative_to(repo)
            embed_status(folder / 'README.md', n, target.name, info)
            records.append((n, rel, info))
        create_gallery(repo, records)
        run(['git', 'add', 'livery/README.md', str(GALLERY), 'livery/iterations'], cwd=repo, env=env)
        # Checking actual Git object hashes (not just source files)
        for n, rel, info in records:
            git_oid = run(['git', 'hash-object', '--', str(rel)], cwd=repo, env=env)
            if git_oid != info['git_blob_sha1']:
                raise RuntimeError(f'Git blob hash mismatch: v{n}')
        status = run(['git', 'status', '--porcelain'], cwd=repo, env=env)
        if not status:
            print('Everything already up to date. Verify remote image links from the gallery.')
            return
        run(['git', '-c', 'user.name=MODEL 2.9 Archive', '-c', 'user.email=model29-archive@users.noreply.github.com',
             'commit', '-q', '-m', 'archive(livery): upload original day-night PNG renders without recompression'], cwd=repo, env=env)
        new_sha = run(['git', 'rev-parse', 'HEAD'], cwd=repo, env=env)
        if args.no_push:
            print(f'Prepared local commit {new_sha}; --no-push chosen. Clone: {repo}')
            return
        print('Pushing original Git blobs to GitHub...')
        run(['git', 'push', 'origin', f'HEAD:{args.branch}'], cwd=repo, env=env)
        remote_sha = run(['git', 'ls-remote', 'origin', f'refs/heads/{args.branch}'], cwd=repo, env=env).split()[0]
        if remote_sha != new_sha:
            raise RuntimeError(f'Remote commit mismatch: expected {new_sha}, got {remote_sha}')
        print(f'GitHub branch HEAD: VERIFIED {new_sha}')
        if not args.skip_remote_verify:
            remote_http_verify(args.repo_url, new_sha, records)
        print(f'SUCCESS: {len(records)} original PNGs committed and confirmed, without recompression.')
        print(f'Gallery: https://github.com/DMinghao/custom-wraps/blob/{new_sha}/{GALLERY.as_posix()}')


if __name__ == '__main__':
    try:
        main()
    except (RuntimeError, OSError, ValueError, json.JSONDecodeError) as e:
        print(f'ERROR: {e}', file=sys.stderr)
        print('Original files are unchanged. No successful remote upload is claimed.', file=sys.stderr)
        sys.exit(1)