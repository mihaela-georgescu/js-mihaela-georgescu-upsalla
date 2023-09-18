var userInput = prompt('Introdu un numar');
var number = Number(userInput);
var errorMesaage = 'Nu ai introdus un numar';
var paragraphElement = document.getElementById(`message`);

if (userInput === null || userInput.trim() === '' || isNaN(number)) {
  console.log(errorMesaage);
} else if (number === 20) {
  var message = `Numarul ${number} este egal cu 20`;
  console.log(message);
  paragraphElement.innerText = message;
  //Numarul este egal cu 20
} else if (number >= 20) {
  var message = `Numarul ${number} este mai mare decat 20`;
  console.log(message);
  paragraphElement.innerText = message;
  //Numarul este mai mare decat 20
} else {
  var message = `Numarul ${number} este mai mic decat 20`;
  console.log(message);
  paragraphElement.innerText = message;
  //Numarul este mai mic decat 20
}
