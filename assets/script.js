// Get various html elements
var weatherEl = document.getElementById("#weatherCard");
var forecastEl = document.getElementById("#forecastCard");
var searchLogEl = document.getElementById("#searchLog");
var citySearch = document.getElementById("#citySearch");

// Save past searches to an array
var citiesSearched = [];

function citySearch(event) {
    event.preventDefault();
    var city = citySearch.value;
    getCurrentWeather(city);
    getForecastWeather(city);
    citiesSearched.unshift(city);
    citySearch.value = "";
    saveData();
    addSearchedCity(city);
    
}
function addCityEl() {


    
}
function saveData() {
    localStorage.setItem("citiesSearched", citiesSearched);
}