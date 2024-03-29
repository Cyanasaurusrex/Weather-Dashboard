// let key = "21d11b007ade27ccee285312cfe144b9";
// // variables for page elements
// let citySearch = document.getElementById('citySearch');
// let searchButton = document.getElementById('searchButton');
// let weatherData = document.getElementById('weatherData')
// let currentDay= document.getElementById('currentDay')
// let currentTemp = document.getElementById('currentTemp')
// let currentWind = document.getElementById('currentWind')
// let currentHumidity = document.getElementById('currentHumidity')
// let day1Display = document.getElementById('day1Display')
// let day1Temp = document.getElementById('day1Temp')
// let day1Wind = document.getElementById('day1Wind')
// let day1Humidity = document.getElementById('day1Humidity')
// let day2Temp = document.getElementById('day2Temp')
// let day2Wind = document.getElementById('day2Wind')
// let day2Humidity = document.getElementById('day2Humidity')
// let day3Temp = document.getElementById('day3Temp')
// let day3Wind = document.getElementById('day3Wind')
// let day3Humidity = document.getElementById('day3Humidity')
// let day4Temp = document.getElementById('day4Temp')
// let day4Wind = document.getElementById('day4Wind')
// let day4Humidity = document.getElementById('day4Humidity')
// let day5Temp = document.getElementById('day5Temp')
// let day5Wind = document.getElementById('day5Wind')
// let day5Humidity = document.getElementById('day5Humidity')
// let placeholder

// // variable for current time using dayjs()
// let now = dayjs()

// // variables for api response and arrays of parsed data
// let apiResponse = {};
// let averageTemps = [];
// let averageWind = [];
// let averageHumidity = [];
// let currentInfo = [];
// let cityName = ""

// // calls the OpenWeather API to get present and future data
// // and calls the subsequent functions to parse the data
// 

// // generates an array with the daily average temperature
// function getTemps() {
//     for (i = 0; i < apiResponse.list.length; i += 8 ) {
//         var sum = 0
//         for (j = 0 + i; j < i+8; j++ ) {
//             sum += apiResponse.list[j].main.temp
//         }
//         var avg = sum / 8
//         averageTemps.push(avg.toFixed(2))    
//     }
//     console.log(averageTemps)
// }

// // generates an array with the daily average wind speed
// function getWind() {
//     for (i = 0; i < apiResponse.list.length; i += 8 ) {
//         var sum = 0
//         for (j = 0 + i; j < i+8; j++ ) {
//             sum += apiResponse.list[j].wind.speed
//         }
//         var avg = sum / 8
//         averageWind.push(avg.toFixed(2))    
//     }
//     console.log(averageWind)
// }
// // generates an array with the daily average humidity
// function getHumidity() {
//     for (i = 0; i < apiResponse.list.length; i += 8 ) {
//         var sum = 0
//         for (j = 0 + i; j < i+8; j++ ) {
//             sum += apiResponse.list[j].main.humidity
//         }
//         var avg = sum / 8
//         averageHumidity.push(avg.toFixed(2))    
//     }
//     console.log(averageHumidity)
// }
// // generates an array with the current temperature, wind speed, and humidity
// function getCurrentInfo() {
//     currentInfo.push(apiCurrentResponse.main.temp.toFixed(2))
//     currentInfo.push(apiCurrentResponse.wind.speed.toFixed(2))
//     currentInfo.push(apiCurrentResponse.main.humidity.toFixed(2))
//     console.log(currentInfo)
// }

// function saveData() {
//     localStorage.setItem(cityName, cityName)

// }

// function recallData() {
//     const storage = window.localStorage;
//     const body = document.querySelector("#toolbar");
//     for (let i = 0; i < storage.length; i++) {
//         const key = storage.key(i);
//         const button = document.createElement("button");
//         button.textContent = key;
//         button.className = 'addedButtons'
//         button.addEventListener("click", function() {
//             console.log(storage.key(i))
//             cityName = storage.key(i)
//             let placeholder = citySearch.value
//             console.log(cityName)
//             getInfo()
//   });

