export class Escritor {
  private _ferramenta: Ferramenta | null = null;

  constructor(private _nome:string){}

  get nome():string {
    return this._nome;
  }

  set ferramenta(ferramenta: Ferramenta | null) {
    this._ferramenta = ferramenta;
  }
  get ferramenta():Ferramenta | null {
    return this._ferramenta;
  }

  escrever():void {
    if(this._ferramenta === null) {
      console.log('Não posso escrever sem ferramenta...')
      return;
    }
    this._ferramenta.escrever();
  }
}

export abstract class Ferramenta {
  constructor(protected _nome:string) {
  }
  abstract escrever():void

  getNome():string {
    return `${this._nome}`
  }
}

export class Caneta extends Ferramenta {
  get nome():string {
    return `${this._nome}`
  }

  escrever():void {
    console.log(`${this._nome} está escrevendo`)
  }
}

export class MaquinaEscrever extends Ferramenta {
  get nome():string {
    return `${this._nome}`
  }

  escrever():void {
    console.log(`${this._nome} está digitando...`)
  }
}

const escritor = new Escritor('Luiz');
const caneta = new Caneta('Bic');
const maquina = new MaquinaEscrever('Hoskm')

escritor.ferramenta = caneta;
escritor.escrever()
