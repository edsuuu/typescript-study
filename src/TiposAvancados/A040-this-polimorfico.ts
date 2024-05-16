export class Calculadora {
  constructor(public numero: number) {}
  adic(n: number): this {
    this.numero += n;
    return this;
  }
  subi(n: number): this {
    this.numero -= n;
    return this;
  }
  mult(n: number): this {
    this.numero *= n;
    return this;
  }
  divi(n: number): this {
    this.numero /= n;
    return this;
  }
}

export class SubCalculadora extends Calculadora {
  potencia(n: number): this {
    this.numero **= n;
    return this;
  }
}

const calcular = new SubCalculadora(10);
calcular.adic(5).mult(2).divi(2).subi(5).potencia(2);
console.log(calcular);

//Builder - GoF

export class RequestBuilder {
    private method: 'get' | 'post' | null = null;
    private url: string | null = null;

    setMethod(method: 'get' | 'post'): this {
        this.method = method;
        return this;
    }

    setUrl(url: string): this {
        this.url = url;
        return this;
    }

    send(): void {
        console.log(`Enviando dados via ${this.method} para ${this.url}`);
    }
}

const request = new RequestBuilder(); //Builder 
request.setUrl('https://www.google.com').setMethod('post').send();
