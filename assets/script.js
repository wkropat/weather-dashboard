function init() {
    // Get various html elements
    // WeatherEl shows current days weather
    const weatherEl = document.getElementById("#weatherCard");
    // ForecastEl shows 5 day forcast
    const forecastEl = document.getElementById("#forecastCard");
    // SearchLogEl has city search form
    const searchLogEl = document.getElementById("#searchLog");
    // citySearch is the button to search cities
    const searchBtn = document.getElementById("#searchBtn");
    // ClearBtn Clears search history
    const clearBtn = document.getElementById("#clearBtn");
    // SearchLog is list of city searches (10 max)
    const searchLog = document.getElementById("#searchLog");
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
}

init();