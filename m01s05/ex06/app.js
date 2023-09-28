const person = {
  getName: function () {
    return 'Nylon Windbreaker';
  },

  getAge: function () {
    return 32;
  },
};

function accessor(methodSuffix) {
  const methodName = `get${methodSuffix}`;

  return person[methodName]();
}

console.warn(`
  Folosind accesorul, salveaza numele mic al persoanei intr-o variabila si foloseste-l in propozitia: “Eu sunt xxx.”
`);
console.log(`Eu sunt ${accessor('Name')}.`);

console.warn(`
  Afiseaza anul de nastere a persoanei folosind anul curent.
`);
const currentYear = new Date().getFullYear();
console.log((currentYear - accessor('Age')).toString());

console.warn(
  `Afiseaza propozitia “Ma numesc xxx yyy, am aa ani si m-am nascut in anul aaaa.”`,
);
const birthYear = (currentYear - accessor('Age')).toString();
console.log(
  `Ma numesc ${accessor('Name')}, am ${accessor(
    'Age',
  )} ani si m-am nascut in anul ${birthYear}.`,
);

console.warn(`
Folosind accesorul afiseaza numele persoanei.
`);
console.log(accessor('Name'));

console.warn(`
Afiseaza varsta persoanei.
`);
console.log(accessor('Age'));

console.warn(`
Afiseaza anul de nastere al persoanei folosind anul curent. Intr-o propozitie de forma “M-am nascut in 1987.”
`);
console.log(`M-am nascut in ${currentYear - accessor('Age')}.`);

console.warn(`
Afiseaza propozitia “Ma numesc xxx yyy si am aa ani!”
`);
console.log(`Ma numesc ${accessor('Name')} si am ${accessor('Age')} ani!`);
