const navMenu = document.querySelector("#nav-menu")
const navOpen = document.querySelector("#menu-open");
const navClose = document.querySelector("#menu-close")
const navigation = document.querySelector("nav");

navMenu.addEventListener("click", () => {
    navigation.classList.toggle("open");
    navOpen.classList.toggle("hide");
    navClose.classList.toggle("show");
});
