class Customer {
  constructor(private _name: string = '') { }
}

class OrderItem {
  private _name: string = '';
  price: number = 0;

  constructor(name: string, price: number) {
    this._name = name;
    this.price = price;
  }
}

class Order {
  constructor(
    private _customer: Customer = new Customer(),
    private _orderItems: OrderItem[] = [],
    private _paymentMethod: string = '',
    private _discount?: number,
  ) { }

  totalOrderSum(): number {
    let sum = 0;
    this._orderItems.forEach((item) => sum += item.price);
    return sum;
  }

  totalOrderSumWithDiscount(): number {
    if (this._discount) {
      return this.totalOrderSum() * (1 - this._discount);
    } 
    return this.totalOrderSum();
  }
}

export {
  Customer,
  OrderItem,
  Order,
}