import noteImg from "./note-types/note-img.cmp.js";
import noteText from "./note-types/note-text.cmp.js";
import noteTodos from "./note-types/note-todos.cmp.js";
import noteVideo from "./note-types/note-video.cmp.js";
import todosEdit from "./todos-edit.cmp.js"
import { noteService } from "../services/note-service.js";
export default {
    template: `
        <section class="flex">
            <div class="input-container flex wrap">
                <input v-show="(noteType!=='noteTodos')" :placeholder="PLACE_HOLDERS[noteType] || 'Take a note...' " @keyup.enter.prevent="addNote(newNote)"  v-model="newNote.info.txt"/>
                <todosEdit v-if="(noteType==='noteTodos')"></todosEdit>
                <div class="btn-setters">
                    <button title="Text" @click="setType('noteText')" :class="highlightText">
                        <i class="fas fa-font"></i>
                    </button>
                    <button title="Image" @click="setType('noteImg')" :class="highlightImg"> 
                        <i class="far fa-image"></i>
                    </button>
                    <button  title="Video" @click="setType('noteVideo')" :class="highlightVideo">
                    <i class="fab fa-youtube"></i>
                    </button>
                    <button  title="List" @click="noteType='noteTodos'" :class="highlightTodos">
                        <i class="fas fa-list"></i>
                    </button>
                </div>
            </div>
            
        </section>
    `,

    data() {
        return {
            noteType: 'noteText',
            newNote: null,
            anotherLine: false,
            PLACE_HOLDERS: {
                noteImg: 'Insert an image url...',
                noteTodos: 'Insert a todo list...',
                noteVideo: 'Insert a Youtube Link...',
            }
        };
    },
    methods: {
        setType(type) {
            this.noteType = type;
            this.newNote = noteService.getEmptyNoteByType(type);
        },
        addNote(newNote) {
            noteService.addNewNote(newNote);
            this.newNote = noteService.getEmptyNoteByType(this.noteType);
        },
        highlightText(){
            if (this.noteType === 'noteText') return 'focused1'
            else return ''
        },
        highlightImg(){
            if (this.noteType === 'noteImg') return 'focused2'
            else return ''
        },
        highlightVideo(){
            if (this.noteType === 'noteVideo') return 'focused3'
            else return ''
        },
        highlightTodos(){
            if (this.noteType === 'noteTodos') return 'focused'
            else return ''
        }

    },

    components: {
        noteImg,
        noteText,
        noteTodos,
        noteVideo,
        todosEdit
    },

    created() {
        this.newNote = noteService.getEmptyNoteByType("noteText");
        
    },
};