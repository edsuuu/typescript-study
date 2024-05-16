interface TipoNome {
  nome: string;
}
interface Sobrenome {
  sobrenome: string;
}

interface TipoNomeCompleto {
  nomeCompleto(): string;
}

// type TipoPessoa = TipoNome & Sobrenome & TipoNomeCompleto;

interface TipoPessoa2 extends TipoNome, Sobrenome, TipoNomeCompleto {}

export class Pessoa implements TipoPessoa2 {
  constructor(
    public nome: string,
    public sobrenome: string,
    public idade: number,
  ) {}

  nomeCompleto(): string {
    return `${this.nome} ${this.sobrenome}`;
  }
}

const pessoaOjb: TipoPessoa2 = {
  nomeCompleto() {
    return `${this.nome} ${this.sobrenome}`;
  },
  nome: 'edsu',
  sobrenome: 'teste',
};

console.log(pessoaOjb.nomeCompleto());


const pessoa1 = new Pessoa('edsu', 'teste', 19);
console.log(pessoa1.nomeCompleto());
