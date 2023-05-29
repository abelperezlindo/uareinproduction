// options.js

document.addEventListener('DOMContentLoaded', function() {
  var form = document.getElementById('configForm');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    var textAreaValue = document.getElementById('textArea').value;

    // Guardar los datos en el almacenamiento local
    chrome.storage.local.set({ 'textData': textAreaValue }, function() {
      console.log('Datos guardados');
    });
  });
});
