const Car = {
  make: '',
  color: '',
  wheels: 0,
  speed: 0,
  topSpeed: 160,
  topReverseSpeed: -50,

  displaySpeed: function () {
    console.log(`Viteza curenta este: ${this.speed}.`);
  },

  accelerate: function () {
    this.setSpeed(this.speed + 1);
    this.displaySpeed();
  },

  decelerate: function () {
    this.setSpeed(this.speed - 1);
    this.displaySpeed();
  },

  setSpeed(speed) {
    if (speed > this.topSpeed) {
      speed = this.topSpeed;
    }

    if (speed < this.topReverseSpeed) {
      speed = this.topReverseSpeed;
    }

    this.speed = speed;
    this.displaySpeed();
  },
};

const audi = Object.create(Car);
audi.make = 'Audi';
audi.color = 'black';
audi.wheels = 4;
audi.speed = 0;
audi.topSpeed = 220;

console.log(audi);

audi.topSpeed = 140;
audi.setSpeed(140);
audi.accelerate();

audi.areLightsOn = false;

audi.turnLightsOn = function () {
  this.areLightsOn = true;
};

audi.turnLightsOff = function () {
  this.areLightsOn = false;
};

audi.flashLights = function () {
  const self = this;
  self.turnLightsOn();

  window.setTimeout(function () {
    self.turnLightsOff();
  }, 1000 * 2);
};
