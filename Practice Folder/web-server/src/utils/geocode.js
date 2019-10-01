
const request = require('request')

const geocode = (address, callback) => {
    //url is static
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1Ijoibm93ZW5zIiwiYSI6ImNqd21zd2YyazA1eHk0N21ncTZrdDl2d2sifQ.g8NhAYlzhXKYSXc0YwO6Nw'
    request({ url: url, json: true }, (error, response) => {
        if(error){
            callback('Unable to connect to location services', undefined)
        }
        else if (response.body.features.length === 0) {
            callback('Unable to find location. Try again', undefined)
        }
        else {
            callback(undefined, {
                latitude: response.body.features[1].center[1],
                longitude: response.body.features[0].center[0],
                location: response.body.features[0].place_name
            })
        }
    })
}

module.exports = geocode;