//   // Append the button to the body of the page
//   body.appendChild(button);
// }
// }
// // takes parsed data and adds it to the page
// function displayData() {
//     currentDay.textContent = citySearch.value.charAt(0).toUpperCase() + citySearch.value.slice(1) + " (" + now.format('MM/DD/YYYY') + ")"
//     currentDay.textContent = placeholder
//     currentTemp.textContent = "Temp: " + currentInfo[0] + "°F"
//     currentWind.textContent = "Wind: " + currentInfo[1] + " MPH"
//     currentHumidity.textContent = "Humidity: " + currentInfo[2] + "%"

//     day1Display.textContent = now.add(1, 'day').format('MM/DD/YYYY')
//     day1Temp.textContent = "Temp: " + averageTemps[0] + "°F"
//     day1Wind.textContent = "Wind: " + averageWind[0] + " MPH"
//     day1Humidity.textContent = "Humidity: " + averageHumidity[0] + "%"

//     day2Display.textContent = now.add(2, 'day').format('MM/DD/YYYY')
//     day2Temp.textContent = "Temp: " + averageTemps[1] + "°F"
//     day2Wind.textContent = "Wind: " + averageWind[1] + " MPH"
//     day2Humidity.textContent = "Humidity: " + averageHumidity[1] + "%"

//     day3Display.textContent = now.add(3, 'day').format('MM/DD/YYYY')
//     day3Temp.textContent = "Temp: " + averageTemps[2] + "°F"
//     day3Wind.textContent = "Wind: " + averageWind[2] + " MPH"
//     day3Humidity.textContent = "Humidity: " + averageHumidity[2] + "%"

//     day4Display.textContent = now.add(4, 'day').format('MM/DD/YYYY')
//     day4Temp.textContent = "Temp: " + averageTemps[3] + "°F"
//     day4Wind.textContent = "Wind: " + averageWind[3] + " MPH"
//     day4Humidity.textContent = "Humidity: " + averageHumidity[3] + "%"

//     day5Display.textContent = now.add(5, 'day').format('MM/DD/YYYY')
//     day5Temp.textContent = "Temp: " + averageTemps[4] + "°F"
//     day5Wind.textContent = "Wind: " + averageWind[4] + " MPH"
//     day5Humidity.textContent = "Humidity: " + averageHumidity[4] + "%"
//     weatherData.className = ""    
//     resetValues()    
// }

// // clears all arrays and objects for subsequent calls
// function resetValues() {
//     citySearch.value = ""
//     apiResponse = {};
//     averageTemps = [];
//     averageWind = [];
//     averageHumidity = [];
//     currentInfo = [];
// }

// // waits for window to load, then focuses on the textarea
// window.addEventListener('load', function() {
//     citySearch.focus()
//   });

// // waits for window to load before adding event listener
// window.onload = function() {
//     if (localStorage.length > 0) {
//         recallData()
//     }   
//     searchButton.addEventListener('click', function() {
//         cityName = citySearch.value            
//         getInfo()       
//     })
//     citySearch.addEventListener('keydown', function(event){
//         if(event.key === 'Enter') {
//             cityName = citySearch.value            
//             getInfo()            
//         }
//     })  
// }

let key = "21d11b007ade27ccee285312cfe144b9";
let cityName
let cityNameUpper
let currentWeather = {}
let citySearch = document.getElementById('citySearch');
let search = document.getElementById('searchButton')
search.addEventListener('click', function () {
    let cityName = citySearch.value
    console.log(citySearch.value)
    getInfo(cityName)
    cityNameUpper = cityName.charAt(0).toUpperCase() + cityName.slice(1)
})

