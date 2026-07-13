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
- GitHub Pages workflow、线上 bundle、games.json 与海报 URL 的最终验证在部署完成后追加。
