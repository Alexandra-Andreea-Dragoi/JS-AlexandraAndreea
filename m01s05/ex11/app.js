// Creeaza o functie overloaded pentru calcularea suprafetelor numita calculateSurface. Daca primeste un parametru, sa calculeze suprafata unui patrat. Daca primeste doi, a unui dreptunghi. Daca primeste trei, sa calculeze suprafata totala a paralelipipedului. Foloseste structura switch.

function calculateSurface(width, length, height) {
  switch (arguments.length) {
    case 3:
      return 2 * width * length + 2 * width * height + 2 * length * height;
      break;
    case 2:
      return width * length;
      break;
    default:
      return width ** 2;
  }
}

console.log(calculateSurface(6, 7));
console.log(calculateSurface(20, 15, 5));

// Creeaza o functie numita calculateCircleArea() si afiseaza suprafata unor cercuri cu raza de 2, 20 si 16.

function calculateCircleArea(radius) {
  return Math.PI * radius ** 2;
}
console.log(calculateCircleArea(2));
console.log(calculateCircleArea(20));
console.log(calculateCircleArea(16));

// Creeaza un obiect numit pet cu urmatoarele metode: getName, getSpecies si getAge.
// Folosind metodele obiectului pet afiseaza propozitia: “nnnn este ssss si are aaaa ani.”
// Folosind metoda getAge calculeaza si salveaza intr-o variabila numita petAge varsta animalului si afiseaza propozitia: “Animalul meu are petAge ani”

const pet = {
  getName: function () {
    return 'Lucky';
  },

  getSpecies: function () {
    return 'cat';
  },

  getAge: function () {
    return 8;
  },
};

const petAge = pet.getAge();
console.log(
  `${pet.getName()} este ${pet.getSpecies()} si are ${pet.getAge()} ani.`,
);
console.log(`Animalul meu are ${petAge} ani.`);
