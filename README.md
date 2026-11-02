# 偏航游戏 · Offcourse Games

独立游戏工作室官网。纯 HTML / CSS / JavaScript，无需安装依赖或构建。

## 本地预览

在本目录运行 `python3 -m http.server 8080`，打开 http://localhost:8080 。

## GitHub Pages

1. 在 GitHub 新建公开仓库 `offcourse-games`。
2. 将本目录内容上传到仓库 main 分支，包含 `.github/workflows/pages.yml`。
3. 进入 Settings → Pages → Build and deployment，将 Source 设置为 GitHub Actions。
4. 在 Actions 中运行 Deploy website to GitHub Pages 工作流。
5. 部署地址：`https://ranr21094-ai.github.io/offcourse-games/`。

可使用命令：
```sh
gh auth login -h github.com
git init -b main
git add .
git commit -m "Create Offcourse Games official website"
gh repo create offcourse-games --public --source=. --push
gh api --method POST repos/ranr21094-AI/offcourse-games/pages -f build_type=workflow
gh workflow run pages.yml
```

作品的“了解游戏”按钮打开开发中详情。尚未配置游戏试玩链接；提供真实地址后再接入。图形为 CSS 概念插画，非游戏实机画面。
