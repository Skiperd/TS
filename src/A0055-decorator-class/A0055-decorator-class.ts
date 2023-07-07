//DECORATOR SAO FUNÇÕES
type constructor = new (...args:any[]) => any;

function inverterNomeECor(param1: string, param2:string) {
  //CLOSURE
  return function (target: constructor){
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
        return valor.split('').reverse().join('')+ " " + param1 + " " + param2
      }
    };
  }
}

function outroDecorador(param:string) {
  return function (target: constructor) {
    console.log('Sou o Outro Decorador 2')
    return target
  }
}

@outroDecorador('Parametro do decorador')
@inverterNomeECor('valo1', 'Valor2')
export class Animal {
  constructor(public nome:string,public cor:string){
    console.log('SOU A CLASSE')
  }
}


const animal = new Animal('Ozorio','roxo')
console.log(animal)
