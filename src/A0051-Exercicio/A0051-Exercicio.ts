type VotationOptions = {
  NumerosVotos: number;
  frase: string;
}

export class Votacao{
  private _votationOptions: VotationOptions[] = [];
  constructor(public detalhes:string) {}

  addVotacao(votacao: VotationOptions):void {
    this._votationOptions.push(votacao);
  }

  votar(indexVotacao:number):void {
    if(!this._votationOptions[indexVotacao]) return;
    this._votationOptions[indexVotacao].NumerosVotos += 1;
  }

  get VotationOptions(): VotationOptions[] {
    return this._votationOptions;
  }
}

class VotacaoApp {
  private votacoes: Votacao[] = [];

  addVotacao(votacao: Votacao):void {
    this.votacoes.push(votacao);
  }

  mostrarVotacoes():void {
    for(let votos of this.votacoes) {
      console.log(votos.detalhes)
      for(let votosOptions of votos.VotationOptions){
        console.log(votosOptions.frase, votosOptions.NumerosVotos)
      }
      console.log('###')
    }
  }
}

const votacao1 = new Votacao('Qual sua linguagem favorita')
votacao1.addVotacao({frase: 'Python', NumerosVotos: 0})
votacao1.addVotacao({frase: 'JavaScript', NumerosVotos: 0})
votacao1.addVotacao({frase: 'TypeScript', NumerosVotos: 0})
const votacaoApp = new VotacaoApp();
votacaoApp.addVotacao(votacao1)
votacao1.votar(1)
votacao1.votar(1)
votacao1.votar(1)


votacaoApp.mostrarVotacoes();
