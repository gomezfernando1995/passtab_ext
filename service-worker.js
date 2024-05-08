

chrome.runtime.onInstalled.addListener(function () {
    // Escucha el evento onActivated en chrome.tabs
    chrome.tabs.onActivated.addListener(function (activeInfo) {
        chrome.tabs.sendMessage(activeInfo.tabId, { action: "verificarLocalStorage" });
    });
})