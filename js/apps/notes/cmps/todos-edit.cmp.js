
import { noteService } from '../services/note-service.js';


export default {
  template: `
    <div class="todos-container flex column">
        <input v-for="(input,idx) in inputAmount" @keyup.enter="addNote(todos)" ref="idx" type="text" v-model="todos"/>
         <button @click="anotherInput(inputAmount-1)">+Item</button>
    </div>
    
    `,
  data() {
    return {
        inputAmount:2,
        todos:[]
    }
  },
    methods:
    {
        anotherInput(idx){
        this.inputAmount++
        this.$refs.idx[idx].focus()
        },
        addNote(todos){
            noteService.addNewNote(todos)
        }
    },

    created(){
       
    }
};
