export default class Tv  {
  private _brand: string;
  private _size: number;
  private _resolution: number;
  private _connections: string;
  private _connectedTo?: string;

  constructor(_brand: string, _size: number, _resolution: number, _connections: string) {
    this._brand = _brand;
    this._size = _size;
    this._resolution = _resolution;
    this._connections = _connections;
  }

  turnOn() {
    return `${this._brand}, ${this._size}, ${this._resolution}, ${this._connections}`;
  }

  get connectedTo(): string | undefined{
    return this._connectedTo;
  }

  set connectedTo(c: string | undefined) {
      if (!c || this._connections.includes(c)) {
        this._connectedTo = c;
        console.log(this._connectedTo);
        
      } else {
        console.log('Sorry, connections unavailable');
      }
  }
}

const Tv1 = new Tv('Samsung', 40, 1080, 'HDMI');
console.log(Tv1.turnOn());

Tv1.connectedTo = 'HDMI';
console.log('Cade connect: ', Tv1.connectedTo);

