const form = document.getElementById('registerForm');
const formMessage = document.getElementById('formMessage');
const acceptTerms = document.getElementById('acceptTerms');

function showMessage(message, isSuccess = false) {
  formMessage.textContent = message;
  formMessage.classList.toggle('success', isSuccess);
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  formMessage.textContent = '';
  formMessage.classList.remove('success');

  const requiredFields = form.querySelectorAll(
    '.step input[required], .step select[required], .step textarea[required]'
  );

  for (const field of requiredFields) {
    if (!field.value.trim()) {
      showMessage('Completa todos los campos obligatorios.');
      field.focus();
      return;
    }
  }

  const email = document.getElementById('email');
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email.value.trim())) {
    showMessage('Ingresa un correo electrónico válido.');
    email.focus();
    return;
  }

  const documentNumber = document.getElementById('documentNumber');
  if (documentNumber.value.trim().length < 5) {
    showMessage('Ingresa un número de documento válido.');
    documentNumber.focus();
    return;
  }

  if (!acceptTerms.checked) {
    showMessage('Debes aceptar los términos y condiciones para continuar.');
    acceptTerms.focus();
    return;
  }

  showMessage('Formulario validado. Redirigiendo al inicio de sesión...', true);

  window.setTimeout(() => {
    window.location.href = 'login.html';
  }, 1000);
});
