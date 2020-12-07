function confirmForm() {
  const formVisible = document.getElementById('formVisible');
  const formDone = document.getElementById('formDone');
  formVisible.style.display = 'none';
  formDone.style.display = 'block';

  return false;
}

function backToHome() {
  window.location = '/';
}
