export abstract class Personagem {
  protected abstract emoji: string;

  constructor(
    protected nome:string,
    protected ataque:number,
    protected vida:number
    ) {}

    atacar(personagem : Personagem):void {
      this.bordao()
      personagem.perderVida(this.ataque);
    }

    perderVida(forcaAtaque:number):void {
      if(this.vida > 0) {
        console.log(`${this.nome} agora tem ${this.vida} de vida...`)
        this.vida -= forcaAtaque;
      } else {
        console.log(`${this.nome} Morreu`)
      }
    }

    abstract bordao():void
}

class Guerreira extends Personagem {
  protected emoji = '\u{1F9DD}'
  bordao(): void {
    console.log(`${this.nome} ${this.emoji} usou EXPLOSÃO DE LUZ!!!`)
  }
}
class Monstro extends Personagem {
  protected emoji = '\u{1F9DF}'
  bordao(): void {
    console.log(`${this.nome} ${this.emoji} usou ATAQUE MONSTROFÓBICO!!!`)
  }
}

const maria = new Guerreira('maria', 100, 1000)
const monstro = new Monstro('Monstro', 87, 1000)

maria.atacar(monstro);
maria.atacar(monstro);
monstro.atacar(maria);
monstro.atacar(maria);
monstro.atacar(maria);
monstro.atacar(maria);
monstro.atacar(maria);
monstro.atacar(maria);
monstro.atacar(maria);
monstro.atacar(maria);
monstro.atacar(maria);
monstro.atacar(maria);
monstro.atacar(maria);
monstro.atacar(maria);
monstro.atacar(maria);
monstro.atacar(maria);




