//DECLARATION MERGING
interface Pessoa {
  nome: string;
}

interface Pessoa {
  readonly sobrenome: string;
}

interface Pessoa {
  readonly endereco: readonly string[];
}

interface Pessoa {
  idade?: number;
}

const novapessoa : Pessoa = {
  nome: 'Luiiz',
  sobrenome: 'Miranda',
  endereco: ['Avenida Brasil'],
  idade: 26
}

console.log(novapessoa)

export default Pessoa;
