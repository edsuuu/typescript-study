// Agregação de objetos, relações entre produtos

export class CarrinhoDeCompras {
    //atributes
    private readonly produtos: Produto[] = [];

    inserirProdutos(...produtos: Produto[]): void {
        for (const produto of produtos) {
            this.produtos.push(produto);
        }
    }

    quantidadeProdutos(): number {
        return this.produtos.length;
    }

    valorTotal(): number {
        return this.produtos.reduce((soma, produto) => soma + produto.preco, 0);
    }
}

export class Produto {
    constructor(public nome: string, public preco: number) {}
}

const produto1 = new Produto('Camiseta', 49.90);
const produto2 = new Produto('Celular', 149.90);
const produto3 = new Produto('Caneca', 5.55);

const carrinhodeCompras = new CarrinhoDeCompras();
carrinhodeCompras.inserirProdutos(produto1, produto2, produto3);

console.log(carrinhodeCompras, 'valor total R$', carrinhodeCompras.valorTotal());

