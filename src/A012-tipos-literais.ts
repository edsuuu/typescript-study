// let x = 10; //eslint-disable-line
// x = 0b1010;

// const y = 10;

// let a: 100 = 100; //eslint-disable-line
// a = 120;

const person = {
  name: 'Luiz' as const,
  lastName: 'Miranda',
};

// declarar uma funcao, mas essa funcao so pode receber os valores q estao nas string

function escolhaOneCor(cor: 'Vermelho' | 'Amarelo' | 'Azul') {
  return cor;
}

console.log(escolhaOneCor('Vermelho'));


// export default 1;
