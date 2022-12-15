import { Comum, Doce, Vegetariana, Slices } from '../types/typespizza';



export interface pizza {
  flavor: string,
  slices: Slices,
}

export interface PizzaComum extends pizza {
  flavor: Comum
}

export interface PizzaDoce extends pizza {
  flavor: Doce 
}

export interface PizzaVegetariana extends pizza {
 flavor: Vegetariana
}