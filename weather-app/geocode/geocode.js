const request = require('request');

// callback = (errorMessage, results) => {}
var geocodeAddress = (address, callback) => {
    var encodedAddress = encodeURIComponent(address); // This will convert spaces in address to %20 for url requests

    request({
        // url: 'https://maps.googleapis.com/maps/api/geocode/json?address=1301%20lombard%20street%20philadelphia',
        url: 'https://maps.googleapis.com/maps/api/geocode/json?address=' + encodedAddress,
        json: true // will help us convert json string to json object automatically
    }, function (error, response, body) {
        if (error) {
            callback('Unable to connect to google server');
        } else if (body.status === 'ZERO_RESULTS') {
            callback('Unable to find that address');
        } else if (body.status === 'OK') {
            // console.log(JSON.stringify(body, undefined, 2)); // pretty printing json obj
            callback(undefined, {
                address: body.results[0].formatted_address,
                latitude: body.results[0].geometry.location.lat,
                longitude: body.results[0].geometry.location.lng
            });
        }
    });
};


module.exports = {
    geocodeAddress
};