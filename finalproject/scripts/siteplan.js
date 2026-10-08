const currentyear = document.querySelector("#currentyear");

const today = new Date();

currentyear.innerHTML = `&copy; <span id="currentyear">${today.getFullYear()}</span>`;

document.getElementById("lastModified").innerHTML = document.lastModified;