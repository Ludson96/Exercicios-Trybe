"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.convert = void 0;
const readline_sync_1 = __importDefault(require("readline-sync"));
const units = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'];
function convert(value, fromUnit, toUnit) {
    const fromIndex = units.indexOf(fromUnit); // pegamos o index da unidade base no array
    const toIndex = units.indexOf(toUnit); // pegamos o index da unidade para a conversão
    const exponent = toIndex - fromIndex; // calculamos o expoente a partir da diferença dos index
    return value * Math.pow(10, exponent);
}
exports.convert = convert;
function exec() {
    const valor = readline_sync_1.default.questionFloat('Digite o valor a ser convertido: ');
    const uniB = readline_sync_1.default.keyInSelect(units, 'Escolha um número para unidade base: ');
    const toUnitChoice = units[uniB];
    const uniC = readline_sync_1.default.keyInSelect(units, 'Escolha um número para a conversão: ');
    const fromUnitChoice = units[uniC];
    if (!fromUnitChoice || !toUnitChoice) {
        console.log(`Função cancelada`);
        return 0;
    }
    const result = convert(valor, fromUnitChoice, toUnitChoice);
    const message = `${valor}${fromUnitChoice} é igual a ${result}${toUnitChoice}`;
    console.log(message);
}
exec();
