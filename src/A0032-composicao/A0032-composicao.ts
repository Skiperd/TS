export class Carro {
  private readonly motor: Motor = new Motor();

  ligar():void {
    this.motor.ligar()
  }

  acelerar():void {
    this.motor.acelerar();
  }
  parar():void {
    this.motor.parar()
  }
  desligar():void {
    this.motor.desligar();
  }
}

export class Motor {
  ligar():void {
    console.log('Motor ligou')
  }

  acelerar():void {
    console.log('Motor está acelerando')
  }
  parar():void {
    console.log('Motor está parando')
  }
  desligar():void {
    console.log('Motor desligou')
  }
}

const carro = new Carro();
carro.acelerar()
