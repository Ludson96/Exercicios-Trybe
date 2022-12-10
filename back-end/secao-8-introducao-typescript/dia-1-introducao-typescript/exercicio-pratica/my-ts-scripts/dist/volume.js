"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convert = void 0;
const readline = require('readline-sync');
const units = ['mk³', 'hm³', 'dam³', 'm³', 'dm³', 'cm³', 'mm³'];
function convert(valor, uniB, uniC) {
    const uniBase = units.indexOf(uniB);
    const uniConvert = units.indexOf(uniC);
    const exponent = uniConvert - uniBase;
    return valor * Math.pow(1000, exponent);
}
exports.convert = convert;
