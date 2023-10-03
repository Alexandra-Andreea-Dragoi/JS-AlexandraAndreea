var person = {
  firstName: 'Dragos',
  lastName: 'Iordache',
  birthYear: 1987,
  pets: [
    {
      name: 'Twix',
      species: 'papagal',
      age: 4,
    },
    {
      name: 'Mars',
      species: 'caine',
      age: 2,
    },
    {
      name: 'Bounty',
      species: 'hamster',
      age: 4,
    },
    {
      name: 'Lion',
      species: 'pisica',
      age: 10,
    },
  ],
};

console.warn(`
Afiseaza in consola folosind metoda forEach() numele fiecarui animal.
`);
person.pets.forEach(function (pet) {
  console.log(pet.name);
});

console.warn(`
Folosind o bucla for afiseaza suma anilor animalelor.
`);
let totalPetYers = 0;
for (let i = 0; i < person.pets.length; i++) {
  totalPetYers += person.pets[i].age;
}
console.log(totalPetYers);

console.warn(`Folosind forEach(), afiseaza cate una pe linie propozitiile: “Twix este papagal si are 4 ani. Mars este caine si are… etc”.
`);
person.pets.forEach(function (pet) {
  console.log(`${pet.name} este ${pet.species} si are ${pet.age} ani.`);
});

console.warn(`
Folosind o bucla for, afiseaza cate una pe linie propozitiile: “Intre Dragos si Twix este o diferenta de xx ani. Intre Dragos si Mars… ” (repeta pentru toate intrarile din array).
`);
for (let i = 0; i < person.pets.length; i++) {
  let diffYears = Math.abs(
    person.birthYear - (new Date().getFullYear() - person.pets[i].age),
  );

  console.log(
    `Intre ${person.firstName} si ${person.pets[i].name} este o diferenta de ${diffYears} ani.`,
  );
}

console.warn(
  `Folosind o bucla for, afiseaza in ordine inversa numele animalelor din array sub forma de propozitii: “Animalul meu se numeste xxxx.”. `,
);
for (let i = 0; i < person.pets.length; i++) {
  const myPetsReversed = person.pets.slice().reverse();
  console.log(`Animalul meu se numeste ${myPetsReversed[i].name}.`);
}
//Pentru Dragos :) Aici se inverzeste Pixeltabul chiar daca ii pui in ordinea din array-ul initial, fara sa inversezi

console.warn(`Folosind o bucla for, afla care este cel mai in varsta animal si afiseaza propozitia: “xxx este cel mai batran animal pe care il am, dar intre noi este o diferenta de xx ani.” Salveaza primul pet intr-o variabila numita oldestPet si porneste bucla, daca varsta animalului curent din bucla este mai mare decat oldestPet.age, atunci oldestPet devine animalul curent.
`);
for (let i = 0; i < person.pets.length; i++) {
  let oldestPet = person.pets[0];

  if (person.pets[i].age > oldestPet.age) {
    oldestPet = person.pets[i];

    let diffYears = new Date().getFullYear() - person.birthYear - oldestPet.age;

    console.log(
      `${person.pets[i].name} este cel mai batran animal pe care il am, dar intre noi este o diferenta de ${diffYears} ani.`,
    );
  }
}

console.warn(
  `Folosind o bucla forEach, afiseaza propozitia: “Am papagal, caine, hamster si pisica.”`,
);
let message = 'Am ';
person.pets.forEach(function (pet, index) {
  let punctuation = ', ';
  if (index === person.pets.length - 1) {
    punctuation = '.';
  }
  if (index === person.pets.length - 2) {
    punctuation = ' si ';
  }
  message += `${pet.species}${punctuation}`;
});
console.log(message);
