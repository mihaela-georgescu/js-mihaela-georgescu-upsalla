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
Object.keys(person.pets).forEach(function (petKeyName) {
  var pet = person.pets[petKeyName];
  console.log(pet.name);
});

console.warn(`
Folosind o bucla for afiseaza suma anilor animalelor.
`);
var sum = 0;
Object.keys(person.pets).forEach(function (petKeyName) {
  var pet = person.pets[petKeyName];
  sum += pet.age;
});
console.log(sum);

console.warn(`
Folosind forEach(), afiseaza cate una pe linie propozitiile: “Twix este papagal si are 4 ani. Mars este caine si are… etc”.
`);
var message = '';
Object.keys(person.pets).forEach(function (petKeyName) {
  var pet = person.pets[petKeyName];
  message = `${pet.name} este ${pet.species} si are ${pet.age} ani.`;
  console.log(message);
});

console.warn(`
Folosind o bucla for, afiseaza cate una pe linie propozitiile: “Intre Dragos si Twix este o diferenta de xx ani.
Intre Dragos si Mars… ” (repeta pentru toate intrarile din array).
`);

for (let i = 0; i < person.pets.length; i++) {
  let ageDiff = Math.abs(2024 - person.birthYear - person.pets[i].age);
  console.log(
    `Intre ${person.firstName} si ${person.pets[i].name} este o diferenta de ${ageDiff} ani.`,
  );
}

console.warn(`
Folosind o bucla for, afiseaza in ordine inversa numele animalelor din array sub forma de propozitii: “Animalul meu se numeste xxxx.”.
`);
for (i = person.pets.length - 1; i >= 0; i--) {
  console.log(`Animalul meu se numeste ${person.pets[i].name}.`);
}

console.warn(`
Folosind o bucla for, afla care este cel mai in varsta animal si afiseaza propozitia: “xxx este cel mai batran animal pe care il am,
dar intre noi este o diferenta de xx ani.” Salveaza primul pet intr-o variabila numita oldestPet si porneste bucla, daca varsta
animalului curent din bucla este mai mare decat oldestPet.age, atunci oldestPet devine animalul curent.
`);
let oldestPet = person.pets[0];

for (let i = 0; i < person.pets.length; i++) {
  if (person.pets[i].age > oldestPet.age) {
    oldestPet = person.pets[i];
  }
}

let ageDiff = Math.abs(2024 - person.birthYear - oldestPet.age);

console.log(
  `${oldestPet.name} este cel mai batran animal pe care il am, dar intre noi este o diferenta de ${ageDiff} ani.`,
);

console.warn(`
Folosind o bucla forEach, afiseaza propozitia: “Am papagal, caine, hamster si pisica.”.
`);
var message = `Am `;
var punctuation = ', ';
Object.keys(person.pets).forEach(function (petKeyName, index, petKeyNames) {
  var pet = person.pets[petKeyName];

  // next to last iteration
  if (petKeyNames.length - 2 === index) {
    punctuation = ' si ';
  }

  // last iteration
  if (petKeyNames.length - 1 === index) {
    punctuation = '.';
  }

  message += `${pet.species}${punctuation}`;
});
console.log(message);
