// syntatic sugar
// js nu are clase
class Car {
  // notatia 1
  topSpeed = 160;
  topReverseSpeed = -50;
  isTrunkOpen = false;
  areLightsOn = false;

  constructor(make, color, wheels, speed) {
    this.make = make;
    this.color = color;
    this.wheels = wheels;
    this.speed = speed;
  }

  accelerate() {
    this.speed++;
  }

  decelerate() {
    this.speed--;
  }

  stop() {
    this.speed = 0;

    console.log(`Viteza noua este: ${this.speed}.`);
  }

  setSpeed(speed) {
    if (speed > this.topSpeed) {
      speed = this.topSpeed;
    }

    if (speed < this.topReverseSpeed) {
      speed = this.topReverseSpeed;
    }

    this.speed = speed;
  }

  openTrunk() {
    this.isTrunkOpen = true;
  }

  closeTrunk() {
    this.isTrunkOpen = false;
  }

  turnLightsOn() {
    this.areLightsOn = true;
  }

  turnLightsOff() {
    this.areLightsOn = false;
  }

  flashLights() {
    if (this.areLightsOn === false) {
      window.setTimeout(() => {
        this.turnLightsOn();
        console.log('on');
      }, 2000);
    }

    window.setTimeout(() => {
      this.turnLightsOff();
      console.log('of');
    }, 2000);

    // nu stiu sa le pornesc succesiv cu metoda window.setTimeout()
    // am incercat ceva dar nu e ce trenuie :((
  }
}

const audi = new Car('Audi', 'black', 4, 50);
const opel = new Car('Opel', 'red', 4, 3);

const cars = [audi, opel];
// sa vedem bucla pe tema

cars.forEach(function (car) {
  console.log(`Viteza noua este ${car.speed} km/h.`);
});

cars.forEach(function (car) {
  for (let i = 1; i <= 5; i++) {
    car.decelerate();
  }
  console.log(`Viteza noua este ${car.speed} km/h.`);
});
