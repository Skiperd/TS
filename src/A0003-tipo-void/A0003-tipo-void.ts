//FUNÇÃO OU METODO NÃO RETORNA NADA

function semRetorno(...args: string[]): void {
  console.log(args.join(" "))
}

const pessoa1 = {
  nome: 'ozorio',
  sobrenome: 'travassos',

  exibirNome(): void {
    console.log(`${this.nome} ${this.sobrenome}`)
  }
};

semRetorno('ozorio', 'omdaosm', 'sodaosdksaod', 'dsadsadas', 'dasokdasokdas')
pessoa1.exibirNome();
