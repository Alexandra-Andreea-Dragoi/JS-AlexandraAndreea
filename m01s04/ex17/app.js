var services = [
  {
    name: 'Mailchimp',
    adoption: 2010,
  },
  {
    name: 'Google Analitics',
    adoption: 2009,
  },
  {
    name: 'Stripe',
    adoption: 2020,
  },
  {
    name: 'Hotjar',
    adoption: 2021,
  },
  {
    name: 'Sendgrig',
    adoption: 2022,
  },
];

console.warn(`Folosind for`);
console.warn(`
Afiseaza in consola propozitia “Siteul foloseste urmatoarele servicii: a, b, c, d si e.”
`);
let message1 = `Siteul foloseste urmatoarele servicii: `;
for (let i = 0; i < services.length; i++) {
  let punctuation = ', ';
  if (i === services.length - 1) {
    punctuation = '.';
  }
  if (i === services.length - 2) {
    punctuation = ' si ';
  }
  message1 += services[i].name + punctuation;
}
console.log(message1);

console.warn(
  `Afiseaza doar numele serviciilor integrate dupa 2020 intr-o propozitie de forma “Serviciile a, b, c au fost adoptate dupa 2020 inclusiv.”`,
);
let message2 = `Serviciile `;
for (let i = 0; i < services.length; i++) {
  let punctuation = ', ';
  if (i === services.length - 1) {
    punctuation = ' ';
  }
  if (i === services.length - 2) {
    punctuation = ', ';
  }

  if (services[i].adoption >= 2020) {
    message2 += services[i].name + punctuation;
  }
}
console.log(message2 + `au fost adoptate dupa 2020 inclusiv.`);

console.warn(
  `Afiseaza doar pentru serviciile de pe pozitii pare, cate una pe linie, propozitii de forma “Serviciul se numeste xxx si a fost integrat in yyyy.”`,
);
for (let i = 0; i < services.length; i++) {
  if (i % 2 === 0) {
    console.log(
      `Serviciul se numeste ${services[i].name} si a fost integrat in ${services[i].adoption}.`,
    );
  }
}

console.warn(`Folosind anul curent afiseaza propozitii de forma “Siteul foloseste serviciul xxx de yyy ani.”
`);
for (let i = 0; i < services.length; i++) {
  console.log(
    `Siteul foloseste serviciul ${services[i].name} de ${
      new Date().getFullYear() - services[i].adoption
    } ani.`,
  );
}

console.warn(
  `Gaseste cel mai vechi serviciu si afiseaza o propozitie de forma “Folosim xxx de yyy ani.”`,
);
let message3 = 'Folosim ';
for (let i = 0; i < services.length; i++) {
  let smallestYear = services[0].adoption;
  if (services[i].adoption < smallestYear) {
    smallestYear = services[i].adoption;
    message3 +=
      services[i].name +
      ' de ' +
      (new Date().getFullYear() - services[i].adoption) +
      ' ani.';
  }
}
console.log(message3);
