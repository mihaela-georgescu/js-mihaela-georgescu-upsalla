var userInput = prompt('Introdu un numar');
var number = Number(userInput);
var errorMesaage = 'Nu ai introdus un numar';
var paragraphElement = document.getElementById(`message`);

if (userInput === null || userInput.trim() === '' || isNaN(number)) {
  console.log(errorMesaage);
} else if (number === 20) {
  //Numarul este egal cu 20
  var message = `Numarul ${number} este egal cu 20`;
  console.log(message);
  paragraphElement.innerText = message;
} else if (number >= 20) {
  //Numarul este mai mare decat 20
  var message = `Numarul ${number} este mai mare decat 20`;
  console.log(message);
  paragraphElement.innerText = message;
} else {
  //Numarul este mai mic decat 20
  var message = `Numarul ${number} este mai mic decat 20`;
  console.log(message);
  paragraphElement.innerText = message;
}
