console.log('Starting app.js');


//const os = require('os');
const notes = require('./notes.js');
const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const titleOptions = {
  describe: 'Title of note',
  demand: true,
  alias: 't'
};

const bodyOptions = {
  describe: 'Body of the note',
  demand: true, 
  alias: 'b'
};

const argv = yargs
  .command('add', 'Add a new note', {
    title: titleOptions,
    body: bodyOptions
  })
    .command('list', 'List all notes')
    .command('read', 'Read a note', {
      title: titleOptions,
      body: bodyOptions
    })
    .command('remove', 'Remove a note', {
      title: titleOptions
    })
  .help()
  .argv;

var command = argv._[0];

console.log('Command: ', command);
console.log('Yargs', argv);


if (command === 'add') {
    console.log('Adding new note');

   var note = notes.addNote(argv.title, argv.body);
    
   if(note){
       console.log('Notes created!');
       notes.logNote(note);
   } 
   else {
       console.log('Note taken');
   }
}
else if(command === 'list') {
    debugger
    var allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} notes(s).`);
    allNotes.forEach((note) => notes.logNote(note));
}
else if(command === 'read'){
    console.log('Reading all notes');
//    var note = notes.getNote(argv.title);
    var note = notes.getNote(argv.title);
    if(note){
        console.log('Note Found');
        notes.logNote(note);
    }
    else
    {
        console.log('Note not found');
    }
//    var message = note ? console.log(notes.logNote) : console.log('Note Not Found');
}
else if(command === 'remove' ){
    console.log('Removing note(s)');
    var noteRemoved = notes.removeNote(argv.title);
    var message = noteRemoved ? 'Note was removed' : 'Note not found';
    console.log(message);
    
}
else {
    console.log('Command Not Recognize.');
}



















//-------------------------------------------------------------------------------------
//var user = os.userInfo();
//var res = notes.addNotes();
//var add = notes.add();

//var filteredArray = _.uniq(['Christopher', 1, 'Neo', 1, 2, 3, 4, 'Neo', 'Jonathan']);
//console.log(filteredArray);

//console.log('Results:' + notes.add(10, 2));
//console.log(user);
//console.log(_.isString(true));
//console.log(_.isString('Neo'));


//fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age}. ${notes.add(10, 4)}.`, (err) => {
//  if (err) throw err;
//});

//Callback err function neeeded for appendFile method 
//fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age}.`, (err) => {
//  if (err) throw err;
//  console.log('The "data to append" was appended to file!');
//});