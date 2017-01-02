const yargs = require('yargs');
const geocode = require('./geocode/geocode.js');
const weather = require('./weather/weather.js');
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

// Fetch address latitude and longitude for input address, 
// then get temperature from address latitude and longitude via The dark sky forcast API
geocode.geocodeAddress(args.address, (errorMessage, results) => {
    if (errorMessage) {
        console.log(errorMessage);
    } else {
        // console.log(JSON.stringify(results, undefined, 4));
        console.log(results.address);
        weather.getWeather(results.latitude, results.longitude, (errorMessage, results) => {
            if (errorMessage) {
                console.log(errorMessage);
            } else {
                // console.log(JSON.stringify(results, undefined, 4));
                console.log('Curent temperature is ' + results.temperature + 'F, but it feels like ' + results.apparentTemperature + 'F');
            }
        });
    }
});
