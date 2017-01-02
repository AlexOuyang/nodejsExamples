const yargs = require('yargs');
const geocode = require('./geocode/geocode.js');
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

geocode.geocodeAddress(args.address);