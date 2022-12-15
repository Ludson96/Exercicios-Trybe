import { pizza, PizzaComum } from './interfaces/pizza';

const pizza1: PizzaComum = {
  flavor: 'Calabresa',
  slices: 4,
}

const pizza2: PizzaComum = {
  flavor: 'Frango',
  slices: 8,
}

const pizza3: PizzaComum = {
  flavor: 'Pepperoni',
  slices: 4,
}

console.log('Eu quero todas as pizzas: \n1 -', pizza1, '\n2 -', pizza2, '\n3 -', pizza3);
