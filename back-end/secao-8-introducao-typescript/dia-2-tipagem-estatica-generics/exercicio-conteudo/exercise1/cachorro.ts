export class Dog {
  name: string;
  raca: string;
  peso: number;

  constructor(name: string, raca: string, peso: number) {
    this.name = name;
    this.raca = raca;
    this.peso = peso;
  }

  latir(fala: string) {
    console.log(`${this.name} diz: ${fala}`);
  }

  comer(): void {
    console.log(`${this.name} está comendo`);
  }

  dormir(): void {
    console.log(`${this.name} está mimindo`);
  }
}