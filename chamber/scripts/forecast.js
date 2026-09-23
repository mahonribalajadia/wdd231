// // select HTML elements in the document
// const currentTemp = document.querySelector('#current-temp');
// const weatherIcon = document.querySelector('#weather-icon');
// const captionDesc = document.querySelector('#weather-desc');
const forecastContainer = document.querySelector('#forecast-days')

const forecastKey = "0afb5e3dd3df43c14b0ff72f079f9c99"
const forecastLat = "15.81"
const forecastLon = "120.46"

const forecastUrl = `//api.openweathermap.org/data/2.5/forecast?lat=${forecastLat}&lon=${forecastLon}&appid=${forecastKey}&units=metric`


async function apiFetch() {
    try {
        const response = await fetch(forecastUrl);
        if (response.ok) {
            const data = await response.json();
            console.log(data); // testing only
            displayForecast(data); // uncomment when ready
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();

function displayForecast(data) {
    const filteredData = data.list.filter(forecast => forecast.dt_txt.includes("12:00:00")).slice(1, 4);
    console.log(filteredData)
    filteredData.forEach(day => {
        let forecastDate = day.dt_txt;
        let newForecastDate = new Date(forecastDate);
        let forecastDayName = newForecastDate.toLocaleDateString('en-US', { weekday: 'long' });

        let forecastTemp = day.main.temp;

        let forecastDay = document.createElement("p");

        forecastDay.innerHTML = `${forecastDayName}: <span>${forecastTemp}&deg;C</span>`;

        forecastContainer.appendChild(forecastDay);
    });
}


