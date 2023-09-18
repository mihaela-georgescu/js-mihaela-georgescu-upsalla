var userInput = prompt('Introdu un numar');
var number = Number(userInput);
var errorMesaage = 'Nu s-a introdus un numar';
var paragraphElement = document.getElementById(`message`);

if (userInput === null || userInput.trim() === '' || isNaN(number)) {
  console.log(errorMesaage);
} else if (number % 2 === 0) {
  //par | even
  var message = `Numarul ${number} este par`;
  console.log(message);
  paragraphElement.innerText = message;
} else {
  //impar | odd
  var message = `Numarul ${number} este impar`;
  console.log(message);
  paragraphElement.innerText = message;
}

//pentru acest exemplu se face type coersion: se transforma stringul in numar si se imparte la 2
//isNan('') - este o functie pt a verifica daca este not a number sau altceva
//Number(' ') returneaza 0
// '      '.trim() - taie spatiile goale
//exista si .trimLeft() si .trimRight()
//daca se da cancel la prompt, se returneaza Null (care este si el obiect)
