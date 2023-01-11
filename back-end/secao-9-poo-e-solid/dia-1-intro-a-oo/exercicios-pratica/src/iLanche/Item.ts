export default class Item {
  private _cliente: string;
  private _itens: string;
  private _pagamento: string;
  private _per?: number;
  
  constructor(c: string, i: string, p: string, per: number) {
    this._cliente = c;
    this._itens = i;
    this._pagamento = p;
    this._per = per;
  }
}