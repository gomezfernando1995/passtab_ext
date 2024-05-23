

chrome.tabs.onCreated.addListener(function(tab) {
    chrome.storage.local.get(['password', 'pages'], function(data) {
      var password = data.password;
      var pages = data.pages || {};
  
      if (password && tab.url && !pages[tab.url]) {
        // Guardar la URL de la pestaña junto con la contraseña
        pages[tab.url] = password;
        chrome.storage.local.set({ 'pages': pages }, function() {
          console.log('Página protegida guardada');
        });
      }
    });
  });