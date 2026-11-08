const form = document.getElementById('loginForm');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  if (!email || !password) {
    alert('Por favor completa todos los campos');
    return;
  }

  if (!email.includes('@')) {
    alert('Ingresa un correo válido');
    return;
  }

  alert('Login correcto');

  window.location.href = 'reseva.html';
  
});