const form = document.getElementById('registerForm');
const steps = Array.from(document.querySelectorAll('.step'));
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');
const formMessage = document.getElementById('formMessage');
const acceptTerms = document.getElementById('acceptTerms');

let currentStep = 0;

function showMessage(message, isSuccess = false) {
  formMessage.textContent = message;
  formMessage.classList.toggle('success', isSuccess);
}

function clearMessage() {
  formMessage.textContent = '';
  formMessage.classList.remove('success');
}

function validateStep(stepIndex) {
  const step = steps[stepIndex];
  const inputs = step.querySelectorAll('input, select, textarea');

  for (const field of inputs) {
    if (field.required && !field.value.trim()) {
      field.focus();
      showMessage('Completa todos los campos antes de continuar.');
      return false;
    }
  }

  if (stepIndex === 0) {
    const email = document.getElementById('email');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value.trim())) {
      email.focus();
      showMessage('Ingresa un correo electrónico válido.');
      return false;
    }
  }

  if (stepIndex === 1) {
    const medicalInfo = document.getElementById('medicalInfo');
    if (medicalInfo.value.trim().length < 5) {
      medicalInfo.focus();
      showMessage('Describe la información médica relevante.');
      return false;
    }
  }

  return true;
}

function updateStepView() {
  steps.forEach((step, index) => {
    step.classList.toggle('active', index === currentStep);
  });

  prevBtn.classList.toggle('hidden', currentStep === 0);
  nextBtn.classList.toggle('hidden', currentStep === steps.length - 1);

  const submitButton = document.querySelector('.full-submit');
  submitButton.classList.toggle('hidden', currentStep !== steps.length - 1);
}

nextBtn.addEventListener('click', () => {
  clearMessage();

  if (!validateStep(currentStep)) {
    return;
  }

  if (currentStep < steps.length - 1) {
    currentStep += 1;
    updateStepView();
  }
});

prevBtn.addEventListener('click', () => {
  clearMessage();
  if (currentStep > 0) {
    currentStep -= 1;
    updateStepView();
  }
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  clearMessage();

  if (!acceptTerms.checked) {
    showMessage('Debes aceptar los términos y condiciones para continuar.');
    return;
  }

  if (!validateStep(0) || !validateStep(1)) {
    return;
  }

  showMessage('Registro enviado correctamente. Redirigiendo al inicio de sesión...', true);

  setTimeout(() => {
    window.location.href = 'login.html';
  }, 800);
});

updateStepView();
