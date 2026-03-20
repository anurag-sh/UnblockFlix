// ---- REMOVE data-no-focus-lock elements ----
function removeNoFocusLockElements() {
  const elements = document.querySelectorAll('[data-no-focus-lock="true"]');
  elements.forEach(el => el.remove());
}

// Run once
removeNoFocusLockElements();

// Observe DOM changes
const observer = new MutationObserver(() => {
  removeNoFocusLockElements();
});

observer.observe(document.body, {
  childList: true,
  subtree: true
});

// ---- Notify background if on /watch ----
function checkWatchPage() {
  const isWatchPage = window.location.href.includes("/watch");

  chrome.runtime.sendMessage({
    type: "WATCH_PAGE",
    active: isWatchPage
  });
}

// Run initially
checkWatchPage();

// Detect SPA navigation (Netflix uses it)
let lastUrl = location.href;

setInterval(() => {
  if (location.href !== lastUrl) {
    lastUrl = location.href;
    checkWatchPage();
  }
}, 1000);