const Car = {
  make: '',
  color: '',
  wheels: 0,
  speed: 0,
  topSpeed: 160,
  topReverseSpeed: -50,
  areLightsOn: false,

  displaySpeed: function () {
    console.log(`Viteza curenta este: ${this.speed}.`);
  },

  accelerate: function () {
    this.speed++;

    this.displaySpeed();
  },

  decelerate: function () {
    this.speed--;

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

  turnLightsOn() {
    this.areLightsOn = true;
    console.log('Lights are on');
  },

  turnLightsOff() {
    this.areLightsOn = false;
    console.log('Lights are off');
  },

  // asemeni cu ex M02s01.Ex01 nu stiu sa il fac
  // am incercat cu chatGPT dar imi spune in consola ca audi.fleshLights() nu este functie si nu ma descurc nici cu dbugerul de data asta

  flashLights() {
    let toggle = true;

    function alternateMethods() {
      if (toggle) {
        this.turnLightsOn();
      } else {
        this.turnLightsOff();
      }
      toggle = !toggle;
    }
    window.setTimeout(alternateMethods, 2000);
  },
};

const audi = Object.create(Car);
audi.make = 'Audi';
audi.color = 'black';
audi.wheels = 4;
audi.speed = 0;
audi.topSpeed = 220;

console.log(audi);
