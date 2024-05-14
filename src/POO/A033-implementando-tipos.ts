type TipoPessoa = {
  nome: string;
  sobrenome: string;
  nomeCompleto(): string;
};

type TipoIdade = {
    idade: number;
}

export class Pessoa implements TipoPessoa, TipoIdade {
  constructor(
    public nome: string,
    public sobrenome: string,
    public idade: number,
  ) {}

  nomeCompleto(): string {
    return `${this.nome} ${this.sobrenome}`;
  }
}

const pessoa1 = new Pessoa('edsu', 'teste', 19);
console.log(pessoa1.nomeCompleto());
