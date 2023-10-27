var person = {
  name: 'Alexandra',
  surname: 'Dragoi',
  age: 24,
  petOwner: true,
  skills: [
    'html',
    'Javascript',
    'css',
    'java',
    'c++',
    'node',
    'jquery',
    'node.js',
  ],
  friends: [
    {
      name: 'Larry',
      surname: 'Larryson',
      age: 30,
    },
    {
      name: 'Steven',
      surname: 'Stevenson',
      age: 31,
    },
    {
      name: 'Carol',
      surname: 'Carolson',
      age: 29,
    },
    {
      name: 'Andra',
      surname: 'Andrason',
      age: 32,
    },
  ],
};

console.warn(`Folosind fisierele de la exercitiul 06 si doua bucle for imbricate (nested), afiseaza diferenta de varsta dintre fiecare membru al arrayului friends si ceilalti membri.
Poti folosi metoda pentru a converti numerele negative in pozitive. `);

// Versiune Alexandra
for (let i = 0; i < person.friends.length; i++) {
  for (let j = 0; j < person.friends.length; j++) {
    if (person.friends[i].name !== person.friends[j].name) {
      console.log(
        `Intre ${person.friends[i].name} si ${
          person.friends[j].name
        } este o diferenta de ${Math.abs(
          person.friends[i].age - person.friends[j].age,
        )} ani.`,
      );
    }
  }
}

// Versiune Dragos
const length = person.friends.length;
for (let i = 0; i < length; ++i) {
  const outerFriend = person.friends[i];

  for (let j = 0; j < length; ++j) {
    if (i === j) {
      continue;
    }

    const innerFriend = person.friends[j];
    const ageDifference = Math.abs(outerFriend.age - innerFriend.age);
    const message = `Intre ${outerFriend.name} si ${innerFriend.name} este o diferenta de ${ageDifference} ani.`;

    console.log(message);
  }
}
