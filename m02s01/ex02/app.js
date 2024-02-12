class Vehicle {
  constructor(
    make,
    color,
    wheels,
    speed,
    topSpeed = 160,
    topReverseSpeed = -50,
  ) {
    this.make = make;
    this.color = color;
    this.wheels = wheels;
    this.speed = speed;
    this.topSpeed = topSpeed;
    this.topReverseSpeed = topReverseSpeed;
  }

  displaySpeed() {
    console.log(`Viteza curenta este: ${this.speed}.`);
  }

  accelerate() {
    this.setSpeed(this.speed + 1);

    this.displaySpeed();
  }

  decelerate() {
    this.setSpeed(this.speed - 1);

    this.displaySpeed();
  }

  setSpeed(speed = 5) {
    if (speed > this.topSpeed) {
      speed = this.topSpeed;
    }

    if (speed < this.topReverseSpeed) {
      speed = this.topReverseSpeed;
    }

    this.speed = speed;
    this.displaySpeed();
  }
}

class Car extends Vehicle {
  constructor(make, color, speed, topSpeed, topReverseSpeed) {
    super(make, color, 4, speed, topSpeed, topReverseSpeed);
  }
}

class Bicycle extends Vehicle {
  constructor(make, color, speed, topSpeed) {
    super(make, color, 2, speed, topSpeed, 0);
  }

  // exemplu naiv de polimorfism
  // decelerate() {
  //   if (--this.speed < 0) {
  //     this.speed = 0;

  //     this.displaySpeed();
  //   }
  // }
}

const bike = new Bicycle('Pegas', 'red', 8, 20);

bike.setSpeed(2);
bike.decelerate();
bike.decelerate();
bike.decelerate();

console.warn(`
Creeaza o noua clasa care extinde Vehicle in mod similar cu Bicycle, numita Tricycle, diferenta fiind ca o tricicleta are trei roti si
ca poate de fapt merge cu spatele.
`);
class Tricycle extends Vehicle {
  constructor(make, color, speed, topSpeed) {
    super(make, color, 3, speed, topSpeed, 0);
  }
}

console.warn(`
Instantiaza o tricicleta (marca Tryke, culoare red, viteza curenta 2, viteza minima -2, viteza maxima 9). O poti stoca intr-o variabila numita trike.
`);
const trike = new Tricycle('Tryke', 'red', 2, 9, -2);

console.warn(`
Seteaza viteza instantei trike la 0
`);
trike.setSpeed(0);

console.warn(`
Foloseste metoda decelerate() de trei ori. Ce observi?
`);
trike.decelerate();
trike.decelerate();
trike.decelerate();

console.warn(`
Seteaza viteza instantei trike la -10. Ce observi?
`);
trike.setSpeed(-10);

console.warn(`
Creeaza o masina noua (marca Audi, culoare blue, viteza curenta 3, viteza maxima 140, viteza minima -50).
`);
const newAudi = new Car('Audi', 'blue', 3, 140, -50);

console.warn(`
Seteaza viteza noii instante la 140, apoi ruleaza metoda accelerate(). Ce observi?
`);
newAudi.setSpeed(140);
newAudi.accelerate();
