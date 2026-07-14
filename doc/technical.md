# Technical

## 1. 技术栈

- React 18、TypeScript 5、Less、Vite 5，构建 `base: './'`。
- DOM/CSS 渲染 390 × 844 固定画布；透明 PNG 负责状态立绘，9:16 PNG 负责开场、中点和结局。
- Web Audio API 合成音效；`localStorage` 保存主题独立最高分。
- 制作期人物图和正式海报来自 Aigram transit；运行时不调用生图接口。

## 2. 目录结构

```text
src/PortraitQuest/PortraitQuest.tsx        页面状态组合与输入
src/PortraitQuest/cartridge/autumnKiosk.ts 18 个事件、文案、状态和结局
src/PortraitQuest/identity/isabel.ts        Isabel 用户名与本地资产映射
src/PortraitQuest/hooks/usePortraitQuest.ts 回合、抽牌、分数和结局
src/PortraitQuest/hooks/usePreloadedAssets.ts 图片预载、解码与进度
src/PortraitQuest/PortraitQuest.less        共享布局与秋日主题皮肤
public/art/isabel/                          锚点、7 状态、4 剧情图
doc/publish-record.md                       UUID、仓库、线上验证记录
```

## 3. 核心模块

- `usePortraitQuest` 保存回合、四项状态、已用事件、隐藏标记、当前立绘、中点和结局；1500 ms 开场缓冲与 1100 ms 选择锁避免重复输入。
- Theme Cartridge 提供事件、状态标签、发现计分标记和特殊结局标记；Hook 不包含具体失物文案。
- Isabel Identity 的用户名来自用户确认；平台 ID 暂空，因为已知真实用户名查询仍返回 `data: null`。
- 公开 Remix 仓库不包含原始截图裁图、源头像 URL、绿幕原图、transit 日志或制作脚本；这些敏感制作记录只保留在本地母项目 `portrait-quest`。
- 资源通过 `import.meta.env.BASE_URL` 读取；`.pq-viewport` 使用 `100dvh` 跟随平台窗口，`ResizeObserver` 依据容器实际尺寸按 `min(width/390, height/844)` 缩放，并监听 `visualViewport` 变化。
- 开始页出现前预载并解码 Identity Pack 的 7 张状态立绘和 4 张剧情图；失败资源也会结算进度，避免加载页永久卡住。
- `src/game-id.ts` 由发布脚本注入永久 UUID，并由 `src/main.tsx` 导入作为平台 session 锚点。

## 4. 扩展点

- 改事件、状态语义或结局：编辑 `cartridge/autumnKiosk.ts`。
- 改回合、阈值、计分或事件筛选：编辑 `hooks/usePortraitQuest.ts`。
- 换主角：替换 SourceIdentity，重新生成锚点、7 状态与 4 剧情图；不要直接复用 Isabel 的主题人物资产。
- 改布局、颜色和动效：编辑 `PortraitQuest.less` 中 `.pq-shell--autumn-kiosk`。
- 加平台存档或排行榜：使用 `src/game-id.ts` 的永久 UUID 作为 session_id，不能复用其他游戏 ID。
