class Superclass {
  constructor(public isSuper: boolean = true) { }
  public sayHello() {
    console.log('Hello, World!');
    ;
  }
}

class Subclass extends Superclass {
  constructor() {
    super(false);
  }
}

const myFunc = (superClass: Superclass) => {
  superClass.sayHello();
  if (superClass.isSuper) {
    console.log('Super!');
    return;
  }
  console.log('Sub!');
}

const firstObj = new Superclass;
const secondObj = new Subclass;

myFunc(firstObj);
myFunc(secondObj);