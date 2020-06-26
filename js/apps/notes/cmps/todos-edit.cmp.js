
import { noteService } from '../services/note-service.js';

export default {
    props:['newNote'],
  template: `
    <div class="todos-container flex column">
        <input v-for="(input,idx) in inputAmount" @keyup.enter="addNote(newNote)" ref="idx" type="text" v-model="newNote.info.txt"/>
         <button @click="anotherInput(inputAmount-1)">+Item</button>
    </div>
    
    `,
  data() {
    return {
        inputAmount:2
    }
},
    methods:
    {
        anotherInput(idx){
        this.inputAmount++
        this.$refs.idx[idx].focus()
        },
        addNote(todoNote){
            noteService.addNewNote(todoNote)
        }
    }
};
