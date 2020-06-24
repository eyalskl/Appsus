import noteImg from './note-img.cmp.js';
import noteText from './note-text.cmp.js';
import noteTodos from './note-todos.cmp.js';
import {noteService} from '../services/note-service.js'

export default {
template: `
        <section class="flex">
            <div class="input-container">
                <button @click="setType('nodeText')">txt</button>
                <button @click="setType('nodeImg')">img</button>
                <button @click="setType('nodeTodos')">todo</button>
                <input v-model="noteByType"/>
            </div>
            
        </section>
    `,

    
data(){
    return{
        newNote:null
    }  
},
  components: {
    noteImg,
    noteText,
    noteTodos
  },

  methods:{
      setType(type){
          this.noteByType = noteService.getNewNoteByType(type)
      }

        },
};