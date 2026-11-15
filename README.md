# 霧嶼 Mist Isle｜作業繳交資料

以台灣茶為靈感的品牌概念網站，包含三頁、共 18 款茶飲的互動選單、品牌手記，以及明確標示為構想中的茶席位置。

## 繳交資訊

- **專案主題：** 高級茶飲品牌介紹網站
- **GitHub Repository：** https://github.com/yiqun27/drinks_site
- **網頁連結：** 推送後由 GitHub Pages Actions 部署至 https://yiqun27.github.io/drinks_site/
- **協作規則：** [AGENTS.md](./AGENTS.md)
- **規則如何協助 AI 延伸：** 飲品資料集中在 `assets/script.js`，並明訂每頁六款、共三頁的資料規格、命名方式和風味欄位。AI 可依照相同格式新增飲品，再沿用既有輪播與卡片呈現；網站結構、視覺和互動規則也分別明確限定在 HTML、CSS 與 JavaScript 檔案中。

## 本機預覽

直接用瀏覽器開啟 `index.html`，或在專案資料夾啟動任一靜態檔案伺服器。網站不需要套件安裝或建置流程。

## 發佈到 GitHub Pages

將專案推送至 GitHub repository 的 `main` 分支後，`.github/workflows/pages.yml` 會使用 GitHub Actions 部署網站。若這是第一次部署，請在 repository 的 **Settings → Pages** 將部署來源設為 **GitHub Actions**。`index.html` 位於根目錄，網站使用相對資源路徑，可由 GitHub Pages 提供。

## 延伸方式

新增或調整飲品時，依照 [AGENTS.md](./AGENTS.md) 的規則編輯 `assets/script.js` 中的 `drinks` 陣列；頁面結構與樣式分別維護於 `index.html` 和 `assets/style.css`。
