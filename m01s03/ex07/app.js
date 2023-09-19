var person = {
  firstName: 'Alexandra',
  lastName: 'Dragoi',
  email: 'blablabla@gmail.com',
  birthYear: 1981,
  pets: [
    {
      name: 'Lucky',
      age: 8,
      species: 'Tuxedo',
    },
    {
      name: 'Jinks',
      age: 8,
      species: 'Wild',
    },
    {
      name: 'Pixie',
      age: 10,
      species: 'British',
    },
  ],
  zipCode: '106100',
};
var difference =
  new Date().getFullYear() - person.birthYear - person.pets[0].age;
var petName = person.pets[0].name;
var diffAgeFirstThird = person.pets[0].age - person.pets[2].age;
var pet1BirthYear = new Date().getFullYear() - person.pets[0].age;
var pet2BirthYear = new Date().getFullYear() - person.pets[1].age;
var pet3BirthYear = new Date().getFullYear() - person.pets[2].age;

console.log(
  'Numele meu este: ' +
    person.firstName +
    ' ' +
    person.lastName +
    ' si am ' +
    person.pets.length +
    ' animale.',
);

console.log(`Am acelasi email din copilarie: ${person.email}.`);

console.log(
  `Unul din cele ${person.pets.length.toString()} animale ale mele este ${
    person.pets[1].species
  } si are ${person.pets[1].age.toString()} ani.`,
);

console.log((new Date().getFullYear() - person.pets[2].age).toString());

console.log(difference.toString());

console.log(
  `Intre ${person.firstName} si ${petName} este o diferenta de ${difference} ani.`,
);

document.getElementById('prop01').innerText = person.firstName;
document.getElementById('prop02').innerText = person.lastName;
document.getElementById('prop03').innerText = person.email;
document.getElementById('prop04').innerText = person.birthYear;

document.getElementById('prop05').innerText =
  person.firstName +
  ', ' +
  person.pets[0].name +
  ', ' +
  person.pets[1].name +
  ', ' +
  person.pets[2].name +
  ' locuiesc toti in aceeasi casa';

document.getElementById(
  'prop06',
).innerText = `Diferenta de varsta intre ${person.pets[0].name} si ${person.pets[2].name} este de ${diffAgeFirstThird} ani.`;

document.getElementById(
  'prop07',
).innerText = `Ma numesc ${person.firstName} ${person.lastName}, m-am nascut in ${person.birthYear} si codul meu postal este: ${person.zipCode}.`;

document.getElementById(
  'prop08',
).innerText = `Animalele mele s-au nascut in ${pet1BirthYear}, ${pet2BirthYear}, respectiv ${pet3BirthYear}.`;
