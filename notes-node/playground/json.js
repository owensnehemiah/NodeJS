//var obj = {
//    name: 'Neo'
//};
//
//var stringObj = JSON.stringify(obj);
//console.log(typeof stringObj)
//
//var personString = '{"name": "Neo", "age": 33}';
//var person = JSON.parse(personString);
//console.log(typeof person);
//console.log(person);

const fs = require('fs');

//Create Array Obj
var originalNote = {
    title: "Example Title",
    body: "This is the body."
}

//Convert to JSON String
var originalNoteString = JSON.stringify(originalNote);


//Write to file
fs.writeFileSync('notes.json', originalNoteString)

//Parse the JSON String
var noteString = fs.readFileSync('notes.json');
var note = JSON.parse(noteString);

console.log(typeof note);
console.log(note.title);