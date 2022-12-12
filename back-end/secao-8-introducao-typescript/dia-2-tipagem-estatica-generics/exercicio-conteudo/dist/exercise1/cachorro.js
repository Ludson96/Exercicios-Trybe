"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dog = void 0;
class Dog {
    constructor(name, raca, peso) {
        this.name = name;
        this.raca = raca;
        this.peso = peso;
    }
    latir(fala) {
        console.log(`${this.name} diz: ${fala}`);
    }
    comer() {
        console.log(`${this.name} está comendo`);
    }
    dormir() {
        console.log(`${this.name} está mimindo`);
    }
}
exports.Dog = Dog;
