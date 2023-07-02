type Adder = {
  (x: number):number,
  (x: number, y: number):number;
  (...args: number[]): number;
}

const adder: Adder = (x:number,y?:number,...args:number[]) => {
  if(args.length > 0) return args.reduce((ac,valor) => ac + valor,0) + x + (y || 0);
  return x + (y || 0);
}
//UMA FUNÇÃO SE COMPORTA DE MANEIRAS DIFERENTES DE ACORDO
//COM OS TIPOS DE PARAMETROS QUE ELA RECEBE

console.log(adder(1,2))
