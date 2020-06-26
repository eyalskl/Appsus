import { utilsService } from "../../../services/utils.service.js";

const NOTES_KEY = "notes";

var gNotes = createDefaultNotes();

export const noteService = {
  createDefaultNotes,
  getDefaultNotes,
  getEmptyNoteByType,
  addNewNote,
  deleteNote,
  addTodoNote
};

function getDefaultNotes() {
  return Promise.resolve(gNotes);
}

function addNewNote(newNote) {
  newNote.isPinned = true;
  if (newNote.type === "noteText") newNote.info.txt = newNote.info.txt;
  if (newNote.type === "noteImg") {
    newNote.info.url = newNote.info.txt;
    newNote.info.title = "New";
  }
  if (newNote.type === "noteVideo") {
    newNote.info.url = newNote.info.txt;
    newNote.info.title = "New";
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
    style: { backgroundColor: "#000" },
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

function addTodoNote(todos){
   const todosArr = todos.map(todo=>{ 
   return {txt :todo , doneAt :null}
  })
  const todoNote = {
    type: 'noteTodos',
    id: utilsService.getRandomId(),
    isPinned: true,
    style: { backgroundColor: "#000" },
    info:{
    todos: todosArr
    }
  }
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
      style: {
        backgroundColor: "#00d",
      },
    },
    {
      type: "noteImg",
      id: utilsService.getRandomId(),
      isPinned: true,
      info: {
        url: "https://i.imgur.com/D25S0Fy.jpg",
        title: "Me playing Mi",
      },  
      style: {
        backgroundColor: "#00d",
      },
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
        style: {
          backgroundColor: "#00d",
        },
      },
    },
    {
      type: "noteVideo",
      id: utilsService.getRandomId(),
      isPinned: false,
      info: {
        url: "https://www.youtube.com/watch?v=jofNR_WkoCE",
        title: "new",
      },
      style: {
        backgroundColor: "#00d",
      },
    },
  ];
  utilsService.storeToStorage(NOTES_KEY, defaultNotes);
  return defaultNotes;
}
