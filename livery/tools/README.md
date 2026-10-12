# MODEL 2.9 — 可复用 GitHub 原始 PNG 上传脚本

脚本：[sync_livery_pngs.py](sync_livery_pngs.py)（Python 3 + Git，无需第三方 Python 依赖）。用于上传未来每一版渲染的**原始 PNG 字节**，并维护图集。**脚本发布本身不代表执行环境自动具备 GitHub 网络访问或登录凭据。**

## 上传新版本（例如 #28）

先在 GitHub 仓库创建该版本的迭代目录和 README；然后在**具备 GitHub 网络访问和 GitHub 登录状态**的电脑上运行：

```bash
python3 livery/tools/sync_livery_pngs.py --add 28=/absolute/path/to/render28.png
```

程序会克隆最新 master、验证 PNG、计算 SHA-256 / Git Blob、更新图像图集和 README、提交并 push。只有远端提交和验证通过才会输出 SUCCESS。支持通过 `GITHUB_TOKEN` / `GH_TOKEN`，Git Credential Manager 或 `gh auth login` 登录；不要把密钥写进仓库或聊天。

## #20–#27 八张历史原图

已在 [2026-10-12 提交 c68ab65](https://github.com/DMinghao/custom-wraps/commit/c68ab652e91f9b4c030663f2caa146ef86b482c4) 中上传并核验，图集：[RENDER_GALLERY_20_ONWARD.md](../visual-archive/RENDER_GALLERY_20_ONWARD.md)。本目录脚本随时可用于后续版本。

旧版完整备份包保留在 ChatGPT Library：`/MODEL-2.9/MODEL_2_9_GitHub_PNG_Upload_20-27.zip`。解压后的 bundle 也包含脚本、原图与校验 manifest；无需重复上传这 8 张，除非核验出现差异。
