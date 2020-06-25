import noteImg from "./note-img.cmp.js";
import noteText from "./note-text.cmp.js";
import noteTodos from "./note-todos.cmp.js";
import noteAdd from "./note-add.cmp.js";

export default {
    props: ["notes"],
    template: `
        <section class="flex wrap" v-if="notes">
            <ul  class="note-container flex " v-for="note in notes">
                <component :is="note.type" @mouseover.native="displayControls(note.id)" @mouseout.native="hideControls" :info="note.info" :key="note.id"></component>
                <div>
        <div v-show="controls"  class="flex space-between align-center">
            <button> 
                <i class="fas fa-thumbtack"></i>
            </button> 
            <button> 
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
              </ul>
        </section>
    `,

    data() {
        return {
            controls: false
        }
    },
    methods: {
        displayControls() {

            this.controls = true;
        },
        hideControls() {
            this.controls = false;
        },
    },

    components: {
        noteImg,
        noteText,
        noteTodos,
        noteAdd,
    },
    created() {},
};