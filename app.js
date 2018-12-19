console.log("starting app.js");

const fs = require('fs');
//const _ = require('lodash');
const yargs = require('yargs');
const notesFile = require('./notes.js')

let argv = yargs.argv;
let command = argv._[0];

let fetchAllNotes = () => {
    try {
        let notess = fs.readFileSync('notes-data.json');
        return JSON.parse(notess);
    } catch (e) {
        return [];
    }
}

if (command === 'add') {
    console.log("Adding new notes");
    let notes = fetchAllNotes();
    let note = {
        title: argv.title,
        body: argv.body
    }

    let duplicateNotes = notes.filter(notes => notes.title === argv.title);

    if (duplicateNotes.length === 0) {
        notes.push(note);
        notesFile.addNote(notes);
    }
} else if (command === 'list') {
    console.log("Listing all notes..");
    let notesList = fetchAllNotes();
    console.log("=======================================================");
    notesList.map((note, serialNo) => {
        console.log(`${serialNo + 1}.  ${note.title}   ${note.body}`)
    })
} else if (command === 'read') {
    console.log("Reading the notes...");
    let returnedNote = notesFile.getNotes(argv.title);
    if (returnedNote.length === 0) {
        console.log(`Sorry no records found!!`);
    } else {
        returnedNote.map(note => {
            console.log(`Your searched for ${note.title} and it's body is ${note.body}`);
        })
    }
} else if (command === 'remove') {
    console.log("Removing the notes...");
    notesFile.removeNote(argv.title);
}
else {
    console.log("Bad Command");
}
