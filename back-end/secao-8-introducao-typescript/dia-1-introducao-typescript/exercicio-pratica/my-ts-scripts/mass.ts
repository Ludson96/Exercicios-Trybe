const readline = require('readline-sync');

const units = ['kg', 'hg', 'dag', 'g', 'dg', 'cg', 'mg'];

export function convert (valor: number, uniBas: string, uniCon: string): number {
  const uniBase = units.indexOf(uniBas);
  const uniConvert = units.indexOf(uniCon);
  const exponent = uniConvert - uniBase;

  return valor * Math.pow(10, exponent);
}
