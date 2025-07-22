const toggleBtn = document.getElementById('toggle-theme');
const body = document.body;

toggleBtn.addEventListener('click', () => {
  body.classList.toggle('light-mode');

  if (body.classList.contains('light-mode')) {
    toggleBtn.textContent = '🌑 Modo Escuro';
  } else {
    toggleBtn.textContent = '🌙 Modo Claro';
  }
});
