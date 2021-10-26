// Use moment for date/time?

function init() {
    // Get various html elements
    // WeatherEl shows current days weather
        // following are specific condition report
    const weatherEl = document.getElementById("#weatherCard");
    const cityEl = document.getElementById("#cityEl");
    const tempEl = document.getElementById("#tempEl");
    const humidityEl = document.getElementById("#humidityEl");
    const windEl = document.getElementById("#windEl");
    const uvEl = document.getElementById("#uvEl")
    const imgEl = document.getElementById("#imgEl");
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
    // Search History is either in storage or an empty array
    var searchHistory = JSON.parse(localStorage.getItem("search")) || [];

    // API Key for Open Weather Map
    const APIKey = "";
    let queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + APIKey;
    axios.get(queryURL).then(function(response){
        const currentDate = new Date(response.data.dt*1000);
        const day = currentDate.getDate();
        const month = currentDate.getMonth() + 1;
        const year = currentDate.getFullYear();
        nameEl.innerHTML = response.data.name + " (" + month + "/" + day + "/" + year + ") "





    }
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