import noteImg from './note-img.cmp.js';
import noteText from './note-text.cmp.js';
import noteTodos from './note-todos.cmp.js';

export default {
  props: ["notes"],
  template: `
        <section class="flex" v-if="notes">
            <ul class="note-container flex wrap" v-for="note in notes">
                <component :is="note.type" :info="note.info" :key="note.id"></component>
            </ul>
        </section>
    `,

    
//   },



  components: {
    noteImg,
    noteText,
    noteTodos
  },
  created(){
    console.log(this.notes)
  }
};