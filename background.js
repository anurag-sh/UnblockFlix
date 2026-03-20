let isWatchPageActive = false;

// Listen for page status from content script
chrome.runtime.onMessage.addListener((message) => {
  if (message.type === "WATCH_PAGE") {
    isWatchPageActive = message.active;
    console.log("Watch page active:", isWatchPageActive);
  }
});

// Block GraphQL only when on /watch
chrome.webRequest.onBeforeRequest.addListener(
  function (details) {
    if (
      isWatchPageActive &&
      details.url.includes("graphql")
    ) {
      console.log("🚫 Blocked GraphQL:", details.url);
      return { cancel: true };
    }
  },
  { urls: ["*://www.netflix.com/*"] },
  ["blocking"]
);