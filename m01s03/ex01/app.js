var object = {
  name: 'Michael',
  surname: 'Scott',
  age: 40,
  petOwner: false,
  carOwner: true,
};

console.warn(`Ma numesc xxx yyy si am xx ani.`);
console.log(
  'Ma numesc ' +
    object.name +
    ' ' +
    object.surname +
    ' ' +
    'si am ' +
    object.age +
    ' ' +
    'ani.',
);

console.warn(`
  Afiseaza anul in care te-ai nascut scazand varsta pe care ai trecut-o in obiect din anul curent
  (un proces numit hardcodare).
`);
console.log((2023 - object.age).toString());

console.warn(`
  Afiseaza fraza “xxx yyy are xx ani.” in consola folosind operatorul de concatenare.
`);
console.log(
  object.name + ' ' + object.surname + ' are ' + object.age + ' ani.',
);

console.warn(`
  Afiseaza fraza “xxx s-a nascut in aaaa.” Foloseste tot anul curent pentru a scadea varsta.
`);
console.log(
  object.name + ' s-a nascut in ' + (2023 - object.age).toString() + '.',
);
