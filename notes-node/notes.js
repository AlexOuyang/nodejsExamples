
const fs = require('fs');

var fetchNotes = () => {
    try {
        var notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    } catch (e) {
        return [];
    }
};

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title, body) => {
    // Bring out the saved notes the append the newly added note
    var notes = fetchNotes();
    var note = { title, body };

    // duplicateNotes returns true if a note with title is found
    var duplicateNotes = notes.filter((note) => note.title === title);

    if (duplicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
    }
};

var getAll = () => {
    console.log('Getting all notes');
};

var getNote = (title) => {
    console.log('Getting note', title);
};

var removeNote = (title) => {
    var notes = fetchNotes();
    var filtered = notes.filter((note) => note.title !== title);
    saveNotes(filtered);
    return notes.length !== filtered.length;
};

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
};
