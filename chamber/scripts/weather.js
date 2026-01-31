// select HTML elements in the document
const weatherSec = document.querySelector('.weather-sec');

const weatherKey = "0afb5e3dd3df43c14b0ff72f079f9c99"
const weatherLat = "15.81"
const weatherLon = "120.46"

const weatherUrl = `//api.openweathermap.org/data/2.5/weather?lat=${weatherLat}&lon=${weatherLon}&appid=${weatherKey}&units=metric`

async function apiFetch() {
    try {
        const response = await fetch(weatherUrl);
        if (response.ok) {
            const data = await response.json();
            console.log(data); // testing only
            displayResults(data); // uncomment when ready
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();

function displayResults(data) {
    let card = document.createElement("div");
    let weatherIcon = document.createElement("img");
    let textContainer = document.createElement("div");
    let currentTemp = document.createElement("p");
    let captionDesc = document.createElement("p");

    currentTemp.innerHTML = `${data.main.temp}&deg;C`;
    currentTemp.setAttribute('id', 'current-temp');
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    weatherIcon.setAttribute('id', 'weather-icon');
    captionDesc.textContent = `${desc}`;
    captionDesc.setAttribute('id', 'weather-desc');

    card.appendChild(weatherIcon);
    card.appendChild(textContainer);
    textContainer.appendChild(currentTemp);
    textContainer.appendChild(captionDesc);

    weatherSec.appendChild(card);
}