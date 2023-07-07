//DECORATOR SAO FUNÇÕES
function inverterNomeECor<T extends new (...args:any[]) => any>(target: T):T{
  console.log('SOU O DECORATOR E RECEBI', target)
  return class extends target {
    cor: string;
    nome:string;
    constructor(...args: any[]) {
      super(...args)
      this.cor = this.reverse(args[1])
      this.nome = this.reverse(args[0])
    }

    reverse(valor:string):string {
      return valor.split('').reverse().join('')
    }
  };
}
@inverterNomeECor
export class Animal {
  constructor(public nome:string,public cor:string){
    console.log('SOU A CLASSE')
  }
}


const animal = new Animal('Ozorio','roxo')
console.log(animal)
