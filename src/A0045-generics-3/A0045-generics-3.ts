interface Pessoa<T, U> {
  nome: T;
  sobrenome: T;
  idade: U;
}

const aluno1:Pessoa<string,number> = {
  nome: 'Ozorio',
  sobrenome: 'Travassos',
  idade: 26
}
const aluno2:Pessoa<number,number> = {
  nome: 1,
  sobrenome: 345,
  idade: 26
}
console.log(aluno1)
console.log(aluno2)

