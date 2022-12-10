const units = ['kl', 'hl', 'dal', 'l', 'dl', 'cl', 'ml'];

export function convert (valor: number, uniB: string, uniC: string): number {
  const uniBase = units.indexOf(uniB);
  const uniConvert = units.indexOf(uniC);
  const exponent = uniConvert - uniBase;

  return valor * Math.pow(10, exponent);
}