//function for calling API and calculating weather data averages 
function getInfo(cityName) {
    // API call for present data
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}&units=imperial`)
        .then(function (data) {
            return (data.json())
        })
        // Adds current weather data to currentWeather object
        .then(function (data) {
            currentWeather.temp = data.main.temp
            currentWeather.wind = data.wind.speed
            currentWeather.humidity = data.main.humidity
        })

    // API call for 5 day forecast 
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${key}&units=imperial`)
        .then(function (data) {
            return (data.json())
        })
        .then(function (data) {
            // initializes calculation variables for weather data averages
            let averageTemp = []
            let averageHumidity = []
            let averageWind = []
            let currentDay = data.list[0].dt_txt.slice(0, 10)
            let tempTemp = []
            let tempHumidity = []
            let tempWind = []

            // loops through all entries in API response
            for (let i = 0; i < data.list.length; i++) {

                // if the iterated data point is on a new day or the last data point in the set, average out the information 
                // in the temporary arrays and push the average to the average arrays, then clear out temporary arrays
                if ((currentDay != data.list[i].dt_txt.slice(0, 10)) || (i == (data.list.length - 1))) {
                    currentDay = data.list[i].dt_txt.slice(0, 10)
                    averageTemp.push((tempTemp.reduce((total, value) => total + value, 0) / tempTemp.length).toFixed(2))
                    averageWind.push((tempWind.reduce((total, value) => total + value, 0) / tempWind.length).toFixed(2))
                    averageHumidity.push(Math.floor(tempHumidity.reduce((total, value) => total + value, 0) / tempHumidity.length))
                    tempTemp = []
                    tempHumidity = []
                    tempWind = []
                }

                // Adds information to temporary array for use in average calculation later
                tempTemp.push(data.list[i].main.temp)
                tempHumidity.push(data.list[i].main.humidity)
                tempWind.push(data.list[i].wind.speed)
            }

            // calls function for displaying data with average arrays and current data as parameters
            displayInfo(averageTemp, averageHumidity, averageWind, currentWeather, cityName)
        })
}

// Function for displaying data from API on webpage
function displayInfo(averageTemp, averageHumidity, averageWind, currentWeather, cityName) {

    // Variable for current time using dayjs()
    let now = dayjs()

    // Gets elements of container divs
    const forecastDiv = document.getElementById('forecast');
    const todayDiv = document.getElementById('today')
    const toolbarDiv = document.getElementById('toolbar')

    // HTML generation for previous city search button and event listener
    const toolbar = document.createElement('button')
    toolbar.textContent = cityNameUpper
    toolbar.className = 'cityButton'
    toolbar.addEventListener("click", function () {
        getInfo(cityName)       
    })
    toolbarDiv.appendChild(toolbar)

    // HTML generation for current weather data
    const today = document.createElement('div')
    const todayHTML =
        `<p id = "currentDay">${cityNameUpper} ${now.format('MM/DD/YYYY')}</p>
          <p id = "currentTemp">Temp: ${currentWeather.temp}°</p>
          <p id = "currentWind">Wind: ${currentWeather.wind}MPH</p>
          <p id = "currentHumidity">Humidity: ${currentWeather.humidity}%</p>`
    today.innerHTML = todayHTML
    todayDiv.appendChild(today)

    // For 5 days, create HTML elements that display the relevant weather data and insert them into webpage HTML
    for (let i = 1; i <= 5; i++) {
        const forecast = document.createElement('div')
        forecast.id = 'day' + i
        forecast.className = 'day'
        forecast.classList.add('displayData')
        const dailyHTML =
            `<p id="day' + i + 'Display">${now.add(i, 'day').format('MM/DD/YYYY')}</p>
        <p id="day' + i + 'Temp">Temp: ${averageTemp[i]}°</p>
        <p id="day' + i + 'Wind">Wind: ${averageWind[i]}MPH</p>
        <p id="day' + i + 'Humidity">Humidity: ${averageHumidity[i]}%</p>`;
        forecast.innerHTML = dailyHTML
        forecastDiv.appendChild(forecast)
    }
}