chrome.runtime.onInstalled.addListener(function () {
    // Agrega el evento de escucha para cuando se selecciona una pestaña
    chrome.tabs.onActivated.addListener(function (activeInfo) {
        var tabId = activeInfo.tabId;

        chrome.tabs.get(tabId, function (tab) {
            var tabURL = tab.url;
            console.log("La url es : " + tabURL);
        })
        // Puedes hacer lo que necesites con el ID de la pestaña aquí
    });
});