// avem nevoie de o clasa Car
// care atunci cand este instantiata
// si se ruleaza metoda .render()
// sa afiseze in DOM masinuta cu proprietatile specificate
// pozitie (top left) color pentru culoare

// new Car(100, 200, purple)
// left: 100; top: 200; background: purple;

class Car {
  // classes are sintatcti sugar
  isLightOn = false;
  intervalId = -1;

  constructor(
    left = 10,
    top = 10,
    color = 'black',
    weelColor = 'black',
    hubCapColor = 'white',
  ) {
    this.positionX = left;
    this.positionY = top;
    this.color = color;
    this.weelColor = weelColor;
    this.hubCapColor = hubCapColor;

    this.frame = this.e('div');
    this.frame.classList.add('frame');
    this.frame.style.left = this.positionX + 'px';
    this.frame.style.top = this.positionY + 'px';

    this.car = this.e('div');
    this.car.classList.add('car');
    this.frame.append(this.car);

    this.carTop = this.e('div');
    this.carTop.classList.add('car__top');
    this.carTop.style.backgroundColor = this.color;
    this.car.append(this.carTop);

    this.carBody = this.e('div');
    this.carBody.classList.add('car__body');
    this.carBody.style.backgroundColor = this.color;
    this.car.append(this.carBody);

    this.lightFront = this.e('div');
    this.lightFront.classList.add('light', 'light--front');
    this.carBody.append(this.lightFront);

    this.lightBack = this.e('div');
    this.lightBack.classList.add('light', 'light--back');
    this.carBody.append(this.lightBack);

    this.wheelFront = this.e('div');
    this.wheelFront.classList.add('wheel', 'car__wheel', 'car__wheel--front');
    this.wheelFront.style.backgroundColor = this.weelColor;
    this.carBody.append(this.wheelFront);
    this.hubCapFront = this.e('div');
    this.hubCapFront.classList.add('wheel__cap');
    this.hubCapFront.style.backgroundColor = this.hubCapColor;
    this.wheelFront.append(this.hubCapFront);

    this.wheelBack = this.e('div');
    this.wheelBack.classList.add('wheel', 'car__wheel', 'car__wheel--back');
    this.wheelBack.style.backgroundColor = this.weelColor;
    this.carBody.append(this.wheelBack);
    this.hubCapBack = this.e('div');
    this.hubCapBack.classList.add('wheel__cap');
    this.hubCapBack.style.backgroundColor = this.hubCapColor;
    this.wheelBack.append(this.hubCapBack);
  }

  e(elementType = 'div') {
    // wrapper pentru document.createElement

    return document.createElement(elementType);
  }

  turnLightOn() {
    this.lightFront.classList.add('light--on');
    this.isLightOn = true;

    return this;
  }

  turnLightOff() {
    this.lightFront.classList.remove('light--on');
    this.isLightOn = false;

    return this;
  }

  toggleHazards() {
    if (this.intervalId > 0) {
      // stop interval
      clearInterval(this.intervalId);
      this.intervalId = -1;

      if (this.isLightOn === true) {
        this.lightFront.classList.add('light--on');
      } else {
        this.lightFront.classList.remove('light--on');
      }

      return;
    }
    // // metoda de prezervare a this
    // post 2016
    // transformam functia normala in arrwow function
    this.intervalId = setInterval(() => {
      // if (this.isLightOn === true) {
      //   this.turnLightOff();
      // } else {
      //   this.turnLightOn();
      // }
      this.lightFront.classList.toggle('light--on');
    }, 800);
  }

  move(left, top) {
    const positionX = Number(left);
    const positionY = Number(top);

    if (!isNaN(positionX)) {
      this.frame.style.left = positionX + 'px';
    }

    if (!isNaN(positionY)) {
      this.frame.style.top = positionY + 'px';
    }
  }

  changeWeelColor(weelColor) {
    this.wheelBack.style.backgroundColor = weelColor;
    this.wheelFront.style.backgroundColor = weelColor;
  }

  changeCarHubCapColor(hubCapColor) {
    this.hubCapBack.style.backgroundColor = hubCapColor;
    this.hubCapFront.style.backgroundColor = hubCapColor;
  }

  engageBreak() {
    this.lightBack.classList.add('.light--back', 'light--on');
    return this;
  }

  disengageBreak() {
    this.lightBack.classList.remove('.light--back', 'light--on');
    return this;
  }

  render() {
    // only touch the DOM at the last moment
    document.body.append(this.frame);

    return this;
  }
}

const purpleCar = new Car(200, 300, 'purple').render();
// new Date().getFullYear();
