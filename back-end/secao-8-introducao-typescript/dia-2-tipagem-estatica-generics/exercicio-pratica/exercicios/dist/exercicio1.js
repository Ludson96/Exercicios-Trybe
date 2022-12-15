"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Car {
    constructor(brand, color, doors) {
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
    turn(direction) {
        console.log(`Virando o carro para a ${direction}`);
    }
}
exports.default = Car;
