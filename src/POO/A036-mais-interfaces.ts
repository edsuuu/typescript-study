interface Pessoa {
  nome: string;
  //declaration merge
}
interface Pessoa {
  readonly sobrenome: string;
  readonly enderecos: readonly string[];
  idade?: number;
}

const pessoa11: Pessoa = {
  nome: 'eds',
  sobrenome: 'tes',
  enderecos: ['rua 1', 'rua 2'],
  idade: 20,
};

console.log(pessoa11);
