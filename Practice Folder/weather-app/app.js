const request = require('request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const address = process.argv[2]

console.log(process.argv)
const url = 'https://api.darksky.net/forecast/866a6dd81def02cc83ee1a2216741551/37.8267,-122.4233?units=si'

// request({ url: url, json: true} , (error, response) => {
//     const data = response.body.currently
//     if(error){
//         console.log('Unable to connect to location services!')
//     }
//     else if (response.body.features.length === 0){
//         console.log(response.body.daily.data[0].summary + "Temperature: " + data.temperature + " Precipitation: " + data.precipProbability)
//     }
// })

// const geolocalurl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoibm93ZW5zIiwiYSI6ImNqd21zd2YyazA1eHk0N21ncTZrdDl2d2sifQ.g8NhAYlzhXKYSXc0YwO6Nw'

// request({ url: geolocalurl, json: true} , (error, response) => {
//     const data = response.body.features[0]
//     console.log("Longitude: " + data.center[0] + " Latitude: " + data.center[1])
// })

// const location = prompt("Choose a location");

if (!address){
    return console.log('Location needed')
}
geocode(address, (error, data) => {

    if(error){
        return console.log(error)
    }

      forecast(data.latitude, data.longitude , (error, forecastData) => {
          if(error){
              return console.log(error)
          }
            console.log(data.location)
            console.log('Data', forecastData)
    })
})



