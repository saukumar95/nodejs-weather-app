console.log("starting the notes");

const fs = require('fs');

addNote = (notes) => {
    // console.log("Adding the notes", title, body);
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}

getAll = () => {
    console.log("Listing all notes..")
}

getNotes = (title) => {
    let notes = fs.readFileSync('notes-data.json');
    let jsonNote = JSON.parse(notes)
    let searchedNote = jsonNote.filter(note => note.title === title)
    return searchedNote;
}

removeNote = (title) => {
    console.log("removing the notes", title);
}
module.exports = { addNote, getAll, getNotes, removeNote };