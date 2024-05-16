/* eslint-disable @typescript-eslint/no-explicit-any */

function inverteNomeECor<T extends new (...args: any[]) => any>(target: T): T {
    console.log('sou o decorator ' + target);


    return class extends target {
      name: string;
      cor: string;

      constructor(...args: any[]) {
        super(...args);
        this.name = this.inverte(args[0]);
        this.cor = this.inverte(args[1]);
      }

      inverte(valor: string): string {
        return valor.split('').reverse().join('');
      }
    };
  }


@inverteNomeECor
export class Animal {
  constructor(public name: string, public cor: string) {
    console.log('sou a classe');

  }
}

const animal = new Animal('pateta', 'roxo');
console.log(animal);
