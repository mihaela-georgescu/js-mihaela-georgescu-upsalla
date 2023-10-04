const button = document.getElementById('clicker');
const removeButton = document.getElementById('removeEvent');
const queryButton = document.getElementById('query');
const message = document.getElementById('message');

function clickHandler() {
  alert('Ai apasat butonul');
}

button.addEventListener('click', clickHandler);

removeButton.addEventListener('click', function () {
  button.removeEventListener('click', clickHandler);
});

function ageQuery() {
  const userAge = prompt('Care este varsta ta?');
  const textToShow = `Ai ${userAge} ani.`;

  console.log(textToShow);
  message.innerText = textToShow;
}

queryButton.addEventListener('click', ageQuery);
