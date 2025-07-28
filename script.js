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

// 🕒 Apaga a mensagem após 3 segundos
setTimeout(() => {
  message.textContent = '';
  message.className = 'form-message';
}, 3000);

// script.js

const backToTopButton = document.getElementById('back-to-top');

// Mostrar o botão quando o usuário rolar a página
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopButton.style.display = 'block';
  } else {
    backToTopButton.style.display = 'none';
  }
});

// Rolar suavemente para o topo ao clicar no botão
backToTopButton.addEventListener('click', () => {
  setTimeout(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, 100); // pequeno delay com setTimeout()
});




});
