const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js');

var res = notes.addNote();
console.log(_.isString('feaf'));

// var user = os.userInfo();

// fs.appendFile('greetings.txt', 'Hello ' + user.username, function (err) {
//     if (err) {
//         console.log('Unable to write to file');
//     }
// });