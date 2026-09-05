// Store the Navigation Button
const navbutton = document.querySelector('#nav-btn');
const navigation = document.querySelector("nav");

// Toggle the show class off and on
navbutton.addEventListener('click', () => {
    navbutton.classList.toggle('show');
    navigation.classList.toggle("open");
});