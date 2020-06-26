import noteImg from "./note-img.cmp.js";
<<<<<<< HEAD
import noteText from "./note-text.cmp.js";
import noteTodos from "./note-todos.cmp.js";
=======
import noteVideo from "./note-video.cmp.js";
import noteText from "./note-text.cmp.js";
import noteTodos from "./note-todos.cmp.js";
import { noteService } from "../services/note-service.js";
>>>>>>> d65f66c75701f4882128d95b7bb6902ef14f6fad

export default {
    props: ['note'],
    template: `
<<<<<<< HEAD
    <div class="note-details flex" style="background-color:yellow" ref="container" @mouseover="displayControls" @mouseout="hideControls" >
=======
    <div class="note-details flex" :style="noteBgc" ref="container" @mouseover="displayControls" @mouseout="hideControls" >
>>>>>>> d65f66c75701f4882128d95b7bb6902ef14f6fad
        <component :is="note.type" :info="note.info" :key="note.id"></component>
        <div v-show="controls"  class="note-controls">
            <button> 
                <i class="fas fa-thumbtack"></i>
            </button> 
<<<<<<< HEAD
            <button @click="openColorsMenu"> 
                <i class="fas fa-palette"></i>
=======
            <button @click.stop="toggleColorsMenu"> 
                <i class="fas fa-palette"></i>
                    <div v-if="colorsMenu" class="colors-container flex">
                     <span title="deafult" @click.stop="setBgc('#fff')">default</span>
                     <span title="red" @click.stop="setBgc('#ff8888')">red</span>
                     <span title="yellow" @click.stop="setBgc('#fffd88')">yellow</span>
                     <span title="green" @click.stop="setBgc('#92ff88')">green</span>
                     <span title="teal" @click.stop="setBgc('#88ffe1')">teal</span>
                     <span title="lightblue" @click.stop="setBgc('#88cfff')">lightblue</span>
                     <span title="darkblue" @click.stop="setBgc('#3452ff')"></span>
                     <span title="purple" @click.stop="setBgc('#fa75ff')"></span>
                    </div>
>>>>>>> d65f66c75701f4882128d95b7bb6902ef14f6fad
            </button> 
            <button> 
                <i class="fas fa-edit"></i>
            </button> 
<<<<<<< HEAD
            <button> 
=======
            <button @click="deleteNote(note.id)"> 
>>>>>>> d65f66c75701f4882128d95b7bb6902ef14f6fad
                <i class="fas fa-trash"></i>
            </button> 
        </div>
    </div>
`,
    data() {
        return {
            controls: false,
<<<<<<< HEAD
            colorsMenu: false
=======
            colorsMenu: false,
            noteBgc: { backgroundColor: '#fff' }
>>>>>>> d65f66c75701f4882128d95b7bb6902ef14f6fad
        }
    },
    methods: {
        displayControls() {
            this.controls = true;
        },
        hideControls() {
            this.controls = false;
        },
<<<<<<< HEAD
        openColorsMenu() {
            this.colorsMenu = true;
        }
=======
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


>>>>>>> d65f66c75701f4882128d95b7bb6902ef14f6fad
    },
    components: {
        noteImg,
        noteText,
<<<<<<< HEAD
=======
        noteVideo,
>>>>>>> d65f66c75701f4882128d95b7bb6902ef14f6fad
        noteTodos
    }
};