var number = Number(prompt('Scrie un numar'));
var paragraphElement = document.getElementById('message');

if (number === 20) {
  paragraphElement.innerText = `Numarul introdus este ${number}`;
} else if (number > 20) {
  paragraphElement.innerText = ` Numarul introdus este ${number} si este mai mare decat 20.`;
} else {
  paragraphElement.innerText = `Numarul introdus este ${number} si este mai mic decat 20.`;
}
