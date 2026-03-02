# AGENT.md - 專案 AI 代理指南

## 專案概述
- **類型**：瀏覽器文字 RPG 遊戲
- **風格**：東方武俠（江湖、門派、內功、劍法等元素）
- **核心機制**：AI 驅動的互動式劇情，玩家透過選擇影響故事走向
- **語言**：繁體中文 (zh-TW)

## 核心遊戲循環
1. AI 產生初始劇情文本（包含場景描述、角色對話）
2. 畫面顯示劇情文字 + 4 個選項供玩家選擇
3. 玩家點選其中一個選項
4. AI 根據玩家選擇 + 歷史劇情脈絡，產生下一段劇情與新的 4 個選項
5. 重複步驟 2-4，直到故事結束

## 技術棧
- **前端**：React 18 + TypeScript + Vite
- **AI**：Anthropic Claude API（劇情生成、選項生成）
- **樣式**：依開發進度決定（CSS Modules / Tailwind / styled-components）
- **部署**：靜態網站（Vercel / Netlify / GitHub Pages）

## 環境與建置
- 安裝：`npm install`
- 開發：`npm run dev`
- 建置：`npm run build`
- 預覽：`npm run preview`

## 專案結構（規劃）
```
src/
├── components/       # UI 元件（劇情顯示、選項按鈕、歷史紀錄等）
├── hooks/            # 自定義 hooks
├── services/         # API 呼叫（Claude API 封裝）
├── types/            # TypeScript 型別定義
├── utils/            # 工具函數
├── App.tsx
└── main.tsx
```

## AI 整合注意事項
- API Key 必須存放在 `.env` 檔案中（`VITE_ANTHROPIC_API_KEY`），絕對不能提交到 git
- 使用 Claude API 時需透過後端 proxy 或 edge function 避免前端直接暴露 API Key
- Prompt 設計須維持武俠世界觀一致性，包含角色狀態追蹤
- 每次請求應攜帶足夠的歷史上下文讓 AI 維持劇情連貫

## 程式碼風格
- 元件命名：PascalCase（如 `StoryPanel.tsx`）
- 函數/變數命名：camelCase
- 型別命名：PascalCase，interface 優先於 type
- Props 使用解構
- 禁止 `console.log`（開發除錯完畢後移除）
- 禁止 `any` 型別

## 開發注意事項
- 存取金鑰用 `.env`，確認 `.gitignore` 已設定
- 每個元件保持單一職責
- AI 回傳格式需定義明確的 JSON schema，確保前端能穩定解析
- 考慮 loading 狀態與錯誤處理（AI 回應可能較慢）
- 劇情歷史應保存在 state 中，方便玩家回顧

---

## 劇情開發守則

### 生成流程（骨架優先）
1. **先生成結構骨架**：節點 ID、選項文字、nextId 指向、effects、check 門檻
2. **text 欄位只放一句話**：描述該節點的情境（如「嚴墨揭露母親身份」），不寫完整氛圍文字
3. **結構確認正確後**，再由用戶指示逐段補充氛圍描寫
4. 這樣做是為了節省 token，避免生成大量文字後又因結構問題需要重寫

### 讀檔守則（按任務類型）
| 任務 | 需要讀的檔案 | 不需要讀的 |
|------|------------|-----------|
| 生成新節點 | AGENT.md + STORY_OUTLINE + NODE_TRACKER.md + CHARACTER_BIBLE（相關角色） | chapterXX.json |
| 修改屬性平衡 | STATES.md + NODES_MAP.md | 完整 JSON |
| 檢查一致性 | NODE_TRACKER.md + NODES_MAP.md | 完整 JSON |
| 補充氛圍文字 | CHARACTER_BIBLE（相關角色）+ 該節點前後 2~3 個節點的 JSON | 完整 JSON |

**核心原則：絕對不需要每次都讀完整 chapterXX.json**

### 節點生成規範
- 每個節點必須有 `id` 欄位
- 選項文字只描述行動，不含內心描寫或動機解釋
  - ✗ 「去藏經閣借閱功法，只要自身實力夠強，什麼陰謀都不怕」
  - ✓ 「去藏經閣借閱功法」
- 選項數量 2~4 個
- 同一節點的選項不應全部指向同一個 nextId（除非劇情需要匯聚）
- check 門檻要參考 STATES.md 中的成長預期（初始值 + 合理路線增長可達到）
- 非結局節點必須有 `choices` 或 `passId/failId`
- 結局節點必須有 `isEnding: true`，不應有 `choices`

### 更新義務
每次修改 JSON 後，**必須**同步更新以下檔案：
- `NODES_MAP.md` — 節點拓撲
- `NODE_TRACKER.md` — 新節點的揭露信息、時間線、角色知識
- `STORY_OUTLINE.md` / `STORY_OUTLINE_CHXX.md` — 如果結構有變動

### 開發參考檔案一覽
| 檔案 | 用途 | 位置 |
|------|------|------|
| `AGENT.md` | 開發守則（本檔案） | 專案根目錄 |
| `WORLD.md` | 世界觀速查 | `src/data/story/` |
| `CHARACTER_BIBLE.md` | 角色性格、動機、行為邏輯 | `src/data/story/` |
| `STATES.md` | 屬性系統、check 門檻、成長預期 | `src/data/story/` |
| `STORY_OUTLINE.md` | 全篇故事骨幹 | `src/data/story/` |
| `STORY_OUTLINE_CHXX.md` | 各章詳細結構 | `src/data/story/` |
| `NODES_MAP.md` | 節點拓撲圖（id → nextId） | `src/data/story/` |
| `NODE_TRACKER.md` | 動態追蹤：時間線、揭露、角色知識 | `src/data/story/` |
| `game.ts` | 型別定義、初始屬性 | `src/types/` |
