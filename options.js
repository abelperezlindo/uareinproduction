
var form = document.getElementById('configForm');
// Get from storage.
const saved  = chrome.storage.local.get(["list-urls"]);
saved.then(setDefaultText);

form.addEventListener('submit', function(event) {
  event.preventDefault();
  var textAreaValue = document.getElementById('list-urls').value;
  // Guardar los datos en el almacenamiento local
  chrome.storage.local.set({ 'list-urls': textAreaValue }, function() {
    console.log('Datos guardados');
    window.location.reload();
  });
});
function setDefaultText(result){
  document.getElementById('list-urls').defaultValue = result['list-urls'];
  document.getElementById('list-urls').setAttribute('value', result['list-urls']);
}

