const fs = require('fs');

let originalNote = {
    title: "Dracula",
    body: "Very famous sci-fi book"
}

let stringOriginalNote = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', stringOriginalNote);

let noteString = fs.readFileSync('notes.json');

let note = JSON.parse(noteString);

console.log(typeof note);
console.log(note.title);