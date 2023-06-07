
var form = document.getElementById('configForm');
// Get from storage.
const saved  = chrome.storage.local.get(["list-urls"]);
saved.then(setDefaultText);

form.addEventListener('submit', function(event) {
  event.preventDefault();
  var textAreaValue = document.getElementById('list-urls').value;
  var parts = textAreaValue.split("\n");
  // Guardar los datos en el almacenamiento local
  chrome.storage.local.set({ 'list-urls': parts }, function() {
    console.log('Datos guardados');
    window.location.reload();
  });
});
function setDefaultText(result){
  let listAsText = result['list-urls'].join("/n");
  document.getElementById('list-urls').defaultValue = listAsText;
  document.getElementById('list-urls').setAttribute('value', listAsText);
}
