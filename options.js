var form = document.getElementById('configForm');
console.log('Datos no guardados');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  var textAreaValue = document.getElementById('listUrls').value;
  // Guardar los datos en el almacenamiento local
  chrome.storage.local.set({ 'listUrls': textAreaValue }, function() {
    console.log('Datos guardados');
  });
});