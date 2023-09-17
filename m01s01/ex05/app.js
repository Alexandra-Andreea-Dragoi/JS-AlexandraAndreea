var inputRadius = document.getElementById('radius');
var elementResult = document.getElementById('result');
var form = document.querySelector('form');

form.addEventListener(
  'submit',
  function (event) {
    event.preventDefault();

    var radius = inputRadius.value || 0;

    result = (4 / 3) * (Math.PI * Math.pow(radius, 3));

    // Rezultatul asteptat este 1436.7550402417319, dar formularul a calculat: 1436.755040241732.
    // Nu inverzeste pixeltabul iar mesajul este cel de mai sus. A rotunjit, de la 19 la 2 la sfarsit si nu mai recunoaste.

    elementResult.innerText = result;
  },
  false,
);
