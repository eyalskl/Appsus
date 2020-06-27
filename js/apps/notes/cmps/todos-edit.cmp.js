
import { noteService } from '../services/note-service.js';
import noteTodos from "./note-todos.cmp.js";

export default {
  template: `
    <div class="todos-container flex column">
        <input placeholder="Add Todo..."
        @keydown.once="inputAmount++" :key="idx" v-for="(input,idx) in inputAmount" @keyup.enter="addNote(todos)" ref="idx" type="text" v-model="todos[idx]"/>
    </div>
    
    `,
  data() {
    return {
        inputAmount:1,
        todos:[]
    }
  },
    methods:
    {
        
        addNote(todos){
            noteService.addTodoNote(todos)
            
        },

    },

    components:{
       noteTodos
    }
};
