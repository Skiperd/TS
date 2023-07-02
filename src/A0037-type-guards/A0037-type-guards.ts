//TYPE GUARD, QUANDO FOREM NUMBER SERA FEITA UMA SOMA
// QUALQUER COISA QUE NAO FOR NUMBER, SERA RETORNADO UMA STRING
function add (a:unknown, b: unknown) {
  if(typeof a === 'number' && typeof b === 'number') return a + b;
  return `${a} ${b}`
}
//TYPE GUARD
console.log(add(4,2));
console.log(add('o','z'))


type Pessoa = {
  tipo: 'Pessoa';
  nome: string;
}
type Animal = {
  tipo: 'Animal';
  cor: string;
}

type PessoaOuAnimal = Pessoa | Animal;

export class Aluno implements Pessoa {
  tipo: 'Pessoa' = 'Pessoa'
  constructor(public nome:string) {

  }
}

function mostrarNome(obj: PessoaOuAnimal):void {
  // if('nome' in obj) console.log(obj.nome)
  // if(obj instanceof Aluno) console.log(obj.nome)
  switch(obj.tipo) {
    case 'Pessoa':
      console.log(obj.nome)
      break;
    case 'Animal':
      console.log('Isso é um animal', obj.cor)
  }
}

mostrarNome(new Aluno('joao'))
mostrarNome({tipo: 'Animal', cor: 'Rosa'})
