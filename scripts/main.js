// For footer
const currentyear = document.querySelector("#currentyear");
const today = new Date();

currentyear.innerHTML = `&copy; <span id="currentyear">${today.getFullYear()}</span>`;
document.getElementById("lastModified").innerHTML = document.lastModified;

// For mobile nav
const navMenu = document.querySelector("#nav-menu")
const navOpen = document.querySelector("#menu-open");
const navClose = document.querySelector("#menu-close")
const navigation = document.querySelector("nav");

navMenu.addEventListener("click", () => {
    navigation.classList.toggle("open");
    navOpen.classList.toggle("hide");
    navClose.classList.toggle("show");
});

