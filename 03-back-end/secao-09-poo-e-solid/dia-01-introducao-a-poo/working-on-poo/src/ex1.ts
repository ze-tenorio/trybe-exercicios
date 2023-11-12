export default class Tv {
  private _brand: string;
  private _size: number;
  private _resolution: string;
  private _connections: string[];
  private _connectedTo?: string;

  constructor(b: string, s: number, r: string, c: string[]) {
    this._brand = b;
    this._size = s;
    this._resolution = r;
    this._connections = c;
  }

  get connectedTo() {
    return this._connectedTo || 'No connection';
  };

  set connectTo(c: string) {
    if (!(this._connections.includes(c))) {
      console.log('Sorry, connection unavailable');
      return;
    }
    this._connectedTo = c;
    console.log(`Connected to ${c}`);
  }

  turnOn() {
    console.log(`${this._brand}, ${this._size} pol., ${this._resolution}, available to ${this._connections}: Turned on`);
  }
}

