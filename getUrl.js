function compareUrl(tabUrl){
    var localURL= JSON.stringify(localStorage.getItem("url"));
    if(tabUrl===localURL){
        console.log("existe esta url");
    }else{
        console.log("no existe esta url" + tabUrl);
    }
}

chrome.runtime.onInstalled.addListener(function () {
    // Agrega el evento de escucha para cuando se selecciona una pestaña
    chrome.tabs.onActivated.addListener(function (activeInfo) {
        var tabId = activeInfo.tabId;

        chrome.tabs.get(tabId, function (tab) {
            var tabUrl = tab.url;
            compareUrl(tabUrl);
        });
    });
});


document.addEventListener(
    'visibilitychange', function () {
      if (document.visibilityState === 'visible') {
        var urlGuardada = sessionStorage.getItem('urlGuardada');
  
        if (urlGuardada && urlGuardada === urlActual) {
          alert("esta url esta guardad ");
          console.log('La URL guardada coincide con la URL actual');
        } else {
          alert("esta url no existe ");
        }
      }
    }
  )