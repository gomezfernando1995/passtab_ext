// popup.js

document.addEventListener(
  'visibilitychange', function () {
    if (document.visibilityState === 'visible') {
      var urlGuardada = sessionStorage.getItem('urlGuardada');
      var urlActual = window.location.href;

      if (urlGuardada && urlGuardada === urlActual) {
        alert("esta url esta guardad ");
        console.log('La URL guardada coincide con la URL actual');
      } else {
        alert("esta url no existe ");
      }
    }
  }
)


document.addEventListener('DOMContentLoaded', function () {
  // Add your popup logic here
  var passwordSession = sessionStorage.getItem('password')



  alert("hola")
  console.log('Ventana abierta');
});