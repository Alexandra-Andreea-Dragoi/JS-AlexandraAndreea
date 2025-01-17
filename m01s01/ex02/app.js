var inputLength = document.getElementById('length');
var inputWidth = document.getElementById('width');
var elementResult = document.getElementById('result');
var form = document.querySelector('form');

form.addEventListener(
  'submit',
  function (event) {
    event.preventDefault();

    // Metoda event.preventDefault poate fi folosita pentru a preveni comportamentul implicit al unui element. Spre exemplu poate preveni formularele de a trimite informatii prin metoda implicita a browserului sau poate preveni navigarea la click pe ancora.

    var length = inputLength.value || 0;
    var width = inputWidth.value || 0;
    var result = 0;

    result = length * width;

    elementResult.innerText = result;
  },
  false,
);
