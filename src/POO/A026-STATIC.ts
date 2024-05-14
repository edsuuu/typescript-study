export class Pessoa {
    static idadePadrao = 0;
    static cpfPadrao = '000.000.000-00';

  constructor(
    public nome: string,
    public sobrenome: string,
    public idade: number,
    public cpf: string,
  ) {}

  static criaPessoa(nome: string, sobrenome: string): Pessoa {
    return new Pessoa(nome, sobrenome, Pessoa.idadePadrao, Pessoa.cpfPadrao);
  }

  metodoNormal(): void {
    console.log(Pessoa.idadePadrao, Pessoa.cpfPadrao);
  }
}

const pessoa = new Pessoa('Edson', 'Silva', 30, '111.222.333-44');
pessoa.cpf = '222.333.444.55';
console.log(pessoa);

const pessoa2 = Pessoa.criaPessoa('Nome', 'pessoa');

console.log(pessoa2);
pessoa2.metodoNormal();
