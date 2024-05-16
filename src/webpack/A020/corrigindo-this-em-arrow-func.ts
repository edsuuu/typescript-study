import isEmail from 'validator/lib/isEmail';

const SHOW_ERRORS_MESSAGES = 'show-error-message';
const form = document.querySelector('.form') as HTMLFormElement;
const username = document.querySelector('.username') as HTMLInputElement;
const email = document.querySelector('.email') as HTMLInputElement;
const password = document.querySelector('.password') as HTMLInputElement;
const password2 = document.querySelector('.password2') as HTMLInputElement;

const submitEventFn = (event: Event) => {
  event.preventDefault();// trocar o this por event.target

  const target = event.target as HTMLFormElement;

  hideErrorMessages(target);
  checkForEmptyFields(username, email, password, password2);
  checkNameLength(username);
  checkEmail(email);
  checkIgualPassword(password, password2);

  if (showSuccessMessage(target)) alert('Formulário enviado');
};

form.addEventListener('submit', submitEventFn);

function checkForEmptyFields(...inputs: HTMLInputElement[]): void {
  inputs.forEach((input) => {
    if (!input.value) showErrorMessage(input, 'Este campo é não pode ficar vazio');
  });
}

function checkNameLength(input: HTMLInputElement): void {
  if (input.value.length < 3) showErrorMessage(input, 'Nome deve ter 3 ou mais caracteres');
}

function checkEmail(input: HTMLInputElement): void {
  if (!isEmail(input.value)) showErrorMessage(input, 'Email inválido');
}

function checkIgualPassword(password: HTMLInputElement, password2: HTMLInputElement) {
  if (password.value !== password2.value) {
    showErrorMessage(password, 'Senhas não conferem');
    showErrorMessage(password2, 'Senhas não conferem');
  }
}

function hideErrorMessages(form: HTMLFormElement): void {
  form.querySelectorAll(`.${SHOW_ERRORS_MESSAGES}`).forEach((item) => item.classList.remove(SHOW_ERRORS_MESSAGES));
}

function showErrorMessage(input: HTMLInputElement, msg: string): void {
  const formField = input.parentElement as HTMLDivElement;
  const errorMessage = formField.querySelector('.error-message') as HTMLSpanElement;

  errorMessage.innerHTML = msg;
  formField.classList.add(SHOW_ERRORS_MESSAGES);
}

function showSuccessMessage(form: HTMLFormElement): boolean {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let send: boolean = true;
  form.querySelectorAll(`.${SHOW_ERRORS_MESSAGES}`).forEach((item) => {
    send = false;
    item.classList.add(SHOW_ERRORS_MESSAGES);
  });
  return send;
}
