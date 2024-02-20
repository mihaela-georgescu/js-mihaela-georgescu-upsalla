const button = document.querySelector('.btn');
const breakpoint = 650;

document.addEventListener('DOMContentLoaded', function () {
  const currentWidth = window.innerWidth;

  if (currentWidth >= breakpoint) {
    button.addEventListener('click', onClick);
  }
});

// function functions are hoisted
function onClick() {
  alert('butonul a fost apsat');
}

button.addEventListener('click', onClick);

// debounce or not debounce
window.addEventListener('resize', function () {
  const currentWidth = window.innerWidth;

  if (currentWidth < breakpoint) {
    button.removeEventListener('click', onClick);
  } else {
    button.addEventListener('click', onClick);
  }
});
