"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exec = exports.convert = void 0;
const readline = require('readline-sync');
const units = ['km²', 'hm²', 'dam²', 'm²', 'dm²', 'cm²', 'mm²'];
function convert(valor, uniB, uniC) {
    const uniBase = units.indexOf(uniB);
    const uniConvert = units.indexOf(uniC);
    const exponent = uniConvert - uniBase;
    return valor * Math.pow(100, exponent);
}
exports.convert = convert;
function exec() {
}
exports.exec = exec;
