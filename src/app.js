export class Animal {
  constructor(name, callNumber, speed) {
    this.name = name;
    this.callNumber = callNumber;
    this.speed = speed;
  }

  identify() {
    return `${this.name}`;
  }
  speak() {
    return `A sound ${this.callNumber} times`;
  }
  move() {
    return `A speed of ${this.speed} meters per second`;
  }
}

export class Mammal extends Animal {
  constructor(name, callNumber, speed) {
    super(name, callNumber, speed);
  }
  speak() {
    return `Shout ${this.callNumber} times`;
  }
  move() {
    return `Walk ${this.speed} meters per second`;
  }
}


export class Birds extends Animal {
  constructor(name, callNumber, speed) {
    super(name, callNumber, speed);
  }
  speak() {
    return `Sing ${this.callNumber} times`;
  }
  move() {
    return `Fly ${this.speed} meters per second`;
  }
}
