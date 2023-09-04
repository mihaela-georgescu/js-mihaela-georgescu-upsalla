var inputRadius = document.getElementById('radius');
var elementResult = document.getElementById('result');
const pi = 3.141592653589793238462643383279502884197;
var form = document.querySelector('form');

form.addEventListener(
  'submit',
  function (event) {
    event.preventDefault();

    var radius = inputRadius.value || 0;
    var result = 0;

    result = 4 * pi * Math.pow(radius, 2);

    elementResult.innerText = result;
  },
  false,
);
