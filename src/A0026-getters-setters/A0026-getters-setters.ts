export class Pessoa {
  constructor(
    private nome:string,
    private sobrenome:string,
    private idade:number,
    private cpf:string) {
  }

  set Cpf(novocpf:string){
    this.cpf = novocpf;
  }

  get mostrarCpf(): string {
    return this.cpf.replace(/\D/g, "");
  }
}

const pessoa = new Pessoa('Ozorio', 'Travassos', 26, '121.550.724-06')
console.log(pessoa)
pessoa.Cpf = '121.222.333-55'
console.log(pessoa.mostrarCpf)
