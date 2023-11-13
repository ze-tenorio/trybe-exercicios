interface MyInterface {
  myNumber: number;

  myFunc(myParam: number): string;
}

class MyClass implements MyInterface {
  constructor(public myNumber: number) { }

  myFunc(myParam: number): string {
    return `Soma dos números: ${myParam + this.myNumber}`;
  }
}

const myLilObj = new MyClass(12);
console.log(myLilObj.myFunc(13));
