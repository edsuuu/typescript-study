//  recomendado a fazer


// se nao sei se tem na tela
const body1 = document.querySelector('body');
if (body1) body1.style.backgroundColor = 'red';

// confirmando q tem o elemento na tela
const body3 = document.querySelector('body') as HTMLBodyElement;
body3.style.backgroundColor = 'red';

// HTML ELEMENT

const input = document.querySelector('.input') as HTMLInputElement;
input.value = 'Qualquer coisa';
input.focus();

// nao é recomendado fazer


// Type Assertion

const body4 = (document.querySelector('body') as unknown) as number;
body4.toFixed();

const body2 = document.querySelector('body')!; // ! no final obj nao pode ser nulo
body2.style.backgroundColor = 'red';
