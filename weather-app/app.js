const request = require('request');

request({
    url: 'https://maps.googleapis.com/maps/api/geocode/json?address=1301%20lombard%20street%20philadelphia',
    json: true // will help us convert json string to json object automatically
}, function (error, response, body) {
    // console.log(JSON.stringify(body, undefined, 2)); // pretty printing json obj
    console.log("Address: " + body.results[0].formatted_address);
    console.log("Latitude: " + body.results[0].geometry.location.lat);
    console.log("Longitude: " + body.results[0].geometry.location.lng);
});