import Tv from "./ex1";
import { Customer, Order, OrderItem } from "./exercicio3/Restaurant";

class Person {
  name: string;
  height: number;
  weight?: number; // o caractere "?" indica um atributo opcional

  constructor(n: string, h: number, w?: number) {
    console.log(`Creating person ${n}`);
    this.name = n;
    this.height = h;
    this.weight = w;
  }

  sleep() {
    console.log(`${this.name}: zzzzzzz`);
  }
}

// const p1 = new Person('Maria', 171, 58);
// // aqui estamos passando somente dois parâmetros, atente-se ao valor do atributo p2.weight
// const p2 = new Person('João', 175, 62);
// console.log(p1.name, p1.height, p1.weight);
// console.log(p2.name, p2.height, p2.weight);
// p1.sleep();
// p2.sleep();

// const samsungTv = new Tv('Samsung', 55, '4K', ['HDMI', 'USB', 'Bluetooth']);

// samsungTv.turnOn();

// samsungTv.connectTo = 'HDMI';

// console.log(samsungTv.connectedTo);

const customer0 = new Customer('João');
const item1 = new OrderItem('Pizza', 20);
const item2 = new OrderItem('Coke', 5);
const order0 = new Order(customer0, [item1, item2], 'Credit Card', 0.1);

console.log(order0.totalOrderSumWithDiscount());
