// forcast API: https://api.darksky.net/forecast/d05f055f6ae1e31c1215baf550b3fdd4/37.8267,-122.4233
const request = require('request');

// callback = (errorMessage, results) => {}
var getWeather = (latitude, longitude, callback) => {
    request({
        url: 'https://api.darksky.net/forecast/d05f055f6ae1e31c1215baf550b3fdd4/' + latitude + ',' + longitude,
        json: true
    }, (error, response, body) => {
        if (!error && response.statusCode === 200) {
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            });
        } else {
            callback('Unable to fetch weather');
        }
    });
};

module.exports = {
    getWeather
};