const form = document.getElementById('loginForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const passwordToggle = document.querySelector('.password-toggle');
const formMessage = document.getElementById('formMessage');

function showMessage(message, isSuccess = false) {
  formMessage.textContent = message;
  formMessage.classList.toggle('success', isSuccess);
}

function clearMessage() {
  formMessage.textContent = '';
  formMessage.classList.remove('success');
}

passwordToggle.addEventListener('click', () => {
  const isPassword = passwordInput.type === 'password';
  passwordInput.type = isPassword ? 'text' : 'password';
  passwordToggle.setAttribute('aria-label', isPassword ? 'Ocultar contraseña' : 'Mostrar contraseña');
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  clearMessage();

  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  if (!email || !password) {
    showMessage('Completa todos los campos para continuar.');
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    showMessage('Ingresa un correo electrónico válido.');
    emailInput.focus();
    return;
  }

  if (password.length < 6) {
    showMessage('La contraseña debe tener al menos 6 caracteres.');
    passwordInput.focus();
    return;
  }
setTimeout(() => {
    window.location.href = '../index.html';
  }, 800);
});
