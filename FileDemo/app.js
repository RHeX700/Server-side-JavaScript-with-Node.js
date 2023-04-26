const fs = require('fs');

const loadNotes = () =>{
    const buffer = fs.readFileSync('notes.json');
    const dataStr = buffer.toString();
    const obj = JSON.parse(dataStr);
    return obj;
}


const addNote = (title, author) =>{
    const notes = loadNotes();
    const duplicateNote = notes.filter((notes) => {notes.title === title});
    if(duplicateNote.length === 0){
        notes.push({
            "title" : title,
            "author" : author
        });
    }else{
        console.log('Note title already taken');
    }

    saveNote(notes);
}


const saveNote = (notes) =>{
    const dataStr = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataStr);
}

const getAllNotes = () => {
    const notes = loadNotes();
    notes.forEach(element => {
        console.log(element.title);
    });
}

const readANote = (title) => {
    const notes = loadNotes();
    var note = notes.find(note => note.title === title);
    if(note){
        console.log(`title : ${note.title}  Author : ${note.author}`);
    }else{
        console.log('Notes not found');
    }
}

const removeNote= (title) => {
    const notes = loadNotes();
    var findIndex = notes.findIndex(notes => notes.title === title);
    if(findIndex !== -1){
        notes.splice(findIndex,1)
    }else{
        console.log('No notes found');
    }
    saveNote(notes)
}

module.exports= {addNote, getAllNotes, readANote, removeNote}