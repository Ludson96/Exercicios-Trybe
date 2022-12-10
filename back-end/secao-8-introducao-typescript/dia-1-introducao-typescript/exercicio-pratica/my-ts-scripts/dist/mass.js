"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convert = void 0;
const units = ['kg', 'hg', 'dag', 'g', 'dg', 'cg', 'mg'];
function convert(valor, uniBas, uniCon) {
    const uniBase = units.indexOf(uniBas);
    const uniConvert = units.indexOf(uniCon);
    const exponent = uniConvert - uniBase;
    return valor * Math.pow(10, exponent);
}
exports.convert = convert;
