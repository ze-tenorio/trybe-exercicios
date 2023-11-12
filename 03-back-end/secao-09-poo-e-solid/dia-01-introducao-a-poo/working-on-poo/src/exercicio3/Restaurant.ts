class Customer {
  constructor(private _name: string = '') { }
}

class OrderItem {
  constructor(private _name: string = '', private _price: number = 0) { }
}

class Order {
  constructor(
    private _customer: Customer = new Customer(),
    private _orderItems: OrderItem[] = [],
    private _paymentMethod: string = '',
    private _discount?: number,
  ) { }
}