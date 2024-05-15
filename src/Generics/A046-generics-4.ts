type ObterChaveFn = <O, K extends keyof O>(object: O, chave: K) => O[K];

const obterChave: ObterChaveFn = (object, chave) => object[chave];

const animal = {
  cor: 'roxo',
  vacinas: ['Vacina 1', 'Vacina 2'],
  idade: 10
};

const vacinas = obterChave(animal, 'vacinas');
const cor = obterChave(animal, 'cor');
console.log(cor, vacinas, obterChave(animal, 'idade'));
