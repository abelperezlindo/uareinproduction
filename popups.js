var form = document.getElementById('popup-form');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  console.log('Datos guardados');
  window.location.reload();
});
