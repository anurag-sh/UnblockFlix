# UnblockFlix
UnblockFlix is a Chrome extension that enhances Netflix streaming by resolving playback restrictions due to home network and ensuring a smoother viewing experience.

## ✨ Features

- 🧹 Automatically removes elements ui blocking elemnts
- 🔄 Uses MutationObserver to continuously clean dynamically added elements
- 🚫 Blocks GraphQL requests **only on the `/watch` page**
- ⚡ Works seamlessly with Netflix’s SPA navigation
- 🎯 Runs only on Netflix (no impact on other websites)

## 🛠 How It Works

- A content script monitors and removes problematic DOM elements that interfere with playback.
- The extension detects when the user is on a `/watch` page.
- A background service worker blocks GraphQL requests only during active playback sessions.

---

## 🚀 Installation Guide

Follow these steps to set up the extension on your browser:

### 1. Download the Project
- Click the green **Code** button on this repository
- Select **Download ZIP**
- Extract the ZIP file to a folder on your system

---

### 2. Open Chrome Extensions Page
- Open Google Chrome
- Go to: chrome://extensions/

---

### 3. Enable Developer Mode
- Turn ON **Developer mode** (top-right corner)

---

### 4. Load the Extension
- Click **Load unpacked**
- Select the extracted project folder

---

### 5. Done ✅
- The extension is now installed and active
- Open Netflix and enjoy a smoother streaming experience

---

## 🧪 How to Use

- Simply open Netflix in your browser
- The extension works automatically in the background
- No additional setup or configuration required

---

## 🔄 Updating the Extension

If you make changes or pull updates:

1. Go to `chrome://extensions/`
2. Click the **Reload** button on the extension

---

## ⚠️ Notes

- This extension only runs on Netflix
- Refresh the Netflix page after installing for best results

---

## 💡 Support

If you face any issues, try:
- Refreshing the page
- Reinstalling the extension

---

**UnblockFlix — Watch without interruptions.**
