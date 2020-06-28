import noteImg from "./note-types/note-img.cmp.js";
import noteVideo from "./note-types/note-video.cmp.js";
import noteText from "./note-types/note-text.cmp.js";
import noteTodos from "./note-types/note-todos.cmp.js";
import { noteService } from "../services/note-service.js";

export default {
  props: ["note"],
  template: `
    <div class="prev-container" :style="noteColor" ref="container" @mouseover="displayControls" @mouseout="hideControls" >
        <component :is="note.type" :info="note.info" :edit="editMode" @doneEditTodo="onDoneEditTodo" @doneEditText="onDoneEditText" @doneEditSrc="onDoneEditSrc" :key="note.id"></component>
        <div v-if="colorsMenu" class="colors-container">
            <span v-for="(color) in colors" :style="{backgroundColor:color}" @click.stop="setBgc(color)">
        </div>
              <div v-show="controls"  class="note-controls">
                  <button title="Pin/Unpin" @click.stop="togglePinned"> 
                      <i class="fas fa-thumbtack"></i>
                  </button> 
                  <button title="Set Background Color" @click.stop="toggleColorsMenu"> 
                      <i class="fas fa-palette"></i>
                  </button> 
                  <button title="Copy note" @click.stop="copyNote"> 
                      <i class="fas fa-clone"></i>
                  </button> 
                  <button title="Edit Note" @click.stop="toggleEdit"> 
                      <i class="fas fa-edit"></i>
                  </button> 
                  <button title="Delete" @click.stop="deleteNote(note.id)"> 
                      <i class="fas fa-trash"></i>
                  </button> 
              </div>
            
    </div>
`,
  data() {
    return {
      controls: false,
      colorsMenu: false,
      noteBgc: { backgroundColor: "#fffd88" },
      editMode: false,
      colors:['#fffd88','#ff8888','#fff','#92ff88','#88ffe1','#88cfff','#3452ff','#fa75ff','#6d3cba']
    };
  },
  methods: {
    displayControls() {
      this.controls = true;
    },

    hideControls() {
      this.controls = false;
    },
    toggleColorsMenu() {
      this.colorsMenu = !this.colorsMenu;
    },
    toggleEdit() {
      this.editMode = !this.editMode;
    },
    onDoneEditSrc(done, newUrl) {
      this.editMode = done;
      this.note.info.url = newUrl;
      noteService.updateNoteProp(this.note.id, `[info][url]`, newUrl);
    },
    onDoneEditText(done, txt) {
      this.editMode = done;
      this.note.info.txt = txt;
      noteService.updateNoteProp(this.note.id, "[info][txt]", txt);
    },
    onDoneEditTodo(done, todosTxt) {
      this.editMode = done;
      const todoArr = JSON.parse(JSON.stringify(todosTxt))
      noteService.updateTodoNote(this.note.id, todoArr);
    },
    setBgc(color) {
      this.noteBgc.backgroundColor = color;
      this.colorsMenu = false;
      noteService.updateNoteProp(this.note.id, "backgroundColor", color);
    },
    deleteNote(noteId) {
      noteService.deleteNote(noteId);
    },
    togglePinned() {
      this.note.isPinned = !this.note.isPinned;
      noteService.updateNoteProp(this.note.id, "isPinned", this.note.isPinned);
    },
    copyNote() {

      noteService.cloneNote(this.note);
    },
  },
  computed: {
    noteColor() {
      return { backgroundColor: this.note.backgroundColor };
    },
  },
  created() {},
  components: {
    noteImg,
    noteText,
    noteVideo,
    noteTodos,
  },
};
