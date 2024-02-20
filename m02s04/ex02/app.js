const controls = document.querySelector('.controls');
const colorInput = controls.querySelector('.color-input');
const resetButton = controls.querySelector('.reset-button');
const radioBoxes = document.querySelectorAll('.box');

// event delegation
controls.addEventListener('click', function (event) {
  // event.target = elementul de pe care a plecat clickul
  const target = event.target;

  if (
    target.nodeName !== 'BUTTON' ||
    !target.dataset.color ||
    target.dataset.color.trim().length <= 0
  ) {
    return;
  }

  const button = target;
  const color = button.dataset.color;
  const checkedRadioBox = document.querySelector('input[type="radio"]:checked');
  const checkedBox = checkedRadioBox.parentElement;
  checkedBox.style.backgroundColor = color;
});

colorInput.addEventListener('change', function (event) {
  // dom traversal
  const input = event.currentTarget;
  const button = input.previousElementSibling;
  const value = input.value;

  const hexColorRegex = /^#?([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/;

  // Check if the string matches the regex pattern
  if (hexColorRegex.test(value)) {
    button.dataset.color = value;
    button.style.backgroundColor = value;
  }
});

resetButton.addEventListener('click', function () {
  const checkedRadioBox = document.querySelector('input[type="radio"]:checked');
  const checkedBox = checkedRadioBox.parentElement;
  checkedBox.removeAttribute('style');
});
