let key = "21d11b007ade27ccee285312cfe144b9"
var citySearch = document.getElementById('citySearch')
var searchButton = document.getElementById('searchButton')
var apiResponse = {}
var averageTemps = [];
var averageWind = [];
var averageHumidity = [];

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
        averageTemps.push(avg)    
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
        averageWind.push(avg)    
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
        averageHumidity.push(avg)    
    }
    console.log(averageHumidity)
}    

// waits for window to finish loading before adding event listener
window.onload = function() {    
    searchButton.addEventListener('click', function() {            
       getInfo()
    })    
}