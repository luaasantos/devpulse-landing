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

const form = document.getElementById('newsletter-form');
const emailInput = document.getElementById('email');
const message = document.getElementById('form-message');

form.addEventListener('submit', (e) => {
  e.preventDefault(); // evita recarregar a página

  const email = emailInput.value.trim();
  const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (email === '') {
    message.textContent = 'Por favor, preencha o campo de e-mail.';
    message.className = 'form-message error';
  } else if (!emailValido) {
    message.textContent = 'Digite um e-mail válido.';
    message.className = 'form-message error';
  } else {
    message.textContent = 'Inscrição realizada com sucesso!';
    message.className = 'form-message success';
    form.reset();
  }
});
