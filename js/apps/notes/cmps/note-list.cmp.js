import notePreview from "./note -preview.cmp.js";

export default {
  props: ["notes"],
  template: `
        <div class="note-list clean-list flex wrap align-center space-around">
            <note-preview v-for="note in notes" @click.native="selectNote(note)" :note="note" :key="note.id"/>
</div>
    `,

    
//   },
  components: {
    notePreview,
  },
};