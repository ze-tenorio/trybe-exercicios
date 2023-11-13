class Superclass {
  constructor(public isSuper: boolean = true) { }
  public sayHello() {
    console.log('Hello, World!');
    ;
  }
}

class Subclass extends Superclass {
}

const myFunc = (superClass: Superclass) => {
  superClass.sayHello();
}

const firstObj = new Superclass;
const secondObj = new Subclass;

firstObj.sayHello();
myFunc(secondObj);