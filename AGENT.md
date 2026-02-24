# AGENTS.md - 專案 AI 代理指南

## 專案概述
- 前端應用，使用 React 18 + TypeScript + MUI。
- Module Federation 整合 Angular 子模組。
- 目標：響應式 UI，支援 i18n (zh-TW)。

## 環境與建置
- 安裝：`npm ci`
- 開發：`npm run dev`
- 建置：`npm run build`
- 測試：`npm run test` (Vitest + React Testing Library)

## 程式碼風格
- ESLint + Prettier：`npm run lint`
- Commitizen：`npm run commit`
- 狀態管理：Zustand，避免 Redux。
- 組件命名：PascalCase，props 解構。

## 測試要求
- 每個功能至少 80% 覆蓋率。
- 快照測試 UI，整合測試 API。

## PR 與部署
- PR 標籤：feat/fix/refactor。
- 部署：Vercel/Netlify，檢查 Lighthouse 分數 >90。

## 注意事項
- 無 console.log。
- 存取金鑰用 .env，gitignore 已設。
- 優先無障礙 (a11y)，MUI 預設符合。
