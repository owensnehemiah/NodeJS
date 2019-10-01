
const request = require('request')

const forecast = (latitude, longitude, callback) => {
    //url is static
    const url = 'https://api.darksky.net/forecast/866a6dd81def02cc83ee1a2216741551/37.8267,-122.4233?units=si'

    request({ url: url, json: true }, (error, response) => {
        if(error){
            callback('Unable to connect to weather services', undefined)
        }
        else if (response.body.error) {
            callback('Unable to find coordinate. Try again', undefined)
        }
        else {
            const data = response.body.currently;
            callback(undefined, response.body.daily.data[0].summary + "Temperature: " + data.temperature + " Precipitation: " + data.precipProbability)
        }
    })
}

module.exports = forecast;
