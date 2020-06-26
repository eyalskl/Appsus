import noteImg from "./note-img.cmp.js";
import noteVideo from "./note-video.cmp.js";
import noteText from "./note-text.cmp.js";
import noteTodos from "./note-todos.cmp.js";
import { noteService } from "../services/note-service.js";

export default {
    props: ['note'],
    template: `
    <div class="note-details flex" :style="noteBgc" ref="container" @mouseover="displayControls" @mouseout="hideControls" >
        <component :is="note.type" :info="note.info" :key="note.id"></component>
        <div v-show="controls"  class="note-controls">
            <button> 
                <i class="fas fa-thumbtack"></i>
            </button> 
            <button @click.stop="toggleColorsMenu"> 
                <i class="fas fa-palette"></i>
            </button> 
            <div v-if="colorsMenu" class="colors-container">
                     <span title="deafult" @click.stop="setBgc('#fff')">.</span>
                     <span title="red" @click.stop="setBgc('#ff8888')">.</span>
                     <span title="yellow" @click.stop="setBgc('#fffd88')">.</span>
                     <span title="green" @click.stop="setBgc('#92ff88')">.</span>
                     <span title="teal" @click.stop="setBgc('#88ffe1')">.</span>
                     <span title="lightblue" @click.stop="setBgc('#88cfff')">.</span>
                     <span title="darkblue" @click.stop="setBgc('#3452ff')">.</span>
                     <span title="purple" @click.stop="setBgc('#fa75ff')">.</span>
                    </div>
            <button> 
                <i class="fas fa-edit"></i>
            </button> 
            <button @click="deleteNote(note.id)"> 
                <i class="fas fa-trash"></i>
            </button> 
        </div>
    </div>
`,
    data() {
        return {
            controls: false,
            colorsMenu: false,
            noteBgc: { backgroundColor: '#fff' }
        }
    },
    methods: {
        displayControls() {
            this.controls = true;
        },
        hideControls() {
            this.controls = false;
        },
        toggleColorsMenu() {
            this.colorsMenu = !this.colorsMenu

        },
        setBgc(color) {
            this.noteBgc.backgroundColor = color;
            this.openColorsMenu = false;
        },
        deleteNote(id) {
            noteService.deleteNote(id)
        }


    },
    components: {
        noteImg,
        noteText,
        noteVideo,
        noteTodos
    }
};