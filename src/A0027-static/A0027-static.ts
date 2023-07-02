export class Pessoa {
  static idadePadrao = 0;
  static cpfPadrao = '000-000-000-00'

  constructor(
    public nome:string,
    public sobrenome:string,
    public idade:number,
    public cpf:string) {}

    metodoNormal(): void {
      console.log(Pessoa.idadePadrao)
    }

    static criaPessoa(nome:string, sobrenome:string): Pessoa {
      return new Pessoa(nome,sobrenome, Pessoa.idadePadrao, Pessoa.cpfPadrao)
    }
}

const pessoa = new Pessoa('Ozorio', 'Travassos', 26, '121.550.724-06')
const pesso2 = Pessoa.criaPessoa('Maria', 'Miranda')
console.log(pesso2)
console.log(pesso2.metodoNormal())

