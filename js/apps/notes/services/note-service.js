import { utilsService } from "../../../services/utils.service.js";

const NOTES_KEY = "notes";

var gNotes = createDefaultNotes();

export const noteService = {
  getNotes,
  getEmptyNoteByType,
  addNewNote,
  deleteNote,
  addTodoNote,
  updateNoteProp,
  getById,
  updateTodoNote,
  cloneNote
};

function getNotes() {
  return Promise.resolve(gNotes);
}

function getById(noteId) {
  const note = gNotes.find((note) => note.id === noteId);
  return Promise.resolve(note);
}

function updateNoteProp(noteId, prop, value) {
  let noteToEdit;
  getById(noteId).then((note) => {
    noteToEdit = note;
    noteToEdit[prop] = value;
    utilsService.storeToStorage(NOTES_KEY, gNotes);
  });
}

function updateTodoNote(noteId, todosArr) {
  let noteToEdit;
  getById(noteId).then((note) => {
    noteToEdit = note;
    const newInfo = {
      todos: []
    }
      newInfo.todos = todosArr.map(todo => {return {txt:todo , doneAt : null}})
    noteToEdit.info = newInfo 
    utilsService.storeToStorage(NOTES_KEY, gNotes);
  });
}


function cloneNote(note){
  const newClone = JSON.parse(JSON.stringify(note))
  newClone.id = utilsService.getRandomId()
  gNotes.push(newClone)
  utilsService.storeToStorage(NOTES_KEY , gNotes)

}

function addNewNote(newNote) {
  newNote.isPinned = false;
  switch (newNote.type) {
    case "noteImg":
      newNote.info.url = newNote.info.txt;
      newNote.info.title = "New";
      break;
    case "noteVideo":
      newNote.info.url = newNote.info.txt;
      newNote.info.title = "New";
      break;
  }
  gNotes.push(newNote);
  utilsService.storeToStorage(NOTES_KEY, gNotes);
}

function deleteNote(noteId) {
  var idx = gNotes.findIndex((note) => note.id === noteId);
  gNotes.splice(idx, 1);
  utilsService.storeToStorage(NOTES_KEY, gNotes);
}

function getEmptyNoteByType(type) {
  const newNote = {
    type: type,
    id: utilsService.getRandomId(),
    isPinned: false,
    backgroundColor: "#fffd88",
  };
  switch (type) {
    case "noteText":
      newNote.info = { txt: "" };
      break;
    case "noteImg":
      newNote.info = { url: "", title: "" };
      break;
    case "noteVideo":
      newNote.info = { url: "", title: "" };
      break;
  }
  return newNote;
}

function addTodoNote(todos) {
  const todosArr = todos.map((todo) => {
    return { txt: todo, doneAt: null };
  });
  const todoNote = {
    type: "noteTodos",
    id: utilsService.getRandomId(),
    isPinned: false,
    backgroundColor: "#fffd88",
    info: {
      todos: todosArr,
    },
  };
  gNotes.push(todoNote);
  utilsService.storeToStorage(NOTES_KEY, gNotes);
}

function createDefaultNotes() {
  const notes = utilsService.loadFromStorage(NOTES_KEY);
  if (notes) return notes;
  const defaultNotes = [
    {
      type: "noteText",
      id: utilsService.getRandomId(),
      isPinned: true,
      info: {
        txt: "Fullstack Me Baby!",
      },
      backgroundColor: "#fffd88",
    },
    {
      type: "noteImg",
      id: utilsService.getRandomId(),
      isPinned: true,
      info: {
        url: "https://media1.giphy.com/media/l1J9u3TZfpmeDLkD6/giphy.gif",
        title: "Me Starting to figure out MissNotes",
      },  
      backgroundColor: "#fffd88",
    },
    {
      type: "noteImg",
      id: utilsService.getRandomId(),
      isPinned: true,
      info: {
        url: "https://media3.giphy.com/media/FjOsaw9z4BhrW/giphy.webp?cid=ecf05e47dc94fe535152c95c9d30b503fc5b326b4c0a7fcb&rid=giphy.webp",
        title: "Notes Vs Nadav",
      },  
      backgroundColor: "#fffd88",
    },
    {
      type: "noteImg",
      id: utilsService.getRandomId(),
      isPinned: true,
      info: {
        url: "https://media2.giphy.com/media/2Faz8AWeOgrfO4FHi/200.webp?cid=ecf05e473de4e2e1a25ef2468079d91c78fd371528eb32f1&rid=200.webp",
        title: "Eyal doing CSS",
      },  
      backgroundColor: "#fffd88",
    },
    {
      type: "noteTodos",
      id: utilsService.getRandomId(),
      isPinned: false,
      info: {
        todos: [
          { txt: "Do that", doneAt: null },
          { txt: "Do this", doneAt: 187111111 },
        ],
      },
      backgroundColor: "#fffd88",
    },
    {
      type: "noteVideo",
      id: utilsService.getRandomId(),
      isPinned: false,
      info: {
        url: "https://www.youtube.com/watch?v=WpmILPAcRQo",
        title: "new",
      },
      backgroundColor: "#fffd88",
    },
  ];
  utilsService.storeToStorage(NOTES_KEY, defaultNotes);
  return defaultNotes;
}
