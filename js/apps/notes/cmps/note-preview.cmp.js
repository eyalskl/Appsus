import noteImg from "./note-img.cmp.js";
import noteText from "./note-text.cmp.js";
import noteTodos from "./note-todos.cmp.js";

export default {
    props: ['note'],
    template: `
    <div class="note-details flex" style="background-color:yellow" ref="container" @mouseover="displayControls" @mouseout="hideControls" >
        <component :is="note.type" :info="note.info" :key="note.id"></component>
        <div v-show="controls"  class="note-controls">
            <button> 
                <i class="fas fa-thumbtack"></i>
            </button> 
            <button @click="openColorsMenu"> 
                <i class="fas fa-palette"></i>
            </button> 
            <button> 
                <i class="fas fa-edit"></i>
            </button> 
            <button> 
                <i class="fas fa-trash"></i>
            </button> 
        </div>
    </div>
`,
    data() {
        return {
            controls: false,
            colorsMenu: false
        }
    },
    methods: {
        displayControls() {
            this.controls = true;
        },
        hideControls() {
            this.controls = false;
        },
        openColorsMenu() {
            this.colorsMenu = true;
        }
    },
    components: {
        noteImg,
        noteText,
        noteTodos
    }
};