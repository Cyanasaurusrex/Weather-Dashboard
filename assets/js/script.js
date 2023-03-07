let key = "21d11b007ade27ccee285312cfe144b9";
// variables for page elements
var citySearch = document.getElementById('citySearch');
var searchButton = document.getElementById('searchButton');
var weatherData = document.getElementById('weatherData')

var currentTemp = document.getElementById('currentTemp')
var currentWind = document.getElementById('currentWind')
var currentHumidity = document.getElementById('currentHumidity')

var day1Temp = document.getElementById('day1Temp')
var day1Wind = document.getElementById('day1Wind')
var day1Humidity = document.getElementById('day1Humidity')

var day2Temp = document.getElementById('day2Temp')
var day2Wind = document.getElementById('day2Wind')
var day2Humidity = document.getElementById('day2Humidity')

var day3Temp = document.getElementById('day3Temp')
var day3Wind = document.getElementById('day3Wind')
var day3Humidity = document.getElementById('day3Humidity')

var day4Temp = document.getElementById('day4Temp')
var day4Wind = document.getElementById('day4Wind')
var day4Humidity = document.getElementById('day4Humidity')

var day5Temp = document.getElementById('day5Temp')
var day5Wind = document.getElementById('day5Wind')
var day5Humidity = document.getElementById('day5Humidity')

// variables for api response and arrays of parsed data
var apiResponse = {};
var averageTemps = [];
var averageWind = [];
var averageHumidity = [];
var currentInfo = [];

// calls the OpenWeather API and calls the subsequent functions to parse the data
function getInfo() {
    cityName = citySearch.value
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${key}&units=imperial`)
        .then(function(data) {
            return(data.json())
        })
        .then(function(data) {        
            apiResponse = data
            console.log(apiResponse)
            getTemps()
            getWind()
            getHumidity()
            displayData()
        })
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}&units=imperial`)
        .then(function(data) {
            return(data.json())
        })
        .then(function(data) {        
            apiCurrentResponse = data
            console.log(apiCurrentResponse)
            getCurrentInfo()
        })    
}

// generates an array with the daily average temperature
function getTemps() {
    for (i = 0; i < apiResponse.list.length; i += 8 ) {
        var sum = 0
        for (j = 0 + i; j < i+8; j++ ) {
            sum += apiResponse.list[j].main.temp
        }
        var avg = sum / 8
        averageTemps.push(avg.toFixed(2))    
    }
    console.log(averageTemps)
}

// generates an array with the daily average wind speed
function getWind() {
    for (i = 0; i < apiResponse.list.length; i += 8 ) {
        var sum = 0
        for (j = 0 + i; j < i+8; j++ ) {
            sum += apiResponse.list[j].wind.speed
        }
        var avg = sum / 8
        averageWind.push(avg.toFixed(2))    
    }
    console.log(averageWind)
}
// generates an array with the daily average humidity
function getHumidity() {
    for (i = 0; i < apiResponse.list.length; i += 8 ) {
        var sum = 0
        for (j = 0 + i; j < i+8; j++ ) {
            sum += apiResponse.list[j].main.humidity
        }
        var avg = sum / 8
        averageHumidity.push(avg.toFixed(2))    
    }
    console.log(averageHumidity)
}
// generates an array with the current temperature, wind speed, and humidity
function getCurrentInfo() {
    currentInfo.push(apiCurrentResponse.main.temp.toFixed(2))
    currentInfo.push(apiCurrentResponse.wind.speed.toFixed(2))
    currentInfo.push(apiCurrentResponse.main.humidity.toFixed(2))
    console.log(currentInfo)
}
// takes parsed data and adds it to the page
function displayData() {
    currentTemp.textContent = "Temp: " + currentInfo[0] + "°F"
    currentWind.textContent = "Wind: " + currentInfo[1] + " MPH"
    currentHumidity.textContent = "Humidity: " + currentInfo[2] + "%"

    day1Temp.textContent = "Temp: " + averageTemps[0] + "°F"
    day1Wind.textContent = "Wind: " + averageWind[0] + " MPH"
    day1Humidity.textContent = "Humidity: " + averageHumidity[0] + "%"

    day2Temp.textContent = "Temp: " + averageTemps[1] + "°F"
    day2Wind.textContent = "Wind: " + averageWind[1] + " MPH"
    day2Humidity.textContent = "Humidity: " + averageHumidity[1] + "%"

    day3Temp.textContent = "Temp: " + averageTemps[2] + "°F"
    day3Wind.textContent = "Wind: " + averageWind[2] + " MPH"
    day3Humidity.textContent = "Humidity: " + averageHumidity[2] + "%"

    day4Temp.textContent = "Temp: " + averageTemps[3] + "°F"
    day4Wind.textContent = "Wind: " + averageWind[3] + " MPH"
    day4Humidity.textContent = "Humidity: " + averageHumidity[3] + "%"

    day5Temp.textContent = "Temp: " + averageTemps[4] + "°F"
    day5Wind.textContent = "Wind: " + averageWind[4] + " MPH"
    day5Humidity.textContent = "Humidity: " + averageHumidity[4] + "%"
    weatherData.className = ""    
}

// waits for window to finish loading before adding event listener
window.onload = function() {    
    searchButton.addEventListener('click', function() {            
       getInfo()
    })    
}