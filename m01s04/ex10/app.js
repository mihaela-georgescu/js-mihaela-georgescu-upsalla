var person = {
  name: 'Andy',
  surname: 'Anderson',
  age: 35,
  petOwner: false,
  skills: [
    'html',
    'javascript',
    'css',
    'java',
    'c++',
    'node',
    'jquery',
    'node.js',
  ],
  friends: [
    {
      name: 'Larry',
      surname: 'Larryson',
      age: 30,
    },
    {
      name: 'Steven',
      surname: 'Stevenson',
      age: 31,
    },
    {
      name: 'Carol',
      surname: 'Carolson',
      age: 29,
    },
  ],
};

console.warn(`
Folosind obiectul person si forEach, afiseaza skillurile din
pozitiile impare ale arrayului in propozitii de forma "Tehnologia
xxx se afla pe pozitia iii, impara, a arrayului."
`);
person.skills.forEach(function (skill, index) {
  if (index % 2 !== 0) {
    console.log(
      'Tehnologia ' +
        skill +
        ' se afla pe pozitia ' +
        index +
        ', impara, a arrayului.',
    );
  }
});

console.warn(`
 In mod similar, afiseaza skillurile care contin litera a in
 propozitii de forma "Tehnologia xxx contine caracterul "a". "
`);
person.skills.forEach(function (skill) {
  if (skill.includes('a')) {
    console.log('Tehnologia ' + skill + ' contine litera "a".');
  }
});

console.warn(`
 Folosind forEach, afiseaza propozitia: "Prietenii mei se numesc
 xxx yyy, xxx yyy, xxx yyy."
`);
var message = 'Prietenii mei se numesc ';
person.friends.forEach(function (friend, index, friends) {
  var punctuation = ', ';

  if (friends.length - 1 === index) {
    punctuation = '.';
  }
  message += friend.name + ' ' + friend.surname + punctuation;
});
console.log(message);

console.warn(`
 Folosind forEach, afiseaza numarul total de ani pe care il au
 persoanele din arrayul friends, doar daca au varsta mai mare
 decat 30 inclusiv folosind o propozitie de felul:  "Varstele
 insumate sunt: xxx."
`);

console.warn(`
 Folosind forEach, afiseaza suma anilor de nastere a persoanelor
 care au varsta impara.
`);

console.warn(`
 Afiseaza diferenta de varsta dintre persoana si prietenii din
 arrayul friends, daca aceasta este mai mare sau egala cu 2 ani
 folosind propozitii de forma:  "Diferenta pentru ${name}:
 xxx ani."
`);

console.warn(`
 Afiseaza fraza: "Intre Dragos si Larry este o diferenta de xx
 ani. Intre Dragos si Steven... "
`);

console.warn(`
 Folosind metoda reverse si apoi forEach, afiseaza in ordine
 inversa elementele arrayului skills.
`);
