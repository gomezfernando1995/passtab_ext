

chrome.runtime.onInstalled.addListener(function () {
    chrome.tabs.onActivated.addListener(function (activeInfo) {
        chrome.tabs.sendMessage(activeInfo.tabId, { action: "verificarLocalStorage" });
    });
});

