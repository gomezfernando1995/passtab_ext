chrome.runtime.onInstalled.addListener(function() {
    // Agrega el evento de escucha para cuando se selecciona una pestaña
    chrome.tabs.onActivated.addListener(function(activeInfo) {
      var tabId = activeInfo.tabId;
      console.log("La pestaña seleccionada tiene el ID: " + tabId);
      // Puedes hacer lo que necesites con el ID de la pestaña aquí
    });
  });