//TYPE ALIAS
type Idade = number;
type Pessoa = {
  nome: string,
  idade : Idade,
  salario: number,
  corPreferida?: string,
}
//TYPE ALIAS
type CorRGB = 'Vermelho' | 'Verde' | 'Azul';
type CorCMYK = 'Ciano' | 'Margenta' | 'Amarelo' | 'Preto';
type CorPreferida = CorRGB | CorCMYK

const pessoa: Pessoa = {
  nome: 'ozorio',
  idade: 26,
  salario: 1200,
}

export function setCorPreferida(pessoa: Pessoa, cor: CorPreferida): Pessoa {
  return {...pessoa, corPreferida: cor};
}
console.log(pessoa)
console.log(setCorPreferida(pessoa, "Preto"))


export default 2;
