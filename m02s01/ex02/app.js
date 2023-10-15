class Vehicle {
  constructor(
    make,
    color,
    wheels,
    speed,
    topSpeed = 160,
    topReverseSpeed = -50,
    minSpeed,
  ) {
    this.make = make;
    this.color = color;
    this.wheels = wheels;
    this.speed = speed;
    this.topSpeed = topSpeed;
    this.topReverseSpeed = topReverseSpeed;
    this.minSpeed = minSpeed;
  }

  displaySpeed() {
    console.log(`Viteza curenta este: ${this.speed}.`);
  }

  accelerate() {
    this.setSpeed(this.speed + 1);
    // ia ca parametru viteza curenta la care ii adauga 1 in loc de defaultul 5 si foloseste metoda setSpeed pentru a accelera
  }

  decelerate() {
    this.setSpeed(this.speed - 1);
    // ia ca parametru viteza curenta la care ii scade 1 in loc de defaultul 5 si foloseste metoda setSpeed pentru a decelera
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
  decelerate() {
    if (--this.speed < 0) {
      this.speed = 0;
    }

    this.displaySpeed();
  }
}

const bike = new Bicycle('Pegas', 'red', 8, 20);
bike.setSpeed(2);

bike.decelerate();
bike.decelerate();
bike.decelerate();

class Tricycle extends Vehicle {
  constructor(make, color, speed, topSpeed, minSpeed) {
    super(make, color, 3, speed, topSpeed, 0, minSpeed);
  }
}

const tricycle = new Tricycle('Tryke', 'red', 2, 9, -2);

// let a = 0
// let b = a++
// => b = 0 si a = 1
// il pune pe a in b, b = 0 si apoi incrementeaza a si a devine 1
//  let a = 0
// let b ++a
// => b = 1 si a = 1
//  il incrementeaza mai intai pe a si apoi il pune in b cu valoarea totala
// daca ++ este inainte, face operatia inainte, daca ++ este dupa, face operatia dupa
