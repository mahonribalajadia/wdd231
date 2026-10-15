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
