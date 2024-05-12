export class Empresa {
  public readonly nome: string; // readonly nao pode ser alterado o valor
  private readonly colaboradores: Array<Colaborador> = []; // somente leitura
  protected readonly cnpj: string;

  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }

  public adicionaColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }

  public mostrarColaborador(): void {
    for (const colaborador of this.colaboradores) {
      console.log(colaborador);
    }
  }
}

export class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
  ) {}
}

const empresa1 = new Empresa('Udemy', '11.222.333/0001-22');
const colaborador1 = new Colaborador('Edson', 'Silva');
const colaborador2 = new Colaborador('Aluno', 'Oliveira');
const colaborador3 = new Colaborador('Computador', 'Kurt');

empresa1.adicionaColaborador(colaborador1);
empresa1.adicionaColaborador(colaborador2);
empresa1.adicionaColaborador(colaborador3);
empresa1.adicionaColaborador({
  nome: 'Novo',
  sobrenome: 'Colaborador',
});

console.log(empresa1);

empresa1.mostrarColaborador();
