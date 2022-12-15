class Car {
  brand: string;
  color: string;
  doors: number;

  constructor(brand: string, color: string, doors: number) {
    this.brand = brand;
    this.color = color;
    this.doors = doors;
  }

  honk() {
    console.log('Buzina acionada');
  }

  turnOn() {
    console.log('carro ligado');
  }

  turnOff() {
    console.log('Carro desligado');
  }

  speedUp() {
    console.log('Acelerando o carro');
  }

  speedDown() {
    console.log('Parando o carro');
  }

  stop() {
    console.log('Carro parado');
  }

  turn(direction: string) {
    console.log(`Virando o carro para a ${direction}`);
    
  }
}

export default Car;