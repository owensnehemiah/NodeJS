const fs = require('fs');


var fetchNotes = () => {
    //Read current content. Try catch is being used in case the file doesn't exist. 
    try
    {
        var notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    }
    catch(e)
    {
       return []; 
    }
};

var saveNotes = (notes) => {
    //Write to file. 
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};


var addNote = (title, body) => {

    var notes = fetchNotes();
    var note = {
        title,
        body
    };
    
    var duplicateNotes = notes.filter((note) => note.title === title);

    if (duplicateNotes.length === 0)
    {
        //Add note to the notes array. 
        notes.push(note);
        saveNotes(notes);
        return note;
    }

}; //End of addNote method;


var getAll = () => {
    return fetchNotes();
};

var getNote = (title) => {
    console.log('Retrieving Note');
    var notes = fetchNotes();    
    var filteredNotes = notes.filter((note) => note.title === title);
    return filteredNotes[0];
};


var removeNote = (title) => {
    var notes = fetchNotes();
    var filteredNotes = notes.filter((note) => note.title !== title);
    saveNotes(filteredNotes);
    
    return notes.length !== filteredNotes.length;
};

var logNote = (note) => {
    debugger;
    console.log('---');
    console.log(`Title: ${note.title}`);
    console.log(`Body:' ${note.body}`);
    
}

module.exports = { 
    addNote,
    getAll,
    getNote,
    logNote,
    removeNote
    
};
//console.log(module);
//module.exports.age = 24;
//var a = 5;
//var b = 6;

//module.exports.addNotes = () => {
//    console.log('addNote');
//    return 'Note Added';
//};
//
//module.exports.add = (a, b) => {
//    return a + b;
//};
