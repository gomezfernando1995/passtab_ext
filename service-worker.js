

chrome.tabs.onActivated.addListener(function (activeInfo) {
    chrome.tabs.sendMessage(activeInfo.tabId, { action: "verificarLocalStorage" });
});


