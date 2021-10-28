// GET HTML ELEMENTS

// WeatherEl shows current days weather
// following are specific condition report
const weatherEl = document.getElementById("weatherCard");
const cityEl = document.getElementById("cityEl");
const tempEl = document.getElementById("tempEl");
const humidityEl = document.getElementById("humidityEl");
const windEl = document.getElementById("windEl");
const uvEl = document.getElementById("uvEl")
const imgEl = document.getElementById("imgEl");
// ForecastEl shows 5 day forcast
const forecastEl = document.getElementById("forecastCard");
// Search form 
searchFormEl = document.getElementById("searchForm")
cityInputEl = document.getElementById("cityInput")
// SearchLogEl has city search form
const searchLogEl = document.getElementById("searchLog");
// searchBtn is the button to search cities
const searchBtn = document.getElementById("searchBtn");
// ClearBtn Clears search history
const clearBtn = document.getElementById("clearBtn");
// SearchLog is list of city searches (10 max)
const searchLog = document.getElementById("searchLog");
// Search History is either in storage or an empty array
var searchHistory = JSON.parse(localStorage.getItem("search")) || [];
// API Key for Open Weather Map
const APIKey = "6b894668462b2c8b27ea57b5838cdacb";
//Event handler for searching a city
// Start by hiding the empty cards
weatherEl.setAttribute("style", "display:none");
forecastEl.setAttribute("style", "display:none");

var searchHandler = function (event) {
    // When search button is pressed, don't refresh
    event.preventDefault();
    // Instead take user input as city
    city = cityInputEl.value.trim();
    // Make API Call
    citySearch(city);
    // Display weather and forecast cards
    weatherEl.setAttribute("style", "display: ")
    forecastEl.setAttribute("style", "display: ")
    // Populate search history
    searchlog.textContent(searchHistory);
};

function citySearch() {
    // Build url
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;
    fetch(queryURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            // to get longitude and latitude
            var lon = data.coord.lon;
            var lat = data.coord.lat;
            // Rebuild with lat and lon
            queryURL = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&units=imperial&exclude=minutely,hourly,alerts&appid=" + APIKey;
            fetch(queryURL)  //use lat and lon to get 5 day weather info and place into html
                .then(function (response) {

                    return response.json();
                })
                .then(function (data) {
                    // Fill out current weather card
                    cityText = city.charAt(0).toUpperCase() + city.slice(1);
                    dateText = moment.unix(data.current.dt).format("MM-DD-YY");
                    cityEl.textContent = cityText + " weather on " + dateText;
                    tempEl.textContent = "Temperature: " + data.current.temp + " Deg F";
                    windEl.textContent = "Wind-Speed: " + data.current.wind_speed + "mph";
                    humidityEl.textContent = "Humidity: " + data.current.humidity + "%";
                    uvEl.textContent = "UV Index: " + data.current.uvi;
                    imgEl.setAttribute("src", "http://openweathermap.org/img/wn/" + data.current.weather[0].icon + "@2x.png");

                    // Fill out 5 day forecast card
                    for (let i=1; i<6; i++) {
                        var dailyCard = document.getElementById(i);
                        dailyTitle = document.createElement("h4");
                        dailyTitle.setAttribute("class","card-title")
                        dailyTitle.textContent = moment.unix(data.current.dt).format("MM-DD"); // WORK HERE TO AUTOMATE DATES
                        dailyTemp = document.createElement("p");  
                        dailyTemp = "Temp: " + data.daily[i].temp.day + "F";
                        dailyWind = document.createElement("p");  
                        dailyWind = "Wind: " + data.daily[i].wind_speed + "MPH";
                        dailyHum = document.createElement("p");  
                        dailyHum = "Humidity:" + data.daily[i].humidity + "%";
                        dailyUV = document.createElement("p");  
                        dailyUV = "UV Index:" + data.daily[i].uvi;

                        dailyCard.appendChild(dailyTitle);
                        dailyTitle.append(dailyTemp);
                        dailyTitle.append(dailyWind);
                        dailyTitle.append(dailyHum);
                        dailyTitle.append(dailyUV);
                    }

                })
        });
};


// Event listener for search form    
searchFormEl.addEventListener('submit', searchHandler);
