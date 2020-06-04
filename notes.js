const fs = require("fs");
const chalk = require("chalk");

const addNote = (title, body) => {
  const notes = loadNotes();

  const duplicateNotes = notes.filter((note) => {
    return note.title === title;
  });

  const duplicateNote = notes.find((note) => {
    return note.title === title;
  });

  if(!duplicateNote) {
    notes.push({
      title: title,
      body: body
    });
    saveNotes(notes);
    console.log(chalk.green.inverse("Successfully added new note"));
  } else {
    console.log(chalk.red.inverse("Note title already taken"));
  }  
}

const removeNote = (title) => {
  const notes = loadNotes();
  
  const notesToKeep = notes.filter((note) => {
    return note.title !== title;
  });

  if(notes.length > notesToKeep.length) {
    console.log(chalk.green.inverse(`Note with title '${title}' removed`));
    saveNotes(notesToKeep);
  } else {
    console.log(chalk.red.inverse("No note found"));
  }
}

const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.inverse("Your Notes"));
  notes.forEach((note)=> {
    console.log(chalk.cyan.inverse(note.title));
  });
}

const readNote = (title) => {
  const notes = loadNotes();

  const note = notes.find((n) => n.title === title);
  
  if(note) {
    console.log(chalk.cyan.inverse(note.title));
    console.log(note.body);
  } else {
    console.log(chalk.red.inverse(`Note with title '${title}' was not found`))
  }
}

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
}

const loadNotes = () => {
  try{
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch(e) {
    return [];
  }
}

module.exports = {
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote,
};