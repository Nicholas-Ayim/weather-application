

let degrees = document.querySelector(".degrees");
let degree = document.querySelector(".degree");
let measurement = document.querySelector(".measurement");
let temperature = document.querySelector(".temperature");
let measurementState = document.querySelector(".measurement_state");
let search = document.querySelector(".search");
let searchBtn = document.querySelector(".searchBtn");
let weatherCondition = document.querySelector(".weather_conditon");
let weatherContainer = document.querySelector(".weather_container");


const apikey = "90e672bb49874032e939f06e20d37ee5";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";


async function checkWeather(city){
    const response = await fetch(apiUrl + city +`&appid=${apikey}`);
    var data = await response.json();
    console.log(data);
    if(data.weather[0].main = 'clouds'){
    document.querySelector(".weather_container").style.backgroundImage = 'url("cloudBack2.webp")';
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".weather_condition").src = "sunny.jpeg";
    degrees.innerHTML = Math.round(data.wind.deg) + " °C";
    degree.innerHTML = Math.round(data.wind.deg) + " °C";
    measurement.innerHTML = data.wind.speed + " km/h";
    temperature.innerHTML = data.weather[0].main;
    measurementState.innerHTML = data.weather[0].main;
    }
    else if(data.weather[0].main = 'rain'){
        document.querySelector(".weather_container").style.backgroundImage = 'url("rainBack3.jpg")';
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".weather_condition").src = "rain.png";
        degrees.innerHTML = Math.round(data.wind.deg) + " °C";
        degree.innerHTML = Math.round(data.wind.deg) + " °C";
        measurement.innerHTML = data.wind.speed + " km/h";
        temperature.innerHTML = data.weather[0].main;
        measurementState.innerHTML = data.weather[0].main;
    }else if(data.weather[0].main = 'sunny'){
        document.querySelector(".weather_container").style.backgroundImage = 'url("sunnyBack.jpg")';
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".weather_condition").src = "sunny.jpeg";
        degrees.innerHTML = Math.round(data.wind.deg) + " °C";
        degree.innerHTML = Math.round(data.wind.deg) + " °C";
        measurement.innerHTML = data.wind.speed + " km/h";
        temperature.innerHTML = data.weather[0].main;
        measurementState.innerHTML = data.weather[0].main;
    }
    else if(data.weather[0].main = 'night'){
        document.querySelector(".weather_container").style.backgroundImage = 'url("dawnBack.jpg")';
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".weather_condition").src = "night.webp";
        degrees.innerHTML = Math.round(data.wind.deg) + " °C";
        degree.innerHTML = Math.round(data.wind.deg) + " °C";
        measurement.innerHTML = data.wind.speed + " km/h";
        temperature.innerHTML = data.weather[0].main;
        measurementState.innerHTML = data.weather[0].main;
    }
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(search.value);

});
