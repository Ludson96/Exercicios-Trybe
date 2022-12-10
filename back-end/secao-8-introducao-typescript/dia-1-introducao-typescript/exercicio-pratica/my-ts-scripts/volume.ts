const readline = require('readline-sync');

const units = ['mk³', 'hm³', 'dam³', 'm³', 'dm³', 'cm³', 'mm³'];

export function convert (valor: number, uniB: string, uniC: string): number {
  const uniBase = units.indexOf(uniB);
  const uniConvert = units.indexOf(uniC);
  const exponent = uniConvert - uniBase;

  return valor * Math.pow(1000, exponent);
}