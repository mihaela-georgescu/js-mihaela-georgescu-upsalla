let person1 = {
  name: 'Larry',
  surname: 'Larryson',
};

let person2 = {
  name: 'Ben',
  surname: 'Benson',
};

let age1 = {
  age: 20,
};

const fullPerson1 = {
  ...person1,
  ...age1,
};
console.log(fullPerson1);

const fullPerson2 = {
  ...person2,
  age: 29,
};
console.log(fullPerson2);

const fullPerson3 = {
  ...fullPerson2,
  name: 'Carl',
  age: 24,
};
console.log(fullPerson3);
