function decorator(classPrototype: any, nomeMetodo: string, descriptor: PropertyDescriptor):any{
  console.log(classPrototype,nomeMetodo,descriptor)
  return {
    value: function(...args:any) {
      return args[0].toUpperCase();
    }
  };
}

export class UmaPessoa {
  nome: string;
  sobrenome: string;
  idade: number;
  constructor( nome:string, sobrenome:string,idade:number){
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
  }
  @decorator
  metodo(msg:string):string {
    return `${this.nome} ${this.sobrenome}: ${msg}`
  }
  get nomeCompleto():string {
    return `${this.nome} ${this.sobrenome}`
  }
  set nomeCompleto(valor:string) {
    const palavras = valor.split(/\s+/g);
    const primeiroNome = palavras.shift()
    if(!primeiroNome) return;
    this.nome = primeiroNome;
    this.sobrenome = palavras.join(" ")
  }
}

const pessoa = new UmaPessoa('Ozorio','Travassos',26)
const metodo = pessoa.metodo('hello world');
console.log(metodo)
