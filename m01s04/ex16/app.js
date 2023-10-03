var cart = {
  name: 'Ali',
  surname: 'Drg',
  email: 'aldrg@aya.com',
  products: [
    {
      category: 'PC and  Laptpop',
      name: 'Mouse',
      price: 200,
      quantity: 2,
      weight: 180,
    },
    {
      category: 'PC and  Laptpop',
      name: 'Keyboartd Mat',
      price: 119,
      quantity: 1,
      weight: 90,
    },
    {
      category: 'Mobile',
      name: 'USB Multicharger',
      price: 150,
      quantity: 3,
      weight: 15,
    },
    {
      category: 'PC and  Laptpop',
      name: 'Keyboard',
      price: 480,
      quantity: 1,
      weight: 280,
    },
    {
      category: 'Mobile',
      name: 'Phone dock',
      price: 200,
      quantity: 2,
      weight: 350,
    },
    {
      category: 'Home',
      name: 'Picture Frame',
      price: 800,
      quantity: 1,
      weight: 150,
    },
  ],
};

console.warn(
  `Afiseaza in consola propozitia: “name surname are x tipuri de produse in cart.”`,
);
var prodNum = 0;
cart.products.forEach(function (product) {
  prodNum += 1;
});
console.log(
  `${cart.name} ${cart.surname} are ${prodNum} tipuri de produse in cart.`,
);

console.warn(
  `Afiseaza propozitia: “name are urmatoarele produse in cart: a, b, c, d, e si f.`,
);
let message1 = cart.name + ' are urmatoarele produse in cart: ';
cart.products.forEach(function (product, index) {
  let punctuation = ', ';
  if (index === cart.products.length - 1) {
    punctuation = '.';
  }
  if (index === cart.products.length - 2) {
    punctuation = ' si ';
  }
  message1 += `${product.name}${punctuation}`;
});
console.log(message1);

console.warn(
  `Afiseaza propozitia “Valoarea totala a cartului lui name este xxx.`,
);
let message2 = 'Valoarea totala a cartului lui ' + cart.name + ' este ';
let totalValueCart = 0;
cart.products.forEach(function (product) {
  let valPerArt = product.price * product.quantity;

  totalValueCart += valPerArt;
});
console.log(message2 + totalValueCart + '.');

console.warn(
  `Afiseaza propozitia “Greutatea totala a cartului lui name este xxx."`,
);
let message3 = 'Greutatea totala a cartului lui ' + cart.name + ' este ';
let totalWeightCart = 0;
cart.products.forEach(function (product) {
  let weightPerArt = product.weight * product.quantity;

  totalWeightCart += weightPerArt;
});
console.log(message3 + totalWeightCart + '.');

console.warn(`Afiseaza propozitia “Name isi cumpara un total de xxx produse.”`);
let message4 = cart.name + ' isi cumpara un total de ';
let totalProdPerArt = 0;
cart.products.forEach(function (product) {
  totalProdPerArt += product.quantity;
});
console.log(message4 + totalProdPerArt + ' produse.');

console.warn(
  `Afiseaza propozitia “Cartul contine produse din categoria Mobile in valoare totala de xxx.”`,
);
let message5 =
  'Cartul contine produse din categoria Mobile in valoare totala de ';
let valMobileProducts = 0;
cart.products.forEach(function (product) {
  if (product.category === 'Mobile') {
    valMobileProducts += product.price * product.quantity;
  }
});
console.log(message5 + valMobileProducts + '.');

console.warn(
  `Afiseaza propozitia “Greutatea totala a produselor din categoria Mobile este xxx.”`,
);
let message6 = 'Greutatea totala a produselor din categoria Mobile este ';
let weightMobileProducts = 0;
cart.products.forEach(function (product) {
  if (product.category === 'Mobile') {
    weightMobileProducts += product.weight * product.quantity;
  }
});
console.log(message6 + weightMobileProducts + '.');

console.warn(
  `Afiseaza propozitia “Totalul pretului per produs din cart este xxx.”`,
);
let message7 = 'Totalul pretului per produs din cart este ';
let valPriceProducts = 0;
cart.products.forEach(function (product) {
  valPriceProducts += product.price;
});
console.log(message7 + valPriceProducts + '.');

console.warn(
  `Defineste o variabila numita maximumBudget de tip number cu o valoare arbitrara pozitiva.`,
);
console.warn(
  `Afiseaza propozitia: “Nume prenume isi permite | nu isi permite cartul.” In functie de buget.`,
);
let maximumBudget = 2500;
let message8 = `${cart.name} ${cart.surname}`;
// let totalValueCart = 0; e definita sus si sta in global scope
// cart.products.forEach(function (product) {
//   let valPerArt = product.price * product.quantity;
//   totalValueCart += valPerArt;
// });
// pentru Alexandra: nu mai e nevoie pentru ca ai calculat-o sus
if (totalValueCart <= maximumBudget) {
  console.log(message8 + ' isi permite cartul.');
} else {
  console.log(message8 + ' nu isi permite cartul.');
}

console.warn(
  `Defineste o variabila numita maximumWeight de tip number cu o valoare arbitrara pozitiva.`,
);
console.warn(
  `Afiseaza propozitia “Firma de curierat poate | nu poate livra comanda.” In functie de greutatea totala a produselor din cart.`,
);
let maximumWeight = 2000;
let message9 = 'Firma de curierat ';
// let totalWeightCart = 0; e definita sus si sta in global scope
// cart.products.forEach(function (product) {
//   let weightPerArt = product.weight * product.quantity;
//   totalWeightCart += weightPerArt;
// });
// pentru Alexandra: nu mai e nevoie pentru ca ai calculat-o sus
console.log(totalWeightCart);
if (totalWeightCart <= maximumWeight) {
  console.log(message9 + 'poate livra comanda.');
} else {
  console.log(message9 + 'nu poate livra comanda.');
}
