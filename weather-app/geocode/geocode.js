const request = require('request');

var geocodeAddress = (address) => {
    var encodedAddress = encodeURIComponent(address); // This will convert spaces in address to %20 for url requests

    request({
        // url: 'https://maps.googleapis.com/maps/api/geocode/json?address=1301%20lombard%20street%20philadelphia',
        url: 'https://maps.googleapis.com/maps/api/geocode/json?address=' + encodedAddress,
        json: true // will help us convert json string to json object automatically
    }, function (error, response, body) {
        if (error) {
            console.log('Unable to connect to google server');
        } else if (body.status === 'ZERO_RESULTS') {
            console.log('Unable to find that address');
        } else if (body.status === 'OK') {
            // console.log(JSON.stringify(body, undefined, 2)); // pretty printing json obj
            console.log("Address: " + body.results[0].formatted_address);
            console.log("Latitude: " + body.results[0].geometry.location.lat);
            console.log("Longitude: " + body.results[0].geometry.location.lng);
        }
    });
}


module.exports = {
    geocodeAddress
};