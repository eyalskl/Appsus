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
            <span :style="{backgroundColor:'#fffd88'}" title="Deafult" @click.stop="setBgc('#fffd88')"></span>
            <span :style="{backgroundColor:'#ff8888'}" title="Red" @click.stop="setBgc('#ff8888')"></span>
            <span :style="{backgroundColor:'#fff'}" title="White" @click.stop="setBgc('#fff')"></span>
            <span :style="{backgroundColor:'#92ff88'}" title="Green" @click.stop="setBgc('#92ff88')"></span>
            <span :style="{backgroundColor:'#88ffe1'}" title="Teal" @click.stop="setBgc('#88ffe1')"></span>
            <span :style="{backgroundColor:'#88cfff'}" title="Lightblue" @click.stop="setBgc('#88cfff')"></span>
            <span :style="{backgroundColor:'#3452ff'}" title="Darkblue" @click.stop="setBgc('#3452ff')"></span>
            <span :style="{backgroundColor:'#fa75ff'}" title="Pink" @click.stop="setBgc('#fa75ff')"></span>
            <span :style="{backgroundColor:'#6d3cba'}" title="Purple" @click.stop="setBgc('#6d3cba')"></span>
        </div>
              <div v-show="controls"  class="note-controls">
                  <button title="Share via E-Mail" @click.stop="sendToMail"> 
                      <i class="fas fa-paper-plane"></i>
                  </button> 
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
    };
  },
  methods: {
    sendToMail() {
      const noteType = this.note.type;
      console.log('noteType:', noteType)
      let subject = this.note.info.title;
      if (!subject) subject = 'Forwarded from note app'
      let body = 'Hey Check out my note from this cool note app - \n'
      body += (noteType === 'noteText') ? this.note.info.txt : (noteType === 'noteImg' || noteType === 'noteVideo') ? this.note.info.url : 'Todos List - \n' + this.note.info.todos.map( (todo,idx) => `Todo Task ${idx + 1} - ${todo.txt} \n`)
      this.$router.push(`compose?subject=${subject}&body=${body}`);
    },
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
