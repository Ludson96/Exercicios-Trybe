"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convert = void 0;
const readline = require('readline-sync');
const units = ['kl', 'hl', 'dal', 'l', 'dl', 'cl', 'ml'];
function convert(valor, uniB, uniC) {
    const uniBase = units.indexOf(uniB);
    const uniConvert = units.indexOf(uniC);
    const exponent = uniConvert - uniBase;
    return valor * Math.pow(10, exponent);
}
exports.convert = convert;
