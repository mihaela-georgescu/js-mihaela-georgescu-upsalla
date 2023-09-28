console.warn(`
Folosind fisierele de la exercitiul 06 si doua bucle for imbricate (nested), afiseaza diferenta de varsta dintre fiecare membru al arrayului
friends si ceilalti membri. Poti folosi metoda pentru a converti numerele negative in pozitive.

Exemplu:
Intre Larry si Steven este o diferenta de x ani.
Intre Larry si Carol este o diferenta de x ani.
Intre Steven si Larry este o diferenta de y ani.
Intre Steven si Carol este o diferenta de z ani.
Intre carol si larry
Intre carol si steven
`);

var person = {
  name: 'Andy',
  surname: 'Anderson',
  age: 35,
  petOwner: true,
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

for (let i = 0; i < person.friends.length; i++) {
  var friendOne = person.friends[i];

  for (let j = 0; j < person.friends.length; j++) {
    if (i !== j) {
      let friendTwo = person.friends[j];
      let ageDiff = Math.abs(friendOne.age - friendTwo.age);
      console.log(
        `Intre ${friendOne.name} si ${friendTwo.name} este o diferenta de ${ageDiff} ani.`,
      );
    }
  }
}
