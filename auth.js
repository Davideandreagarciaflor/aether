// Toggle login/register form
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const showRegister = document.getElementById('showRegister');
const showLogin = document.getElementById('showLogin');
const formTitle = document.getElementById('formTitle');

showRegister.addEventListener('click', (e) => {
  e.preventDefault();
  loginForm.classList.remove('active');
  registerForm.classList.add('active');
  formTitle.textContent = "Registrati";
});

showLogin.addEventListener('click', (e) => {
  e.preventDefault();
  registerForm.classList.remove('active');
  loginForm.classList.add('active');
  formTitle.textContent = "Accedi";
});

// Login validation
const loginMessage = document.getElementById('loginMessage');
loginForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const email = document.getElementById('loginEmail').value.trim();
  const password = document.getElementById('loginPassword').value.trim();

  if (!email || !password) {
    loginMessage.textContent = "Inserisci email e password.";
    loginMessage.style.color = "red";
    return;
  }

  loginMessage.textContent = "Accesso effettuato con successo!";
  loginMessage.style.color = "#4e54c8";
  loginForm.reset();
});

// Register validation
const registerMessage = document.getElementById('registerMessage');
registerForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const email = document.getElementById('registerEmail').value.trim();
  const password = document.getElementById('registerPassword').value.trim();
  const password2 = document.getElementById('registerPassword2').value.trim();

  if (!email || !password || !password2) {
    registerMessage.textContent = "Compila tutti i campi.";
    registerMessage.style.color = "red";
    return;
  }

  if (password !== password2) {
    registerMessage.textContent = "Le password non coincidono.";
    registerMessage.style.color = "red";
    return;
  }

  registerMessage.textContent = "Registrazione completata!";
  registerMessage.style.color = "#4e54c8";
  registerForm.reset();
});
