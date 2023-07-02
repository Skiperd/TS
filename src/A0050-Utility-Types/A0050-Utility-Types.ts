//TIPO RECORD
export const obj1: Record<string,string | number> = {
  nome: 'Ozorio',
  sobrenome: 'Travassos',
  idade: 26,
}

type PessoaProtocol = {
  nome?: string;
  sobrenome?: string;
  idade?: number;
}
//TIPO REQUIRED -- TUDO QUE É OPCIONAL VIRA OBRIGATORIO
type PessoaRequired = Required<PessoaProtocol>;
//TIPO PARTIAL -- TUDO VIRA OPCIONAL
type PessoaPartial = Partial<PessoaRequired>;
//TIPO READ-ONLY --
type PessoaReadOnly = Readonly<PessoaRequired>
//PICK
type PessoaPick = Pick<PessoaRequired, 'nome' | 'sobrenome'>;


export const obj2: PessoaPartial = {
  nome: 'Ozorio',
  sobrenome: 'Travassos',
  idade: 26,
}

console.log(obj2)

//Extract e Exclude

type ABC = 'A' | 'B' | 'C';
type CDE = 'C' | 'D' | 'E';
//EXCLUIR OS TIPOS QUE ESTÃO REPETIDOS
type TipoExclude = Exclude<ABC, CDE>;
//ELE PEGAR TODOS OS TIPOS QUE SÃO COMUM AOS DOIS, VALORES QUE TEM NOS NOIS ABC,CDE
type TipoExtract = Extract<ABC,CDE>


//
type AccountMongo = {
  _id: string;
  nome: string;
  idade: number;
}

type AccountApi = Pick<AccountMongo, Exclude<keyof AccountMongo, '_id'>> & {id: string}

const accountMongo: AccountMongo  = {
  _id: 'saduhausihdasudhduhasidas',
  nome: 'Ozorio',
  idade: 23
}

function mapAccount(accountMongo: AccountMongo): AccountApi {
  const {_id,...acountData} = accountMongo;
  return {...acountData, id: _id}
}

const Accountapi = mapAccount(accountMongo);
console.log(Accountapi)
