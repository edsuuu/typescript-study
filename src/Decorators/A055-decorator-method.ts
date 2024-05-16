/* eslint-disable @typescript-eslint/no-explicit-any */

function decorador(
    classPrototype: any,
    nomeMetodo: string,
    descriptor: PropertyDescriptor,
  ): PropertyDescriptor | void {
    console.log(classPrototype);
    console.log(nomeMetodo);
    console.log(descriptor);
  }

  export class UmaPessoa {
    nome: string;
    sobrenome: string;
    idade: number;

    constructor(nome: string, sobrenome: string, idade: number) {
      this.nome = nome;
      this.sobrenome = sobrenome;
      this.idade = idade;
    }

    @decorador
    metodo(msg: string): string {
      return `${this.nome} ${this.sobrenome}: ${msg}`;
    }

    get nomeCompleto(): string {
      return this.nome + ' ' + this.sobrenome;
    }

    set nomeCompleto(valor: string) {
      const palavras = valor.split(/\s+/g);
      const primeiroNome = palavras.shift();
      if (!primeiroNome) return;
      this.nome = primeiroNome;
      this.sobrenome = palavras.join(' ');
    }
  }

  const pessoa = new UmaPessoa('acabando', 'teste', 30);
  const metodo = pessoa.metodo('world');
  console.log(metodo);
