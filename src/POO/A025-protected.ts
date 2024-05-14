export class Empresa {

  public readonly nome: string; // readonly nao pode ser alterado o valor
  protected readonly colaboradores: Array<Colaborador> = []; // somente leitura
  //private para dados sensiveis
  private readonly cnpj: string;

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

  public getNome(): string {
    return this.nome;
  }
}

export class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
  ) {}
}

// protected pode ser acesso pela sub class e os metodos de outra classe
export class Udemy extends Empresa {
  constructor() {
    super('Udemy', '11.222.333/0001-22');
  }

  popColaborador(): Colaborador | null {
    const colaborador = this.colaboradores.pop();
    if (colaborador) return colaborador;
    return null;
  }
}

const empresa1 = new Udemy();
const colaborador1 = new Colaborador('Edson', 'Silva');
const colaborador2 = new Colaborador('Aluno', 'Oliveira');
const colaborador3 = new Colaborador('Computador', 'Kurt');

empresa1.adicionaColaborador(colaborador1);
empresa1.adicionaColaborador(colaborador2);
empresa1.adicionaColaborador(colaborador3);
// empresa1.adicionaColaborador({
//   nome: 'Novo',
//   sobrenome: 'Colaborador',
// });

// empresa1.mostrarColaborador();

const colaboradorRemovido = empresa1.popColaborador();
const colaboradorRemovido1 = empresa1.popColaborador();
const colaboradorRemovido3 = empresa1.popColaborador();
const colaboradorRemovido4 = empresa1.popColaborador();

console.log(colaboradorRemovido, colaboradorRemovido1, colaboradorRemovido3, colaboradorRemovido4);
