const button = document.getElementById('clicker');
const removeButton = document.getElementById('removeEvent');

function clickHandler() {
  alert('Ai apasat butonul!');
}

button.addEventListener('click', clickHandler);

removeButton.addEventListener('click', function () {
  button.removeEventListener('click', clickHandler);
});

// Adauga un buton nou in document cu id-ul query si folosind addEventListener() ataseaza un eveniment care sa foloseasca metoda prompt() pentru a afla varsta utilizatorului. (fara validari, sau optional)

// Salveaza rezultatul metodei prompt intr-o variabila si afiseaza in consola folosind template strings: “Ai aa ani.”.

// Creeaza un paragraf cu idul message si folosind getElementById() stocheaza elementul intr-o variabila, apoi folosind innerText, afiseaza mesajul de mai devreme in acest paragraf.

function getAge() {
  const age = prompt('What is your age?');
  let text = document.getElementById('message');
  text.innerText = `Ai ${age} ani.`;
}
query.addEventListener('click', getAge);
