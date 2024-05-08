// popup.js

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.action === "verificarLocalStorage") {
    var urlActual = window.location.href;
    var urlGuardada = sessionStorage.getItem('urlGuardada');
    console.log(urlActual);
  }

});
