export default class Animal {
  constructor(name, callNumber, speed) {
    this.name = name;
    this.callNumber = callNumber;
    this.speed = speed;
  }

  sayHi() {
    alert(this.name);
  }
  speak() {
    return `A string`;
  }
  move() {
    return `A call`;
  }
}
class Mammal extends Animal {
  constructor(name, callNumber, speed) {
    super(name, callNumber, speed);
  }
}
class Birds extends Animal {
  constructor(name, callNumber, speed) {
    super(name, callNumber, speed);
  }
}
