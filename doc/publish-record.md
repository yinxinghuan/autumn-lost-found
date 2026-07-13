# 发布记录

## 身份

- 游戏 ID：`autumn-lost-found`
- 永久 UUID：`0eca2451-c618-4f38-a47e-c6eb8d755444`
- 主角真实用户名：`Isabel`
- 平台用户 ID：暂空；已知真实用户名反查仍返回 `data: null`，计划后续联调解决，不伪造 ID。
- 分类：`strategy`

## 交付地址

- 源码仓库：`https://github.com/yinxinghuan/autumn-lost-found`
- 在线游戏：`https://yinxinghuan.github.io/autumn-lost-found/`
- Remix 源码包：`https://github.com/yinxinghuan/autumn-lost-found/archive/refs/heads/main.zip`
- 列表海报：`https://yinxinghuan.github.io/games/posters/autumn-lost-found.png`

## 发布门禁

- 2026-07-14：正式海报通过 Aigram transit 生成；首版因领取牌伪文字淘汰，第二版改为无刻字枫叶，通过 1024 × 1024 与 160 × 160 检查。
- 2026-07-14：`npm ci` 与 `npm run build` 通过，Vite `base: './'`。
- 2026-07-14：UUID 注入与唯一性检查通过。
- 2026-07-14：公开仓库隐私审计完成；原始截图裁图、源头像 URL、绿幕原图、transit 日志和制作脚本不进入公开 Git 历史。
- 2026-07-14：GitHub Pages 初次 workflow `29284780279` 成功；页面 metadata 修复后的 workflow `29284905219` 成功。
- 2026-07-14：线上 HTML 标题为 `Autumn Lost & Found` 并返回 `index-2jLKSJsw.js`；bundle 实测包含 `AUTUMN LOST & FOUND`、`Isabel` 和本游戏 UUID。
- 2026-07-14：线上 `poster.png`、intro 图、`main.zip`、games 列表海报均返回 HTTP 200。
- 2026-07-14：公开 `games.json` 已将本游戏置于第一位并包含 UUID、strategy 分类与 zipurl。
- 平台客户端是否可见仍取决于同事的迁移工具将 games.json 重新入库；本工作区没有该迁移工具，不能把 GitHub 清单更新误报为平台 DB 已更新。
