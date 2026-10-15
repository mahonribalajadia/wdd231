document.addEventListener('DOMContentLoaded', function() {
  // FOR MOBILE MENU
  const menuButton = document.querySelector('#menu');
  const navigation = document.querySelector('nav');
  const body = document.body;

  if (menuButton) {
    menuButton.addEventListener('click', function() {
      navigation.classList.toggle('open');
      menuButton.classList.toggle('open');
      body.classList.toggle('no-scroll');
    });
  }
});


// POPULATE NAME FROM URL
document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get('fname') || 'Traveler';

    const nameElement = document.getElementById('f-name');
    if (nameElement) {
      nameElement.textContent = name;
    }
});
