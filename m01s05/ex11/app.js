const pet = {
  getName: function () {
    return 'Tucker';
  },

  getSpecies: function () {
    return 'dog';
  },

  getAge: function () {
    return 5;
  },
};

function accesor(methodSuffix) {
  const methodName = `get${methodSuffix}`;

  return pet[methodName]();
}

console.warn(`
  Creeaza o functie overloaded pentru calcularea suprafetelor numita calculateSurface. Daca primeste un parametru,
  sa calculeze suprafata unui patrat. Daca primeste doi, a unui dreptunghi. Daca primeste trei, sa calculeze suprafata
  totala a paralelipipedului. Foloseste structura switch.
`);

function calculateSurface(width, length, height) {
  switch (arguments.length) {
    case 1:
      return width ** 2;
      break;
    case 2:
      return width * length;
      breakl;
    case 3:
      return 2 * (width * length + width * height + length * height);
      break;
  }
}

console.warn(`
Creeaza o functie numita calculateCircleArea() si afiseaza suprafata unor cercuri cu raza de 2, 20 si 16.
`);

function calculateCircleArea(radius) {
  return Math.PI * Math.pow(radius, 2);
}

console.log(calculateCircleArea(2));

console.log(calculateCircleArea(20));

console.log(calculateCircleArea(16));

console.warn(`
  Creeaza un obiect numit pet cu urmatoarele metode: getName, getSpecies si getAge.
  Folosind metodele obiectului pet afiseaza propozitia: “nnnn este ssss si are aaaa ani.”
`);

console.log(
  `${accesor('Name')} este ${accesor('Species')} si are ${accesor('Age')} ani.`,
);

console.warn(`
  Folosind metoda getAge calculeaza si salveaza intr-o variabila numita petAge varsta animalului si afiseaza propozitia:
  “Animalul meu are petAge ani”
`);
const petAge = accesor('Age');
console.log(`Animalul meu are ${petAge} ani.`);
