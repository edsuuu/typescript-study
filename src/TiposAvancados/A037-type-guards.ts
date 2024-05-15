export function add(a: unknown, b: unknown) {
  return typeof a === 'number' && typeof b === 'number' ? a + b : `${a}${b}`;
}

console.log(add(1, 5));
console.log(add('a', 'b'));

type Pessoa = { tipo: 'pessoa'; nome: string };
type Animal = { tipo: 'animal'; cor: string };

type PessoaOuAnimal = Pessoa | Animal;

export class Aluno implements Pessoa {
  tipo = 'pessoa' as const;
  constructor(public nome: string) {}
}

export function mostrarNome(obj: PessoaOuAnimal) {
  //   if ('nome' in obj) console.log(obj.nome);
  //   if (obj instanceof Aluno) console.log(obj.nome);

  switch (obj.tipo) {
    case 'pessoa':
      console.log(obj.nome);
      return;
    case 'animal':
      console.log('Isso é um animal', obj.cor);
      return;
  }
}

mostrarNome(new Aluno('Luiz'));
mostrarNome({tipo: 'animal', cor: 'rosa'});
