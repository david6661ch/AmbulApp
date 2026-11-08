const recoveryForm = document.getElementById('recoveryForm');
const documentType = document.getElementById('documentType');
const documentNumber = document.getElementById('documentNumber');
const emailInput = document.getElementById('email');
const formMessage = document.getElementById('formMessage');

function showMessage(message, isSuccess = false) {
  formMessage.textContent = message;
  formMessage.classList.toggle('success', isSuccess);
}

function clearMessage() {
  formMessage.textContent = '';
  formMessage.classList.remove('success');
}

recoveryForm.addEventListener('submit', (event) => {
  event.preventDefault();
  clearMessage();

  const type = documentType.value.trim();
  const docNumber = documentNumber.value.trim();
  const email = emailInput.value.trim();

  if (!type || !docNumber || !email) {
    showMessage('Completa todos los campos para continuar.');
    return;
  }

  if (docNumber.length < 5) {
    showMessage('Ingresa un número de documento válido.');
    documentNumber.focus();
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    showMessage('Ingresa un correo electrónico válido.');
    emailInput.focus();
    return;
  }

  showMessage('Se ha enviado un enlace de recuperación al correo registrado.', true);
  recoveryForm.reset();
});
