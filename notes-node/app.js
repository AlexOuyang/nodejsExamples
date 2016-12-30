const fs = require('fs'); // file system utilities
const os = require('os');
const _ = require('lodash'); // lodash module has a lot of good utilities functions
const yargs = require('yargs'); // yargs module helps with commandline argument validation and key value pair args
const notes = require('./notes.js');

const argv = yargs.argv;

var command = argv._[0];

if (command === 'add') {
    var note = notes.addNote(argv.title, argv.body); // usage: node app.js add --title="title" --body="body"
    if (note) {
        console.log('Note created');
        console.log('--');
        console.log('Title: ' + note.title);
        console.log('Body: ' + note.body);
    } else {
        console.log('Note title taken');
    }
} else if (command === 'list') {
    notes.getAll();
} else if (command === 'read') {
    notes.getNote(argv.title);
} else if (command === 'remove') {
    var removed = notes.removeNote(argv.title);
    if (removed) {
        console.log("Removed note");
    } else {
        console.log("Note not found");
    }
} else {
    console.log('Command not found');
}


// var user = os.userInfo();

// fs.appendFile('greetings.txt', 'Hello ' + user.username, function (err) {
//     if (err) {
//         console.log('Unable to write to file');
//     }
// });