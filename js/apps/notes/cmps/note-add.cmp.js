import noteImg from "./note-img.cmp.js";
import noteText from "./note-text.cmp.js";
import noteTodos from "./note-todos.cmp.js";
import addTodos from "./add-todo.cmp.js"
import { noteService } from "../services/note-service.js";
export default {
  template: `
        <section class="flex">
            <div class="input-container flex wrap">
                <input  :placeholder="placeholderByType" @keyup.enter.prevent="addNote(newNote)"  v-model="newNote.info.txt"/>
                <button v-if="noteType==='noteTodos'" @click="todosAmount++">+</button>
                <add-todos v-if="todosAmount>1" :todosAmount="todosAmount"/>
                <button @click="setType('noteText')">
                    <i class="fas fa-font"></i>
                </button>
                <button @click="setType('noteImg')"> 
                    <i class="far fa-image"></i>
                </button>
                <button @click="setType('noteTodos')">
                    <i class="fas fa-list"></i>
                </button>
            </div>
            
        </section>
    `,

  data() {
    return {
      noteType: null,
      newNote: null,
      anotherLine: false,
      todosAmount:1
    };
  },
  computed: {
    placeholderByType() {
      if (this.noteType === "noteImg") return "Insert an image url...";
      if (this.noteType === "noteTodos") return "Insert a todo list...";
      return `Take a note...`;
    },
  },
  methods: {
    setType(type) {
      this.noteType = type;
      this.newNote = noteService.getEmptyNoteByType(type);
    },
    addNote(newNote) {
      noteService.addNewNote(newNote);
      this.newNote=noteService.getEmptyNoteByType(this.noteType);
    },

  },

  components: {
    noteImg,
    noteText,
    noteTodos,
    addTodos
  },

  created() {
    this.newNote = noteService.getEmptyNoteByType("noteText");
    this.noteType = "noteText";
  },
};
