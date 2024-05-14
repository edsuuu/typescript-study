export class Pessoa {
  public readonly nome: string;
  public readonly sobrenome: string;
  private readonly idade: number;
  protected readonly cpf: string;

  //atributes
  constructor(nome: string, sobrenome: string, idade: number, cpf: string) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
    this.cpf = cpf;
  }

  getNomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }

  getIdade(): number {
    return this.idade;
  }

  getCpf(): string {
    return this.cpf;
  }
}

export class Aluno extends Pessoa {
  constructor(
    nome: string,
    sobrenome: string,
    idade: number,
    cpf: string,
    public sala: string,
  ) {
      super();
  }

  getNomeCompleto(): string {
    console.log('fazendo algo antes');
    //super
    // return super.getNomeCompleto();
    const result = super.getNomeCompleto();
    return result + ' - Aluno';
  }
}

export class Cliente extends Pessoa {
  getNomeCompleto(): string {
    return `Cliente: ${this.nome} ${this.sobrenome}`;
  }
}

const pessoa = new Pessoa('Edson', 'Silva', 30, '11.222.333-44');
const aluno = new Aluno('Edson', 'Silva', 30, '11.222.333-44');
const cliente = new Cliente('Edson', 'Silva', 30, '11.222.333-44');

console.log(pessoa.getNomeCompleto());
console.log(aluno.getNomeCompleto());
console.log(cliente.getNomeCompleto());
