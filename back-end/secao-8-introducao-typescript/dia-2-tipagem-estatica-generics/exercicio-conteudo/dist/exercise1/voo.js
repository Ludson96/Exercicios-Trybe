"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Voo = void 0;
class Voo {
    constructor(nome, numero, destino) {
        this.nome = nome;
        this.numero = numero;
        this.destino = destino;
    }
    decolar() {
        console.log(`Voando para ${this.destino}`);
    }
    aviao() {
        console.log(`Nome do avião é ${this.nome}`);
    }
}
exports.Voo = Voo;
