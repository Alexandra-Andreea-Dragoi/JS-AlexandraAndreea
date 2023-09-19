var cart = {
  id: 'cart-id-555888',
  firstName: 'Alex',
  lastName: 'Dragoi',
  email: 'alabala@yahoo.com',
  ownerId: '05231',
  products: [
    {
      id: '0233',
      name: 'skirt',
      price: 50,
      quantity: 1,
    },
    {
      id: '0253',
      name: 'shirt',
      price: 20,
      quantity: 2,
    },
    {
      id: '0281',
      name: 'coat',
      price: 150,
      quantity: 1,
    },
  ],
};
var valCart1 = cart.products[0].price * cart.products[0].quantity;
var valCart2 = cart.products[1].price * cart.products[1].quantity;
var valCart3 = cart.products[2].price * cart.products[2].quantity;

console.log(
  `Numele meu este ${cart.firstName} ${cart.lastName} iar emailul meu este: ${cart.email}.`,
);

console.log(
  `Utilizatorul cu idul ${cart.ownerId} are ${cart.products.length} tipuri de produse in cartul cu idul ${cart.id}.`,
);

console.log(
  `Al treilea produs pe care il cumpara ${cart.firstName} este ${cart.products[2].name}.`,
);

console.log(
  `${cart.firstName} ${cart.lastName} cumpara ${
    cart.products[0].quantity +
    cart.products[1].quantity +
    cart.products[2].quantity
  } produse in total.`,
);

console.log(
  `Sunt ${cart.firstName} si cumpar produsele ${cart.products[0].name}, ${cart.products[1].name} si ${cart.products[2].name}.`,
);

console.log(
  `Valoarea totala a cartului cu idul ${cart.id} este ${
    valCart1 + valCart2 + valCart3
  }.`,
);

console.log(
  `${cart.firstName} ${cart.lastName} a cumparat produsul ${cart.products[0].name} in cantitatea ${cart.products[0].quantity} in valoare totala de ${cart.products[0].price}.`,
);
