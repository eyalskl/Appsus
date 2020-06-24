import noteImg from './note-img.cmp.js';
import noteText from './note-text.cmp.js';
import noteTodos from './note-todos.cmp.js';
import {noteService} from '../services/note-service.js'

export default {
template: `
        <section class="flex">
            <div class="input-container flex">
                <input  :placeholder="placeholderByType"  v-model="newNote.txt"/>
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

    
data(){
    return{
        noteType:null,
        newNote:null
    }  
},

computed:{
placeholderByType(){
    if(this.noteType==='noteImg') return 'Insert an image url...'
    if(this.noteType==='noteTodos') return 'Insert a todo list...'
    return `What's on your mind...`
},


},
  components: {
    noteImg,
    noteText,
    noteTodos
  },

  methods:{
      setType(type){
          this.noteType = type;
      }

        },

        created(){
            this.newNote = noteService.getEmptyNoteByType('noteText')
            this.noteType = 'noteText'
        }
};