import noteImg from "./note-img.cmp.js";
import noteVideo from "./note-video.cmp.js";
import noteText from "./note-text.cmp.js";
import noteTodos from "./note-todos.cmp.js";
import { noteService } from "../services/note-service.js";

export default {
    props: ['note'],
    template: `
    <div v-if="!editMode" class="prev-container" :style="noteBgc" ref="container" @mouseover="displayControls" @mouseout="hideControls" >
        <component :is="note.type" :info="note.info" :key="note.id"></component>
        <div v-if="colorsMenu" class="colors-container">
            <span :style="{backgroundColor:'#fff'}" title="deafult" @click.stop="setBgc('#fff')"></span>
            <span :style="{backgroundColor:'#ff8888'}" title="red" @click.stop="setBgc('#ff8888')"></span>
            <span :style="{backgroundColor:'#fffd88'}" title="yellow" @click.stop="setBgc('#fffd88')"></span>
            <span :style="{backgroundColor:'#92ff88'}" title="green" @click.stop="setBgc('#92ff88')"></span>
            <span :style="{backgroundColor:'#88ffe1'}" title="teal" @click.stop="setBgc('#88ffe1')"></span>
            <span :style="{backgroundColor:'#88cfff'}" title="lightblue" @click.stop="setBgc('#88cfff')"></span>
            <span :style="{backgroundColor:'#3452ff'}" title="darkblue" @click.stop="setBgc('#3452ff')"></span>
            <span :style="{backgroundColor:'#fa75ff'}" title="purple" @click.stop="setBgc('#fa75ff')"></span>
            <span :style="{backgroundColor:'#6d3cba'}" title="purple" @click.stop="setBgc('#6d3cba')"></span>
        </div>
            <div v-show="controls"  class="note-controls">
                <button @click="note.isPinned=!note.isPinned"> 
                    <i class="fas fa-thumbtack"></i>
                </button> 
                <button @click.stop="toggleColorsMenu"> 
                    <i class="fas fa-palette"></i>
                </button> 
                <button @click="toggleEdit"> 
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
            noteBgc: { backgroundColor: '#fff' },
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
            this.colorsMenu = !this.colorsMenu
        },
        toggleEdit(){
            this.editMode = !this.editMode

        },
        setBgc(color) {
            this.noteBgc.backgroundColor = color;
            this.colorsMenu = false;
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