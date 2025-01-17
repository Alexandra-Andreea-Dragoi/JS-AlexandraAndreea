const car = {
  make: 'Audi',
  color: 'black',
  wheels: 4,
  speed: 50,
  isTrunkOpen: false,
  areLightsOn: false,
  topSpeed: 160,
  topReverseSpeed: -50,

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

  flashLights: function () {
    // pastrarea keywordului this
    // metoda 1 pre -2016
    const self = this;
    self.turnLightsOn();

    window.setTimeout(function () {
      self.turnLightsOff();
    }, 1000 * 2);
  },

  stop: function () {
    this.speed = 0;
  },

  setSpeed: function () {
    this.speed = 20;
  },
};

console.warn(
  `Afiseaza propozitia: "Masina era marca make si se deplasa cu speed km/h.".`,
);
console.log(`Masina era marca ${car.make} si se deplasa cu ${car.speed} km/h.`);

console.warn(
  `Decelereaza masina cu 5 unitati apoi afisaza propozitia: "Viteza noua este speed km/h".`,
);
for (let i = 1; i <= 5; i++) car.decelerate();
// pretier mi-a scos acoladele
console.log(`Viteza noua este ${car.speed} km/h`);

console.warn(
  `Adauga o proprietate numita topSpeed si asigneaza-i valoarea 160`,
);

console.warn(
  `Adauga o proprietate numita topReverseSpeed si asigneaza-i valoarea -50.`,
);

console.warn(
  `Adauga o metoda numita stop() care sa faca proprietatea speed 0, apoi afiseaza viteza.`,
);

console.warn(
  `Adauga  o metoda numita setSpeed() care sa poata primi un parametru fix pentru viteza. Metoda trebuie sa verifice ca nu se depasesc limitele inferioare si superioare, caz in care se folosesc proprietatile topSpeed si topReverseSpeed`,
);
