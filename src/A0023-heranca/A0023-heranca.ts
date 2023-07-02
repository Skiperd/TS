export class Pessoa {
  constructor(
    public nome:string,
    public sobrenome:string,
    private idade:number,
    protected cpf:string) {
  }

  getIdade():number {
    return this.idade;
  }

  getCpf():string {
    return this.cpf
  }

  getNomeCompleto():string {
    return `${this.nome} ${this.sobrenome}`
  }
}

export class Aluno extends Pessoa {
  getNomeCompleto(): string {
    return `Isso vem do aluno:${this.nome} ${this.sobrenome}`
  }
}

export class Cliente extends Pessoa {
  getNomeCompleto(): string {
    return `Isso vem do Cliente:${this.nome} ${this.sobrenome}`
  }
}

const aluno = new Aluno('Ozorio', 'Travassos', 26, '12155072406')
const pessoa = new Pessoa('Ozorio', 'Travassos', 26, '12155072406')
const cliente = new Cliente('Ozorio', 'Travassos', 26, '12155072406')
console.log(aluno.getNomeCompleto())
// console.log(pessoa.getNomeCompleto())
console.log(cliente.getNomeCompleto())


