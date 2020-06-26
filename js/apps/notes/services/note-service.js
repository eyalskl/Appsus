import { utilsService } from "../../../services/utils.service.js";

const NOTES_KEY = "notes";

var gNotes = createDefaultNotes();
console.log("HEY");

export const noteService = {
    createDefaultNotes,
    getDefaultNotes,
    getEmptyNoteByType,
    addNewNote,
<<<<<<< HEAD
=======
    deleteNote,
>>>>>>> d65f66c75701f4882128d95b7bb6902ef14f6fad
};

function getDefaultNotes() {
    return Promise.resolve(gNotes);
}

function addNewNote(newNote) {
<<<<<<< HEAD
    console.log(newNote)
    newNote.isPinned = true;
    if (newNote.type === "noteText") newNote.info.txt = newNote.info.txt
=======
    console.log(newNote);
    newNote.isPinned = true;
    if (newNote.type === "noteText") newNote.info.txt = newNote.info.txt;
>>>>>>> d65f66c75701f4882128d95b7bb6902ef14f6fad
    if (newNote.type === "noteImg") {
        newNote.info.url = newNote.info.txt;
        newNote.info.title = "New";
    }
    if (newNote.type === "noteTodos") {
<<<<<<< HEAD
        newNote.info.todos = newNote.info.todos.split(',');
    }
    gNotes.push(newNote);
    utilsService.storeToStorage(NOTES_KEY, gNotes)
}

function getEmptyNoteByType(type) {
    const newNote = { type: type, id: utilsService.getRandomId(), isPinned: false, style: { backgroundColor: "#000" } };
=======
        newNote.info.todos = newNote.info.todos.split(",");
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
>>>>>>> d65f66c75701f4882128d95b7bb6902ef14f6fad
    switch (type) {
        case "noteText":
            newNote.info = { txt: "" };
            break;
        case "noteImg":
            newNote.info = { url: "", title: "" };
            break;
        case "noteTodos":
            newNote.info = { todos: "" };
            break;
    }
    return newNote;
}

function createDefaultNotes() {
    const notes = utilsService.loadFromStorage(NOTES_KEY);
    if (notes) return notes;
    const defaultNotes = [{
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
<<<<<<< HEAD
=======
        {
            type: "noteVideo",
            id: utilsService.getRandomId(),
            isPinned: false,
            info: {
                todos: [
                    { url: "https://www.youtube.com/watch?v=jofNR_WkoCE", title: "new" },
                ],
                style: {
                    backgroundColor: "#00d",
                },
            },
        },
>>>>>>> d65f66c75701f4882128d95b7bb6902ef14f6fad
    ];
    utilsService.storeToStorage(NOTES_KEY, defaultNotes);
    return defaultNotes;
}