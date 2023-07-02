export class CarrinhoDeCompras {
  private readonly produtos: Produto[] = [];

  inserirProduto(...produtos: Produto[]) {
    for (let produto of produtos) {
      this.produtos.push(produto)
    }
  }
  quantidade():number {
    return this.produtos.length;
  }

  valorTotal():number {
    return this.produtos.reduce((ac, valor) => ac + valor.preco , 0)
  }

}

export class Produto {
  constructor(public nome:string, public preco:number) {
  }
}

const produto1 = new Produto('Camiseta', 49.9);
const produto2 = new Produto('Calça', 149.9);
const produto3 = new Produto('Tênis', 249.9);
const produto4 = new Produto('Boné', 39.9);
const produto5 = new Produto('Sandália', 19.9);
const produto6 = new Produto('Cinto', 32.9);

const carrinho = new CarrinhoDeCompras();
carrinho.inserirProduto(produto1,produto2,produto3,produto4,produto5,produto6)
// console.log(carrinho)
console.log(carrinho.quantidade())
console.log(carrinho.valorTotal())
