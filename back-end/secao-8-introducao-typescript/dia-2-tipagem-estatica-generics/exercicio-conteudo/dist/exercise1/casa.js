"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Casa = void 0;
class Casa {
    constructor(rua, numero, cidade) {
        this.rua = rua;
        this.numero = numero;
        this.cidade = cidade;
    }
    chegar() {
        console.log(`Mamão cheguei em ${this.cidade}`);
    }
    test(pula) {
        console.log(`Qualquer coisa ${pula}`);
    }
}
exports.Casa = Casa;
