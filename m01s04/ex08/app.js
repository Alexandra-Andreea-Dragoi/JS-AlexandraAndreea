var start1 = 1;
var end1 = 84;

var i = start1;

console.warn(`
  Modifica exemplul astfel incat bucla sa
  numere de la 1 la 18 si sa afiseze propozitii de forma:
  “Numar pana la 18 inclusiv: i.”
`);
while (i <= end1) {
  console.log('Numar pana la 18 inclusiv: ' + i + '.');

  i++;
}

console.warn(`
  Folosind keywordul break opreste bucla atunci
  cand numarul este egal cu 8 (dar afiseaza-l)
  folosind propozitii de forma “Ma voi opri la 8: i.”.
`);

var i = start1;
while (i <= end1) {
  if (i === 8) {
    console.log('M-am oprit la 8!');

    break;
  }

  console.log('Ma voi opri la 8: ' + i + '.');

  i++;
}

var start2 = 5;
var end2 = 33;

console.warn(`Modifica exemplul astfel incat bucla sa
numere de la 1 la 29 si sa afiseze propozitii de forma: “Numerele pana la 29 inclusiv: i.”`);

var j = start2;
while (j <= end2) {
  console.log('Numerele pana la 29 inclusiv: ' + j + '.');
  j++;
}

console.warn(
  `Folosind keywordul break opreste bucla atunci cand numarul este egal cu 15 (dar afiseaza-l) folosind propozitii de forma “Ma voi opri la 15: i.”.`,
);
var j = start2;
while (j <= end2) {
  if (j === 15) {
    console.log('M-am oprit la ' + j + '!');
    break;
  }
  console.log('Ma voi opri la 15: ' + j + '.');
  j++;
}
