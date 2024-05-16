interface PessoaProtoco<T = string, U = number> {
  nome: T;
  sobrenome: T;
  idade: U;
}

type PessoaProtoco2<T = string, U = number> = {
  nome: T;
  sobrenome: T;
  idade: U;
}

const aluno1: PessoaProtoco<string, number> = {
  nome: 'Luiz',
  sobrenome: 'Miranda',
  idade: 30,
};

const aluno2: PessoaProtoco2<string, number> = {
  nome: 'Luiz',
  sobrenome: 'Miranda',
  idade: 30,
};

console.log(aluno1, aluno2);
