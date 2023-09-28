var cart = {
  name: 'Andy',
  surname: 'Anderson',
  email: 'andyanderson@gmail.com',
  products: [
    {
      category: 'PC and Laptop',
      name: 'Mouse',
      price: 200,
      quantity: 2,
      weight: 180,
    },
    {
      category: 'PC and Laptop',
      name: 'Keyboard Mat',
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
      category: 'PC and Laptop',
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

console.warn(`
Afiseaza in consola propozitia: “name surname are x tipuri de produse in cart.”
`);
let firstName = cart.name;
let lastName = cart.surname;
const numberOfProducts = cart.products.length;

console.log(
  `${firstName} ${lastName} are ${numberOfProducts} tipuri de produse in cart.`,
);

console.warn(`
Afiseaza propozitia: “name are urmatoarele produse in cart: a, b, c, d, e si f.”
`);

let message = `${firstName} are urmatoarele produse in cart: `;
let punctuation = `, `;

for (let i = 0; i < numberOfProducts; i++) {
  // next to last iteration
  if (numberOfProducts - 2 === i) {
    punctuation = ` si `;
  }
  // last iteration
  if (numberOfProducts - 1 === i) {
    punctuation = `.`;
  }

  let productName = cart.products[i].name;

  message += `${productName}${punctuation}`;
}

console.log(message);

console.warn(`
Afiseaza propozitia “Valoarea totala a cartului lui name este xxx.”
`);
let totalCartValue = 0;
for (let i = 0; i < numberOfProducts; i++) {
  let productValue = cart.products[i].price * cart.products[i].quantity;
  totalCartValue += productValue;
}
console.log(
  `Valoarea totala a cartului lui ${firstName} este ${totalCartValue}.`,
);

console.warn(`
Afiseaza propozitia “Greutatea totala a cartului lui name este xxx.”
`);
let totalCartWeight = 0;
for (let i = 0; i < numberOfProducts; i++) {
  let productWeight = cart.products[i].weight * cart.products[i].quantity;
  totalCartWeight += productWeight;
}
console.log(
  `Greutatea totala a cartului lui ${firstName} este ${totalCartWeight}.`,
);

console.warn(`
Afiseaza propozitia “Name isi cumpara un total de xxx produse.”
`);
let totalQty = 0;
for (let i = 0; i < numberOfProducts; i++) {
  totalQty += cart.products[i].quantity;
}
console.log(`${firstName} isi cumpara un total de ${totalQty} produse.`);

console.warn(`
Afiseaza propozitia “Cartul contine produse din categoria Mobile in valoare totala de xxx.”
`);
let totalMobileValue = 0;

for (let i = 0; i < numberOfProducts; i++) {
  if (cart.products[i].category.toLowerCase() === 'mobile') {
    mobileValue = cart.products[i].price * cart.products[i].quantity;
    totalMobileValue += mobileValue;
  }
}

console.log(
  `Cartul contine produse din categoria Mobile in valoare totala de ${totalMobileValue}.`,
);

console.warn(`
Afiseaza propozitia “Greutatea totala a produselor din categoria Mobile este xxx.”
`);

let totalMobileWeight = 0;

for (let i = 0; i < numberOfProducts; i++) {
  if (cart.products[i].category.toLowerCase() === 'mobile') {
    totalMobileWeight += cart.products[i].weight * cart.products[i].quantity;
  }
}

console.log(
  `Greutatea totala a produselor din categoria Mobile este ${totalMobileWeight}.`,
);

console.warn(`
Afiseaza propozitia “Totalul pretului per produs din cart este xxx.”
`);
let totalPriceperProduct = 0;

for (let i = 0; i < numberOfProducts; i++) {
  totalPriceperProduct += cart.products[i].price;
}

console.log(
  `Totalul pretului per produs din cart este ${totalPriceperProduct}.`,
);

console.warn(`
Defineste o variabila numita maximumBudget de tip number cu o valoare arbitrara pozitiva.
`);
let maximumBudget = Number(10000);

console.warn(`
Afiseaza propozitia: “Nume prenume isi permite | nu isi permite cartul.” In functie de
`);
if (totalCartValue > maximumBudget) {
  console.log(`${firstName} ${lastName} nu isi permite cartul.`);
} else {
  console.log(`${firstName} ${lastName} isi permite cartul.`);
}

console.warn(`
Defineste o variabila numita maximumWeight de tip number cu o valoare arbitrara pozitiva.
`);
let maximumWeight = Number(20);

console.warn(`
Afiseaza propozitia “Firma de curierat poate | nu poate livra comanda.” In functie de greutatea totala a produselor din cart.
`);
if (totalCartWeight > maximumWeight) {
  console.log('Firma de curierat nu poate livra comanda.');
} else {
  console.log('Firma de curierat poate livra comanda.');
}
