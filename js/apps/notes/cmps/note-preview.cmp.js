import noteImg from "./note-img.cmp.js";
import noteVideo from "./note-video.cmp.js";
import noteText from "./note-text.cmp.js";
import noteTodos from "./note-todos.cmp.js";
import { noteService } from "../services/note-service.js";

export default {
    props: ['note'],
    template: `
    <div class="prev-container" :style="noteColor" ref="container" @mouseover="displayControls" @mouseout="hideControls" >
        <component :is="note.type" :info="note.info" :edit="editMode" @doneEdit="onDoneEdit" :key="note.id"></component>
        <div v-if="colorsMenu" class="colors-container">
            <span :style="{backgroundColor:'#fffd88'}" title="deafult" @click.stop="setBgc('#fffd88')"></span>
            <span :style="{backgroundColor:'#ff8888'}" title="red" @click.stop="setBgc('#ff8888')"></span>
            <span :style="{backgroundColor:'#fff'}" title="white" @click.stop="setBgc('#fff')"></span>
            <span :style="{backgroundColor:'#92ff88'}" title="green" @click.stop="setBgc('#92ff88')"></span>
            <span :style="{backgroundColor:'#88ffe1'}" title="teal" @click.stop="setBgc('#88ffe1')"></span>
            <span :style="{backgroundColor:'#88cfff'}" title="lightblue" @click.stop="setBgc('#88cfff')"></span>
            <span :style="{backgroundColor:'#3452ff'}" title="darkblue" @click.stop="setBgc('#3452ff')"></span>
            <span :style="{backgroundColor:'#fa75ff'}" title="purple" @click.stop="setBgc('#fa75ff')"></span>
            <span :style="{backgroundColor:'#6d3cba'}" title="purple" @click.stop="setBgc('#6d3cba')"></span>
        </div>
            <div v-show="controls"  class="note-controls">
                <button @click.stop="togglePinned"> 
                    <i class="fas fa-thumbtack"></i>
                </button> 
                <button @click.stop="toggleColorsMenu"> 
                    <i class="fas fa-palette"></i>
                </button> 
                <button @click.stop="toggleEdit"> 
                    <i class="fas fa-edit"></i>
                </button> 
                <button @click.stop="deleteNote(note.id)"> 
                     <i class="fas fa-trash"></i>
                </button> 
            </div>
            
    </div>
`,
    data() {
        return {
            controls: false,
            colorsMenu: false,
            noteBgc: { backgroundColor: '#fffd88' },
            editMode:false
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
            this.colorsMenu = !this.colorsMenu;
        },
        toggleEdit(){
            this.editMode = !this.editMode;
        },
        onDoneEdit(done , newUrl){
        this.editMode=done
        this.note.info.url = newUrl
        console.log(newUrl)
        },
        setBgc(color) {
            this.noteBgc.backgroundColor = color;
            this.colorsMenu = false;
            noteService.updateNoteProp(this.note.id, 'backgroundColor', color)
        },
        deleteNote(noteId) {
            noteService.deleteNote(noteId)
        },
        togglePinned() {
            this.note.isPinned = !this.note.isPinned
            noteService.updateNoteProp(this.note.id, 'isPinned', this.note.isPinned)
        },

    },
    computed: {
        noteColor() {
            return { backgroundColor: this.note.backgroundColor }
        }
    },
    created() {
    },
    components: {
        noteImg,
        noteText,
        noteVideo,
        noteTodos
    }
};