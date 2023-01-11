import ISchool from './interfaces/interfaceSchool';

export default class School {
  private _matricula: number;
  private _nome: string;
  private _N1: number;
  private _N2: number;
  private _N3: number;
  private _N4: number;
  private _T1: number;
  private _T2: number;

  constructor(aluno: ISchool) {
    this._matricula = aluno.matricula;
    this._nome = aluno.nome;
    this._N1 = aluno.N1;
    this._N2 = aluno.N2;
    this._N3 = aluno.N3;
    this._N4 = aluno.N4;
    this._T1 = aluno.T1;
    this._T2 = aluno.T2;
  }

  somaNota() {
    const soma = this._N1 + this._N2 + this._N3 + this._N4;
    console.log('A soma da suas notas é: ', soma);
    
  }

  avgNota() {
    const avg = (this._N1 + this._N2 + this._N3 + this._N4) / 4;
    console.log('A média das sua notas é: ', avg);
    
  }
}