chrome.runtime.onInstalled.addListener(function () {
    // Agrega el evento de escucha para cuando se selecciona una pestaña
    chrome.tabs.onActivated.addListener(function (activeInfo) {
        var tabId = activeInfo.tabId;

        // Obtener la información de la pestaña actual
        chrome.tabs.get(tabId, function (tab) {
            var tabUrl = tab.url;
            var localURL= JSON.stringify(localStorage.getItem("url"));
            if(tabUrl===localURL){
                console.log("La URL de la pestaña seleccionada es: " + tabUrl);
            }else{
                console.log("no existe la url "+tabUrl);
            }
            // Puedes hacer lo que necesites con la URL de la pestaña aquí
        });
        // Puedes hacer lo que necesites con el ID de la pestaña aquí
    });
});