document.addEventListener('DOMContentLoaded', function () {
  // FOR MOBILE MENU
  const menuButton = document.querySelector('#menu');
  const navigation = document.querySelector('nav');
  const body = document.body;

  if (menuButton) {
    menuButton.addEventListener('click', function () {
      navigation.classList.toggle('open');
      menuButton.classList.toggle('open');
      body.classList.toggle('no-scroll');
    });
  }
});


// POPULATE NAME FROM URL
document.addEventListener('DOMContentLoaded', function () {
  const urlParams = new URLSearchParams(window.location.search);
  const firstName = urlParams.get('fname') || 'Traveler';
  const lastName = urlParams.get('lname');
  const email = urlParams.get('email');
  const message = urlParams.get('message');

  const nameElement = document.getElementById('f-name')
  const fNameElement = document.getElementById('first-name');
  const lNameElement = document.getElementById('last-name');
  const emailElement = document.getElementById('email');
  const messageElement = document.getElementById('message');


  if (nameElement) {
    nameElement.textContent = firstName;
  }
  if (fNameElement) {
    fNameElement.textContent = firstName;
  }
  if (lNameElement) {
    lNameElement.textContent = lastName;
  }
  if (emailElement) {
    emailElement.textContent = email;
  }
  if (messageElement) {
    messageElement.textContent = message;
  }
});
