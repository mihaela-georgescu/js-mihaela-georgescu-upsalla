const image = document.querySelector('.image');

const messageContainer = document.createElement('p');

function showMessage(message) {
  messageContainer.innerText = message;
}

showMessage('Imaginea se incarca...');
document.body.append(messageContainer);

image.addEventListener('load', function () {
  showMessage('Imaginea s-a incarcat');

  image.addEventListener('click', function () {
    alert(`Imaginea cu URL-ul ${this.src} s-a incarcat`);
  });
});
