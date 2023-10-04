(function () {
  document.addEventListener('DOMContentLoaded', function () {
    const showButton = document.querySelector('#showButton');
    const toggleEventButton = document.querySelector('#toggleEventButton');
    const removeButtons = document.getElementById('removeButtons');
    let eventBound = true;

    function showAlert() {
      alert('Butonul a fost apasat');
    }

    showButton.addEventListener('click', showAlert);
    showMessage('Alerta va fi afisata.');

    toggleEventButton.addEventListener('click', function () {
      if (eventBound === true) {
        // scoate eventul
        showButton.removeEventListener('click', showAlert);
        this.innerText = 'Porneste afisarea';
        showMessage('Alerta nu va fi afisata.');
        eventBound = false;
      } else {
        // adauga eventul
        showButton.addEventListener('click', showAlert);
        this.innerText = 'Opreste afisarea';
        showMessage('Alerta va fi afisata.');
        eventBound = true;
      }
    });

    function showMessage(message) {
      const className = 'message';
      let paragraphElement = document.querySelector('.' + className);

      if (paragraphElement === null) {
        paragraphElement = document.createElement('p');
        paragraphElement.classList.add(className);
        document.body.append(paragraphElement);
      }

      paragraphElement.innerText = message;
    }

    function removeElement() {
      if (window.confirm('Esti sigur ca vrei sa stergi butoanele din DOM?')) {
        showButton.remove();
        toggleEventButton.remove();
      }
    }

    removeButtons.addEventListener('click', removeElement);
  });
})();
