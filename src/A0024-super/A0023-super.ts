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
  constructor(nome:string, sobrenome: string, idade:number, cpf:string, public sala:string){
    super(nome, sobrenome, idade,cpf)
    this.sala = sala;
  }

  getNomeCompleto(): string {
    console.log('FAZENDO ALGO ANTES')
    const result = super.getNomeCompleto()
    return result + " HEY";
  }
}

export class Cliente extends Pessoa {
  getNomeCompleto(): string {
    return `Isso vem do Cliente:${this.nome} ${this.sobrenome}`
  }
}

const aluno = new Aluno('Ozorio', 'Travassos', 26, '12155072406', '7B')
const pessoa = new Pessoa('Ozorio', 'Travassos', 26, '12155072406')
const cliente = new Cliente('Ozorio', 'Travassos', 26, '12155072406')
console.log(aluno)


