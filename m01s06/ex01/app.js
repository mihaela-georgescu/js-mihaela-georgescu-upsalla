const car = {
  make: 'Audi',
  color: 'black',
  wheels: 4,
  speed: 50,
  isTrunkOpen: false,
  areLightsOn: false,

  accelerate: function () {
    this.speed++;
  },
  decelerate: function () {
    this.speed--;
  },

  openTrunk: function () {
    this.isTrunkOpen = true;
  },
  closeTrunk: function () {
    this.isTrunkOpen = false;
  },

  turnLightsOn: function () {
    this.areLightsOn = true;
  },
  turnLightsOff: function () {
    this.areLightsOn = false;
  },

  stop: function () {
    this.speed = 0;

    console.log(this.speed);
  },

  topSpeed: 160,

  topReverseSpeed: -50,

  setSpeed: function (testSpeed) {
    if (testSpeed >= this.topSpeed) {
      testSpeed = this.topSpeed;
    } else if (testSpeed <= this.topReverseSpeed) {
      testSpeed = this.topReverseSpeed;
    } else this.speed = testSpeed;
  },

  flashLights: function () {
    // pastrarea keywordului this - metoda 1 pre-2016
    const self = this;
    self.turnLightsOn();

    window.setTimeout(function () {
      self.turnLightsOff();
    }, 1000 * 2);
  },
};

console.log(`Masina era marca ${car.make} si se deplasa cu ${car.speed} km/h.`);

for (let i = 0; i < 5; i++) {
  car.decelerate();
}

console.log(`Viteza noua este ${car.speed} km/h.`);
