chrome.runtime.onInstalled.addListener(function() {
    // Obtener la URL actual al momento de la instalación
    chrome.tabs.query({ active: true, lastFocusedWindow: true }, function(tabs) {
        var urlActual = tabs[0].url;

        // Guardar la URL actual en sessionStorage
        sessionStorage.setItem('urlGuardada', urlActual);

        // Mostrar un mensaje o realizar otras acciones si lo deseas
        console.log('URL guardada automáticamente:', urlActual);
    });
});