//Array<T> - T[]

function multiplicaArgs(...args: Array<number>){
  return args.reduce((acumulador, valor) => acumulador * valor,1)
}

function concatena(...args: Array<string>): string {
  return args.reduce((ac,text) => ac + text)
}

function caixaAlta(...args: Array<string>) {
  return args.map((valor) => valor.toUpperCase())
}

const resulCaixa = caixaAlta('o','z','o','r','i','o')
console.log(resulCaixa)

const resulttext = concatena('o','z','o','r','i','o')
console.log(resulttext)
const result = multiplicaArgs(1,2,3,4,5,6,7)
console.log(result)
