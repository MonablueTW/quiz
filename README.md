# 段考刷題本：上架與安裝說明

## 一、把網頁放上網路（只要做一次，免費）
使用 GitHub Pages：
1. 到 github.com 註冊帳號（免費）。
2. 右上角「+」→ New repository，名稱例如 `quiz`，選 **Public**，按 Create。
3. 在新的 repository 頁面點「uploading an existing file」，把 quiz-app 資料夾**裡面的所有檔案和資料夾**（index.html、sw.js、manifest.json、icon-180.png、icon-512.png、data、img）一起拖進去，按 Commit changes。
4. 進入 Settings → Pages → Branch 選 `main`、資料夾選 `/ (root)` → Save。
5. 等 1～2 分鐘，網址會是：`https://你的帳號.github.io/quiz/`

## 二、裝到兒子的 iPhone
1. 在**有網路**的時候，用 **Safari**（不能用 LINE 或 Chrome 內建瀏覽器）打開上面的網址。
2. 點下方「分享」按鈕 → 「加入主畫面」→ 加入。
3. 從桌面「刷題本」圖示打開一次，等首頁出現。完成！之後沒有網路也能用。

## 三、之後新增科目或題目
把新題目傳給 Claude，會產生新的題庫檔（放在 data 資料夾），並更新 index.html 和 sw.js。
上傳到 GitHub 覆蓋舊檔後，兒子只要在有網路時打開 App 一次（建議打開→關掉→再打開），就會更新成新版本。

## 小提醒
- 作答紀錄與錯題本存在手機裡，刪除桌面圖示會一併清除。
- 第 22 題講義答案可能有誤，App 內有提醒，建議問老師確認。
