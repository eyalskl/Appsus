import { utilsService } from "../../../services/utils.service.js";

const NOTES_KEY = "notes";

var gNotes = createDefaultNotes();

export const noteService = {
  createDefaultNotes,
  getDefaultNotes,
  getNewNoteByType
};

function getDefaultNotes() {
  return Promise.resolve(gNotes);
}

// function getNewNoteByType(type) {
//   const newNote = { type, id: utilsService.getRandomId(), isPinned: false };
//   switch (type) {
//     case "nodeText":
//       newNote.info = { txt: " " };
//     case "noteImg":
//       newNote.info = { url: "", title: "" };
//     case "noteTodos":
//       newNote.info = { todos: [] };
//   }
//   return newNote;
// }

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
