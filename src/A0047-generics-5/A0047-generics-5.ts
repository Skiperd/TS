export class Pessoa<T, U> {
  constructor(public nome: T, public idade: U) {}
}

export class Pilha<T> {
  private contador = 0;
  private elementos: { [key:number]:T } = {};

  push(elemento: T):void {
    this.elementos[this.contador] = elemento;
    this.contador++;
  }
  //RETORNA O ELEMENTO QUE ELE TIROU
  pop(): T | string {
    if(this.estaVazia()) return 'A Pilha está vazia';
    this.contador--;
    const removido = this.elementos[this.contador];
    delete this.elementos[this.contador]
    return removido;
  }

  estaVazia(): boolean {
    return this.contador === 0;
  }

  tamanho():number {
    return this.contador;
  }
  //MOSTRA OS ELEMENTOS DA PILHA
  mostrarPilha():void {
    for(const chave in this.elementos) {
      console.log(this.elementos[chave])
    }
  }
}

const pilha = new Pilha<number>();
pilha.push(1)
pilha.push(2)
pilha.push(3)
pilha.push(4)
pilha.push(5)
pilha.mostrarPilha()

while(!pilha.estaVazia()) {
  console.log("Elemento removido:", pilha.pop())
}
