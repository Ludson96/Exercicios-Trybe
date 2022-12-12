interface automovel {
  marca: string;
  modelo: string;
  ano: number;
}

const carro1: automovel = {
  marca: 'Toytota',
  modelo: 'Supra',
  ano: 1998,
}

console.log('Eu sou o carro1: ', carro1);

interface felino {
  nome: string;
  raca: string;
  idade: number;
}

const felino1: felino = {
  nome: 'Rodolfo',
  raca: 'Siames',
  idade: 9,
}

console.log('Eu sou o felino1: ', felino1);

