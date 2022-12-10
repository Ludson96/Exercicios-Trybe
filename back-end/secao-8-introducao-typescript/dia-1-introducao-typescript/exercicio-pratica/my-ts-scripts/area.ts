const readline = require('readline-sync');

const units = ['km²', 'hm²', 'dam²', 'm²', 'dm²', 'cm²', 'mm²']

export function convert (valor: number, uniB: string, uniC: string): number {
  const uniBase = units.indexOf(uniB);
  const uniConvert = units.indexOf(uniC);
  const exponent = uniConvert - uniBase;

  return valor * Math.pow(100, exponent);
}

export function exec () {

}