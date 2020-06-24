import { utilsService } from "../../../services/utils.service.js";

const NOTES_KEY = "notes";

var gNotes = createDefaultNotes();
console.log("HEY");

export const noteService = {
  createDefaultNotes,
  getDefaultNotes,
  getEmptyNoteByType,
};

function getDefaultNotes() {
  return Promise.resolve(gNotes);
}

function addNewNote(newNote) {
  newNote.isPinned = true;
  if (newNote.type === 'noteText') newNote.txt = newNote.txt;
  if (newNote.type === 'noteImg') {
    newNote.url= newNote.txt = newNote.url
    newNote.title= 'New'
}
if(newNote.type==='noteTodos'){
  newNote.txt = newNote.txt.split(',')
}
return newNote;
}

function getEmptyNoteByType(type) {
  const newNote = { type, id: utilsService.getRandomId(), isPinned: false };
  switch (type) {
    case "noteText":
      newNote.info = { txt: " " };
    case "noteImg":
      newNote.info = { url: "", title: "" };
    case "noteTodos":
      newNote.info = { todos: '' };
  }
  return newNote;
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
      },
    },
  ];
  utilsService.storeToStorage(NOTES_KEY, defaultNotes);
  return defaultNotes;
}
