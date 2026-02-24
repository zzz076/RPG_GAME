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
