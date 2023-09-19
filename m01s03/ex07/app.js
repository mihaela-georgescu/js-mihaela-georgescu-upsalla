console.warn(`
  Creeaza un obiect numit person
  Obiectul sa contina urmatoarele proprietati: firstName, lastName, email, birthYear, pets, zipCode.
  Proprietatea pets sa contina un array de obiecte cu trei pozitii.
  Obiectele din pets sa contina urmatoarele proprietati: name, species, age.
`);
var person = {
  firstName: 'Steven',
  lastName: 'Stevenson',
  email: 'steven.stevenson@gmail.com',
  birthYear: 1994,
  zipCode: '12345',
  pets: [
    {
      name: 'Tucker',
      species: 'caine',
      age: 6,
    },
    {
      name: 'Nimbus',
      species: 'pisica',
      age: 4,
    },
    {
      name: 'Ruby',
      species: 'caine',
      age: 5,
    },
  ],
};

console.warn(`
  Afiseaza propozitia: “Numele meu este: xxx yyy si am x animale.”. Nu uita de proprietatea
  length a arrayului pets.
`);
console.log(
  'Numele meu este: ' +
    person.firstName +
    ' ' +
    person.lastName +
    ' si am ' +
    person.pets.length +
    ' animale.',
);

console.warn(`Afiseaza propozitia: “Am acelasi email din copilarie: xxx.”.`);
console.log('Am acelasi email din copilarie: ' + person.email + '.');

console.warn(
  `Afiseaza propozitia: “Unul din cele x animale ale mele este species si are age ani.”`,
);
console.log(
  'Unul din cele ' +
    person.pets.length +
    ' animale ale mele este ' +
    person.pets[1].species +
    ' si are ' +
    person.pets[1].age +
    ' ani.',
);

console.warn(`
  Calculeaza si afiseaza (folosind anul curent), anul de nastere al animalului de pe indexul 2.
`);
console.log((2023 - person.pets[2].age).toString());

console.warn(`
  Calculeaza si salveaza in variabila difference diferenta de ani dintre persoana si animalul
  de pe pozitia 0 si afiseaza aceasta diferenta. Foloseste anul curent.
`);
var difference = 2023 - person.birthYear - person.pets[0].age;
console.log(difference.toString());

console.warn(
  `Salveaza numele animalului de pe indexul 0 intr-o variabila numita petName.`,
);
var petName = person.pets[0].name;

console.warn(
  `Afiseaza propozitia: “Intre firstName si petName este o diferenta de difference ani.”.`,
);
console.log(
  'Intre ' +
    person.firstName +
    ' si ' +
    petName +
    ' este o diferenta de ' +
    difference +
    ' ani.',
);

var prop01Element = document.getElementById('prop01');
var petname1 = person.pets[0].name;
var petname2 = person.pets[1].name;
var petname3 = person.pets[2].name;
var textToShow01 =
  person.firstName +
  ', ' +
  petname1 +
  ', ' +
  petname2 +
  ', ' +
  petname3 +
  ' locuiesc toti in aceeasi casa';
prop01Element.textContent = textToShow01;

var prop02Element = document.getElementById('prop02');
var age1 = person.pets[0].age;
var age2 = person.pets[1].age;
var age3 = person.pets[2].age;
var textToShow02 = age1 - age3;
prop02Element.textContent = textToShow02;

var prop03Element = document.getElementById('prop03');
var textToShow03 =
  'Ma numesc ' +
  person.firstName +
  ' ' +
  person.lastName +
  ', m-am nascut in ' +
  person.birthYear +
  ' si codul meu postal este: ' +
  person.zipCode;
prop03Element.textContent = textToShow03;

var prop04Element = document.getElementById('prop04');
var textToShow04 =
  'Animalele mele s-au nascut in ' +
  (2023 - age1) +
  ', ' +
  (2023 - age2) +
  ', ' +
  ' respectiv ' +
  (2023 - age3) +
  '.';
prop04Element.textContent = textToShow04;
