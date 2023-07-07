//NAMESPACE
namespace MeuNamespace {
  export const nome = 'Ozorio'
  export class PessoaDoNamespace {
    constructor(public nome:string){}
  }
  const pessoaDoNamespace = new PessoaDoNamespace('Ozorio')
  console.log(pessoaDoNamespace)

  export namespace OutroNameSpace {
    export const nome = 'Sushi'
  }
}
const pessoaDoNamespace = new MeuNamespace.PessoaDoNamespace('Giulliana')
  console.log(pessoaDoNamespace)
  console.log(MeuNamespace.nome)
  console.log(MeuNamespace.OutroNameSpace.nome)
