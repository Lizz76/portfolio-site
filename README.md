# 游戏策划作品集站点

这是一个静态作品集网站，文档区支持站内读取 Markdown 文章，并自动生成右侧目录。

现在可以直接双击 `index.html` 打开。为了兼容 Safari 的 `file://` 读取限制，`article-data.js` 已经内置了当前 4 篇 Markdown 文章作为离线兜底。

如果你希望直接读取最新 `.md` 文件，也可以用本地静态服务器打开：

```bash
cd /Users/a1/Documents/Codex/2026-06-03/vibecoding/outputs/portfolio-site
python3 -m http.server 8765 --bind 127.0.0.1
```

然后访问：

```text
http://127.0.0.1:8765/
```

## 后续替换位置

- 个人信息：改 `index.html` 里的姓名、邮箱和微信。
- 项目内容：改 `script.js` 里的 `projects` 数组。
- 拆解案：改 `script.js` 里的 `breakdowns` 数组。
- 截图：把真实截图放进 `assets/`，再改 `script.js` 里项目的 `image` 和 `screenshots` 字段。
- Markdown 文章：把新的 `.md` 放进 `assets/articles/`，再改 `script.js` 里对应文档卡片的 `articleUrl`。
- 离线文章数据：如果你直接双击 `index.html` 打开，改完 `.md` 后需要同步更新 `article-data.js`。
- 文档附件：把新的 `.docx` 放进 `assets/docs/`，转成 PDF 放进 `assets/docs/pdf/`，再改 `script.js` 里对应文档卡片的 `docUrl` 和 `pdfUrl`。

更新离线文章数据：

```bash
cd /Users/a1/Documents/Codex/2026-06-03/vibecoding/outputs/portfolio-site
node tools/build-article-data.mjs
```

## 已接入的 GMHub 项目

- BubbleDream: https://www.gmhub.com/game/6838
- 达尔: https://www.gmhub.com/game/7774
- 藏好影子: https://www.gmhub.com/game/9184

## 已接入的其他游戏项目

- 纸面骑士 Nonstop: https://www.taptap.cn/app/779762?os=pc
- 匠道济民卷: https://www.bilibili.com/video/BV1raVgzEE5o
- 梦中之境 Aisling: https://www.bilibili.com/video/BV1VyzQYGE74

## 已接入的 DOCX 文档

- 2025聚光灯gamejam 副本 -> `assets/docs/spotlight-gamejam-2025.docx`
- SLG游戏创意 -> `assets/docs/slg-game-idea.docx`
- DO优化建议与新增玩法 -> `assets/docs/do-optimization-new-play.docx`
- DO 拆解文档 -> `assets/docs/do-breakdown.docx`

站内阅读使用 Markdown 版本：

- `assets/articles/spotlight-gamejam-2025.md`
- `assets/articles/slg-game-idea.md`
- `assets/articles/do-optimization-new-play.md`
- `assets/articles/do-breakdown.md`

PDF 版本保留为文章顶部下载附件：

- `assets/docs/pdf/spotlight-gamejam-2025.pdf`
- `assets/docs/pdf/slg-game-idea.pdf`
- `assets/docs/pdf/do-optimization-new-play.pdf`
- `assets/docs/pdf/do-breakdown.pdf`

## 当前素材

- `assets/game-montage-placeholder.png` 是 AI 生成的临时首屏图。
- `assets/games/` 里的图片来自已接入的 GMHub 项目页，以及 `/Users/a1/Downloads/作品集游戏/` 中的作品集游戏素材，用作项目卡片和详情截图。
