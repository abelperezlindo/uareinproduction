// Saves options to chrome.storage
const saveOptions = () => {
  const color = document.getElementById('color').value;
  const likesColor = document.getElementById('like').checked;

  chrome.storage.sync.set(
    { favoriteColor: color, likesColor: likesColor },
    () => {
      // Update status to let user know options were saved.
      const status = document.getElementById('status');
      status.textContent = 'Options saved.';
      setTimeout(() => {
        status.textContent = '';
      }, 750);
    }
  );
};

const peasteCurrentDomain = async () => {
  let dominio = document.getElementById('domain');
  if (!dominio.value) {
    const host = await getCurrentTabUrl();
    dominio.setAttribute('value', window.location.host)
  }
};

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
const restoreOptions = () => {
  chrome.storage.sync.get(
    { favoriteColor: 'red', likesColor: true },
    (items) => {
      document.getElementById('color').value = items.favoriteColor;
      document.getElementById('like').checked = items.likesColor;
    }
  );
};
const getCurrentTabUrl = async () => {
  const tabs = await chrome.tabs.query({ active: true })
  return tabs[0].url
}
//document.addEventListener('DOMContentLoaded', restoreOptions);
document.addEventListener('DOMContentLoaded', peasteCurrentDomain);
document.getElementById('save').addEventListener('click', saveOptions);