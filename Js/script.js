const api = {
    key: '7395f721041dbe957e1115109b0c950a',
    baseurl:'https://api.openweathermap.org/data/2.5/',
}

function myFunction() {
    const searchBox = document.querySelector(".search-box");
    let city = document.querySelector(".city");
    city.innerHTML = "Accepted!!!";
}

const searchBox = document.querySelector(".search-box");

searchBox.addEventListener("keypress", setQuery);
function setQuery(e){
    if(e.keyCode == 13) {
        getResults(searchBox.value);
        console.log(searchBox.value);
    }
}

function  getResults(query) {
    fetch(`${api.baseurl}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((weather) => {
            return weather.json();
        })
        .then(displayResults);
}

function displayResults(weather) {
    console.log(weather);
    let city = document.querySelector(".location .city");
    city.innerHTML = `${weather.name}, ${weather.sys.country}`;

    let now = new Date();
    let data = document.querySelector('.location .data')
    data.innerHTML = dateBuilder(now);

    let temp = document.querySelector(".temp");
    temp.innerHTML = `${Math.round(weather.main.temp_min)}<span>°c</span>`;

    let weatherE1 = document.querySelector(".weather");
    weatherE1.innerHTML = weather.weather[0].main;

    let hilow = document.querySelector(".hi-low");
    hilow.innerHTML = `${Math.round(weather.main.temp_min)}°c / ${Math.round(weather.main.temp_max)}°c`;
}



function dateBuilder(s) {
    let months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "Novomber",
        "December",
    ];
    
    let months = [
        "Январь",
        "Декабрь",
        "Февраль",
        "Март",
        "Апрель",
        "Май",
        "Июнь",
        "Июль",
        "Август",
        "Сентябрь",
        "Октябрь",
        "Ноябрь",
    ];

    let days = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
    ];

    let day = days[s.getDay()];
    let date = s.getDate();
    let month = months[s.getMonth()];
    let year = s.getFullYear();

    return `${day} ${date} ${month} ${year}`;
}
