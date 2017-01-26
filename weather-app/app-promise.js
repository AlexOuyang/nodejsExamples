/*
    App usage example:
        node app.js -a '27 Stratford drive San Francisco'
*/

const yargs = require('yargs');
const axios = require('axios');

const args = yargs
    .options({
        address: {
            demand: true,
            alias: 'a',
            describe: 'Address to fetch weather for',
            string: true // This makes yargs to always parse this option as a string
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

var encodedAddress = encodeURIComponent(args.address); // This will convert spaces in address to %20 for url requests
var url = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + encodedAddress;

axios.get(url)
    .then((response) => {
        if (response.data.status === 'ZERO_RESULTS') {
            throw new Error('Unable to find that address');
        }

        var latitude = response.data.results[0].geometry.location.lat;
        var longitude = response.data.results[0].geometry.location.lng;
        var weatherUrl = 'https://api.darksky.net/forecast/d05f055f6ae1e31c1215baf550b3fdd4/' + latitude + ',' + longitude;

        console.log(response.data.results[0].formatted_address);

        return axios.get(weatherUrl); // return a promise so we can chain promises together
    })
    .then((response) => {
        var temperature = response.data.currently.temperature;
        var apparentTemperature = response.data.currently.apparentTemperature;
        console.log('Curent temperature is ' + temperature + 'F, but it feels like ' + apparentTemperature + 'F');
    })
    .catch((e) => {
        if (e.code === 'ENOTFOUND') {
            console.log('Unable to connect to API serverse\'');
        } else {
            console.log(e.message);
        }
    })
