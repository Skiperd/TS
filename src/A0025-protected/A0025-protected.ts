export class Empresa {
  public readonly nome: string;
  protected readonly colaboradores: Colaborador[] = [];
  private readonly cnpj: string;

  constructor(nome:string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }
  adicionarColaborador(colaborador: Colaborador):void {
    this.colaboradores.push(colaborador)
  }
  mostrarColaboradores():void {
    for(let i of this.colaboradores) {
      console.log(i)
    }
  }
}
export class Colaborador {
  constructor(public readonly nome:string, public readonly sobrenome:string) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }
}
export class Udemy extends Empresa {
  constructor() {
    super('Udemy', '11.111.111/0001-11')
  }
  pop(): Colaborador | null {
    const colaborador = this.colaboradores.pop();
    if(colaborador) return colaborador;
    return null;
  }

}

const empresa1 = new Udemy ()
const collab1 = new Colaborador('Ozorio', 'Travassos')
const collab2 = new Colaborador('Maria', 'Travassos')
const collab3 = new Colaborador('Joao', 'Travassos')
empresa1.adicionarColaborador(collab1)
empresa1.adicionarColaborador(collab2)
empresa1.adicionarColaborador(collab3)
console.log(empresa1.pop())
console.log(empresa1.pop())
console.log(empresa1.pop())
console.log(empresa1)


