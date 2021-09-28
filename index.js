const button = document.querySelector('#button'),
  form = document.querySelector('#form'),
  togglePassword = document.querySelector('#togglePassword'),
  toggleRepeatPassword = document.querySelector('#toggleRepeatPassword'),
  password = document.querySelector('#password'),
  repeatPassword = document.querySelector('#repeatPassword'),
  email = document.querySelector('#email'),
  mainContent = document.querySelector('#mainContent'),
  passwordMismatch = document.querySelector('#passwordMismatch'),
  emailMismatch = document.querySelector('#emailMismatch'),
  login = document.querySelector('#login'),
  helloUser = document.querySelector('#helloUser'),
  signOut = document.querySelector('#signOut');

function validateEmail(word) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(word).toLowerCase());
}

togglePassword.addEventListener('click', () => {
  if (password.type === 'password') {
    password.type = 'text';
    togglePassword.classList.add('hidden');
  } else {
    password.type = 'password';
    togglePassword.classList.remove('hidden');
  }
});

toggleRepeatPassword.addEventListener('click', () => {
  if (repeatPassword.type === 'password') {
    repeatPassword.type = 'text';
    toggleRepeatPassword.classList.add('hidden');
  } else {
    repeatPassword.type = 'password';
    toggleRepeatPassword.classList.remove('hidden');
  }
});

form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (password.value === repeatPassword.value && validateEmail(email.value)) {
    form.style.display = 'none';
    mainContent.style.display = 'flex';
    localStorage.setItem('Login', login.value);
    helloUser.innerHTML = `Здравствуйте, ${login.value}`;
  } else if (password.value !== repeatPassword.value) {
    passwordMismatch.style.display = 'flex';
  } else if (validateEmail(email.value) === false) {
    emailMismatch.style.display = 'flex';
  }
});

signOut.addEventListener('click', () => {
  localStorage.removeItem('Login');
  form.style.display = 'flex';
  mainContent.style.display = 'none';
});

document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('Login')) {
    form.style.display = 'none';
    mainContent.style.display = 'flex';
    helloUser.innerHTML = `Здравствуйте, ${localStorage.getItem('Login')}`;
  }
});
