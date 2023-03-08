let key = "21d11b007ade27ccee285312cfe144b9";
// variables for page elements
var citySearch = document.getElementById('citySearch');
var searchButton = document.getElementById('searchButton');
var weatherData = document.getElementById('weatherData')

var currentDay= document.getElementById('currentDay')
var currentTemp = document.getElementById('currentTemp')
var currentWind = document.getElementById('currentWind')
var currentHumidity = document.getElementById('currentHumidity')

var day1Display = document.getElementById('day1Display')
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

// variable for current time using dayjs()
var now = dayjs()

// variables for api response and arrays of parsed data
var apiResponse = {};
var averageTemps = [];
var averageWind = [];
var averageHumidity = [];
var currentInfo = [];
var cityName = ""

// calls the OpenWeather API to get present and future data
// and calls the subsequent functions to parse the data
function getInfo() {
    saveData()
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

function saveData() {
    localStorage.setItem(cityName, cityName)

}

function recallData() {
    const storage = window.localStorage;
    const body = document.querySelector("#toolbar");
    for (let i = 0; i < storage.length; i++) {
        const key = storage.key(i);
        const button = document.createElement("button");
        button.textContent = key;
        button.className = 'addedButtons'
        button.addEventListener("click", function() {
            console.log(storage.key(i))
            cityName = storage.key(i)
            console.log(cityName)
            getInfo()
  });

  // Append the button to the body of the page
  body.appendChild(button);
}
}
// takes parsed data and adds it to the page
function displayData() {
    currentDay.textContent = citySearch.value.charAt(0).toUpperCase() + citySearch.value.slice(1) + " (" + now.format('MM/DD/YYYY') + ")"
    currentTemp.textContent = "Temp: " + currentInfo[0] + "°F"
    currentWind.textContent = "Wind: " + currentInfo[1] + " MPH"
    currentHumidity.textContent = "Humidity: " + currentInfo[2] + "%"

    day1Display.textContent = now.add(1, 'day').format('MM/DD/YYYY')
    day1Temp.textContent = "Temp: " + averageTemps[0] + "°F"
    day1Wind.textContent = "Wind: " + averageWind[0] + " MPH"
    day1Humidity.textContent = "Humidity: " + averageHumidity[0] + "%"

    day2Display.textContent = now.add(2, 'day').format('MM/DD/YYYY')
    day2Temp.textContent = "Temp: " + averageTemps[1] + "°F"
    day2Wind.textContent = "Wind: " + averageWind[1] + " MPH"
    day2Humidity.textContent = "Humidity: " + averageHumidity[1] + "%"

    day3Display.textContent = now.add(3, 'day').format('MM/DD/YYYY')
    day3Temp.textContent = "Temp: " + averageTemps[2] + "°F"
    day3Wind.textContent = "Wind: " + averageWind[2] + " MPH"
    day3Humidity.textContent = "Humidity: " + averageHumidity[2] + "%"

    day4Display.textContent = now.add(4, 'day').format('MM/DD/YYYY')
    day4Temp.textContent = "Temp: " + averageTemps[3] + "°F"
    day4Wind.textContent = "Wind: " + averageWind[3] + " MPH"
    day4Humidity.textContent = "Humidity: " + averageHumidity[3] + "%"

    day5Display.textContent = now.add(5, 'day').format('MM/DD/YYYY')
    day5Temp.textContent = "Temp: " + averageTemps[4] + "°F"
    day5Wind.textContent = "Wind: " + averageWind[4] + " MPH"
    day5Humidity.textContent = "Humidity: " + averageHumidity[4] + "%"
    weatherData.className = ""    
    resetValues()    
}

// clears all arrays and objects for subsequent calls
function resetValues() {
    citySearch.value = ""
    apiResponse = {};
    averageTemps = [];
    averageWind = [];
    averageHumidity = [];
    currentInfo = [];
}

// waits for window to load, then focuses on the textarea
window.addEventListener('load', function() {
    citySearch.focus()
  });

// waits for window to load before adding event listener
window.onload = function() {
    if (localStorage.length > 0) {
        recallData()
    }   
    searchButton.addEventListener('click', function() {
        cityName = citySearch.value            
        getInfo()       
    })
    citySearch.addEventListener('keydown', function(event){
        if(event.key === 'Enter') {
            cityName = citySearch.value            
            getInfo()            
        }
    })  
}