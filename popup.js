// popup.js
function guardarContraseña() {
  var password = document.getElementById('passwordInput').value;
  chrome.storage.local.set({ 'password': password }, function() {
    console.log('Contraseña guardada');
    window.close();
  });
}