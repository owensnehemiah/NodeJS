const fs = require ('fs')
const chalk = require ('chalk')

const getNotes = () => {
    return 'Your notes..'
}

const addNote = (title, body) => {
    const notes = loadNotes()
    // const duplicateNotes = notes.filter(function(note) {
    //     return note.title === title
    // })
    const duplicateNotes = notes.filter((note) => note.title === title)
    const duplicateNote = notes.find((note) => note.title === title)

    if(!duplicateNote){
        notes.push({
            title: title,
            body: body
        })

        saveNotes(notes)
        console.log('New note added!')
    } else {
        console.log('Note title taken!')
    }

}

const removeNote = (title) => {
    const notes = loadNotes();
    const notesToKeep = notes.filter((note) => note.title !== title )

    if(notes.length > notesToKeep.lenth) {
        console.log(chalk.green.inverse('Note removed'))
        saveNotes(notesToKeep)
    }
    else{
        console.log(chalk.red.inverse('Note not found!'))
    }
}

const listNotes = () => {
    const notes = loadNotes();

    if( notes.length > 0 ){
        notes.forEach((note) => {
            console.log(note.title)
        })
    }else{
        console.log('Empty JSON File')
    }
}

const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)
    
    if(note){
        console.log(note.title, note.body)
    } else {
        console.log('Note note found!')
    }

}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

//file read/write
const loadNotes = function() {
    try
    {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }catch(e)
    {
        return []
    }
    

}

module.exports = { 
    getNotes: getNotes, 
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}