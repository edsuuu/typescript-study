export class Pessoa {
  private nome: string;
  private sobrenome: string;
  private idade: number;
  private _cpf: string;

  constructor(nome: string, sobrenome: string, idade: number, cpf: string) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
    this._cpf = cpf;
  }


  get cpf(): string {
    console.log('chamando o get cpf');
    return this._cpf.replace(/\D/g, ''); // retornar sem pontuação
  }

  set cpf(novoCpf: string) {
    console.log('chamando o set cpf');
    this._cpf = novoCpf;
  }
}

const pessoa = new Pessoa('Edson', 'Silva', 30, '11.222.333-44');

pessoa.cpf = '11.222.333-55';
console.log(pessoa.cpf);
