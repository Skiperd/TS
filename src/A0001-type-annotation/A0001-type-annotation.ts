//TIPOS BÁSICOS
let nome: string = 'ozorio'; //
let idade: number = 30; //
let adulto: boolean = true; //
let simbolo: symbol = Symbol('qualquer-symbol'); // symbol
// let big: bigint = 10n; // bigint


//Tipos passados por referência
//Arrays

let arrayDeNumeros: Array<number> = [1,2,3];
let arrayDeString: Array<string> = ['Ozorio', 'Travassos'];
let arrayDeNumeros1: number[] = [1,2,3];

//OBJETOS

let pessoa: {nome: string, idade: number, sobrenome:string, adulto?: boolean} = {
  nome: 'Ozorio',
  idade: 26,
  sobrenome: 'Travassos'
}

console.log(`${pessoa.nome} ${pessoa.sobrenome} tem ${pessoa.idade} anos`)

//Funções

function soma(x:number,y:number) {
  return x + y;
}

const soma2: (x:number, y:number) => number = (x,y) => x + y;


