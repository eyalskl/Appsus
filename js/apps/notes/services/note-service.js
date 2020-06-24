import { utilsService } from "../../../services/utils.service.js";

const NOTES_KEY = "notes";

var gNotes = createDefaultNotes();
console.log('HEY');

export const noteService = {
  createDefaultNotes,
  getDefaultNotes,
};

function getDefaultNotes() {
  return Promise.resolve(gNotes);
}

function createDefaultNotes() {
  const notes = utilsService.loadFromStorage(NOTES_KEY);
  if (notes) return notes;
  const defaultNotes = [
    {
      type: "NoteText",
      isPinned: true,
      info: {
        txt: "Fullstack Me Baby!",
      },
    },
    {
      type: "NoteImg",
      info: {
        url: "http://some-img/me",
        title: "Me playing Mi",
      },
      style: {
        backgroundColor: "#00d",
      },
    },
    {
      type: "NoteTodos",
      info: {
        label: "How was it:",
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

