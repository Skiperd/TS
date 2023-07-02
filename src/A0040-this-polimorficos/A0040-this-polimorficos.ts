export class Calculadora {
  constructor(public numero:number) {}

  add(n:number): this {
    this.numero += n;
    return this;
  }

  sub(n:number): this {
    this.numero -= n;
    return this;
  }

  div(n:number): this {
    this.numero /= n;
    return this;
  }

  mult(n:number): this {
    this.numero *= n;
    return this;
  }
}

export class SubCalculadora extends Calculadora {
  power(n:number):this {
    this.numero **=n;
    return this;
  }
}

const calc = new SubCalculadora(10)
console.log(calc.add(5).mult(2).div(2).sub(5).power(2))

//BUILDER - GOF
export class RequestBuilder {
  private method: 'get' | 'post' | null = null;
  private url: string | null = null;

  setMethod(method: 'get' | 'post'):this {
    this.method = method;
    return this;
  }

  setUrl(url: string):this {
    this.url = url;
    return this;
  }

  send():void {
    console.log(`Enviando dados via ${this.method} para ${this.url}`)
  }
}

const request = new RequestBuilder();
request.setUrl('https://www.google.com').setMethod('post').send();
