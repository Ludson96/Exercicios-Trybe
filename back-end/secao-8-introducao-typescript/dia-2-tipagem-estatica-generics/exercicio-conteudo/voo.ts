export class Voo {
  nome: string;
  numero: number;
  destino: string;

  constructor(nome: string, numero: number, destino: string) {
    this.nome = nome;
    this.numero = numero;
    this.destino = destino;
  }

  decolar(): void {
    console.log(`Voando para ${this.destino}`);
  }

  aviao(): void {
    console.log(`Nome do avião é ${this.nome}`);
  }
}