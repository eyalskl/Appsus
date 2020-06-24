import noteImg from './note-img.cmp.js';
import noteText from './note-text.cmp.js';
import noteTodos from './note-todos.cmp.js';
import noteAdd from './note-add.cmp.js';

export default {
  props: ["notes"],
  template: `
        <section class="flex wrap" v-if="notes">
            <ul class="note-container flex " v-for="note in notes">
                <component :is="note.type" :info="note.info" :key="note.id"></component>
            </ul>
        </section>
    `,

    
//   },



  components: {
    noteImg,
    noteText,
    noteTodos,
    noteAdd
  },
  created(){
    console.log(this.notes)
  }
};