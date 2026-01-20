const gridbutton = document.querySelector("#grid-btn");
const listbutton = document.querySelector("#list-btn");
const display = document.querySelector("#cards");


gridbutton.addEventListener("click", () => {
    event.preventDefault();
    display.classList.add("grid");
    display.classList.remove("list");
    listbutton.classList.remove("active-btn");
    gridbutton.classList.add("active-btn");
});

listbutton.addEventListener("click", () => {
    event.preventDefault();
    display.classList.add("list");
    display.classList.remove("grid");
    gridbutton.classList.remove("active-btn");
    listbutton.classList.add("active-btn");
});
