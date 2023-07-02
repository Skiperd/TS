
//QUANDO O RETORNO FOR TRUE O VALOR SERA DO TIPO NUMBER
export function isNumber(value: unknown): value is number {
  return typeof value === 'number';
}

export function soma<T>(...args: T[]): number {
  const retorno = args.reduce((ac,valor) => {
    if(isNumber(valor) && isNumber(valor)) {
      return ac + valor
    }
    return valor
  },0)
  return retorno
}

console.log(soma(1,2,3))
