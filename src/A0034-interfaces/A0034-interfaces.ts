interface TipoNome {
  nome:string;
}

interface TipoSobrenome {
  sobrenome:string;
}

interface TipoNomeCompleto {
  nomeCompleto: () => string;
}

type TipoPessoa = TipoNome & TipoSobrenome & TipoNomeCompleto
interface TipoPessoa2 extends TipoNome, TipoSobrenome,TipoNomeCompleto {}


export class Pessoa implements TipoPessoa {
  constructor(public nome: string, public sobrenome:string, public idade:string) {
  }

  nomeCompleto(): string {
    return `${this.nome} ${this.sobrenome}`
  }
  retornaIdade():string {
    return `${this.idade} Anos`;
  }
}

const pessoa = new Pessoa('Ozorio', 'Travassos', '26')
console.log(pessoa.nomeCompleto(), pessoa.retornaIdade())
