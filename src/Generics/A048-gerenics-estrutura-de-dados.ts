export class Pessoa<T, U> {
  constructor(
    public nome: T,
    public idade: U,
  ) {}
}

//stack / pilha de livros

export class Stack<T> {
  private contador = 0;
  private elementos: { [k: number]: T } = {};

  push(elemento: T): void {
    this.elementos[this.contador] = elemento;
    this.contador++;
  }

  pop(): T | void {
    if (this.isEmpty()) return undefined;
    this.contador--;
    const elemento = this.elementos[this.contador];
    delete this.elementos[this.contador];
    return elemento;
  }

  isEmpty(): boolean {
    return this.contador === 0;
  }

  length(): number {
    return this.contador;
  }

  showStack(): void {
    for (const chave in this.elementos) {
      console.log(this.elementos[chave]);
    }
  }
}

const pilha = new Stack<number>();

pilha.push(1);
pilha.push(2);
pilha.push(3);
pilha.push(4);
pilha.showStack();

while (!pilha.isEmpty()) {
  console.log(pilha.pop());
}
