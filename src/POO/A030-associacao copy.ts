export class Escritor {
    //inversao de dependencia
  private _ferramenta: Ferramenta | null = null;

  constructor(private _nome: string) {}

  set ferramenta(ferramenta: Ferramenta | null) {
    this._ferramenta = ferramenta;
  }

  get ferramenta(): Ferramenta | null {
    return this._ferramenta;
  }

  get nome(): string {
    return this._nome;
  }

  escrever(): void {
    if (this._ferramenta === null) {
      console.log('Não posso escrever sem ferramenta');
      return;
    }
    this._ferramenta.escrever();
  }
}

export abstract class Ferramenta {
  constructor(private _nome: string) {}
  abstract escrever(): void;

  get nome() {
    return this._nome;
  }
}

export class Caneta extends Ferramenta {
  escrever(): void {
    console.log(` ${this.nome} está escrevendo...`);
  }
}
export class MaquinaEscrever extends Ferramenta {
  escrever(): void {
    console.log(`${this.nome} está escrevendo ...`);
  }
}

const escritor = new Escritor('edsu');
const caneta = new Caneta('Bic');
const maquinadeEscrever = new MaquinaEscrever('Maquina');

console.log(escritor);
console.log(caneta);
console.log(maquinadeEscrever);

escritor.ferramenta = caneta;
escritor.ferramenta = maquinadeEscrever;

escritor.escrever();
