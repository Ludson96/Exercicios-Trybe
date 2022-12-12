export class Casa {
  rua: string;
  numero: number;
  cidade: string;

  constructor(rua: string, numero: number, cidade: string) {
    this.rua = rua;
    this.numero = numero;
    this.cidade = cidade;
  }

  chegar(): void {
    console.log(`Mamão cheguei em ${this.cidade}`);
  }

  test(pula: string): void {
    console.log(`Qualquer coisa ${pula}`);
    
  }
}