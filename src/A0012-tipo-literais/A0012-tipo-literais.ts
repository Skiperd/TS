//TIPOS LITERAIS
let d = 10;
d = 0b1010;

//TIPO LITERAL, O TIPO É CONSTANTE SO SERÁ 10;
//SUB TIPO DE NUMBER
const y = 10;

let a = 100 as const;

const person = {
  nome: 'Ozorio' as const,
  sobrenome: 'Travassos',
}

function escolhaCor(cor: 'Vermelho' | 'Amarelo' | 'Azul'): string {
  return cor
}
console.log(escolhaCor('Amarelo'));


export default 1;
