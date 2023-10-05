const person = {
  getName: function () {
    return 'Alex Drg';
  },

  getAge: function () {
    return 32;
  },
};

function accessor(methodSuffix) {
  const methodName = `get${methodSuffix}`;

  return person[methodName]();
}

console.warn(`
  Folosind accesorul, salveaza numele
  mic al persoanei intr-o variabila si
  foloseste-l in propozitia: “Eu sunt xxx.”
`);
console.log(`Eu sunt ${accessor('Name')}.`);

console.warn(`
  Afiseaza anul de nastere al persoanei folosind anul curent.
`);
const curentYear = new Date().getFullYear();
console.log((curentYear - accessor('Age')).toString());

console.warn(
  `Afiseaza propozitia “Ma numesc xxx yyy, am aa ani si m-am nascut in anul aaaa.”`,
);
console.log(
  `Ma numesc ${accessor('Name')}, am ${accessor(
    'Age',
  )} ani si m-am nascut in anul ${(curentYear - accessor('Age')).toString()}.`,
);

console.warn(`Folosind accesorul afiseaza numele persoanei.`);
console.log(accessor('Name'));

console.warn(`Afiseaza varsta persoanei.`);
console.log(accessor('Age'));

console.warn(
  `Afiseaza anul de nastere al persoanei folosind anul curent. Intr-o propozitie de forma “M-am nascut in 1987.”`,
);
console.log(`M-am nascut in ${curentYear - accessor('Age')}.`);

console.warn(`Afiseaza propozitia “Ma numesc xxx yyy si am aa ani!”`);
console.log(`Ma numesc ${accessor('Name')} si am ${accessor('Age')} ani!`);
