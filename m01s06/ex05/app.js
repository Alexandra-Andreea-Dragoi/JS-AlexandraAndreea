(function () {
  document.addEventListener('DOMContentLoaded', function () {
    const showButton = document.querySelector('#showButton');
    const toggleEventButton = document.querySelector('#toggleEventButton');
    let eventBound = true;

    function showAlert() {
      alert('butonul a fost apasat');
    }

    showButton.addEventListener('click', showAlert);
    showMessage('Alerta va afisata');

    toggleEventButton.addEventListener('click', function () {
      if (eventBound === true) {
        // scoate event
        showButton.removeEventListener('click', showAlert);
        this.innerText = 'Porneste afisarea';
        showMessage('Alerta NU va fi afisata');
        eventBound = false;
      } else {
        // adauga event
        showButton.addEventListener('click', showAlert);
        this.innerText = 'Opreste afisare';
        showMessage('Alerta va fi afisata');
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

    removeButtons.addEventListener('click', function () {
      const userConfirmed = confirm(
        'Esti sigur ca vrei sa stergi butoanele din DOM?',
      );
      if (userConfirmed) {
        showButton.remove();
        toggleEventButton.remove();
        showMessage('Ai sters butoanele din DOM');
      }
    });
  });
})();
