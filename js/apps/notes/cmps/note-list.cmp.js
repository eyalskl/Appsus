import noteAdd from "./note-add.cmp.js";
import notePreview from "./note-preview.cmp.js";

export default {
    props: ["notes"],
    template: `
<<<<<<< HEAD
        <section class="flex wrap" v-if="notes">
=======
        <div class="main-notes-container" v-if="notes">
>>>>>>> d65f66c75701f4882128d95b7bb6902ef14f6fad
            <ul  class="note-container" v-for="note in notes">
              <note-preview :note="note"/>            
            </ul>
</div>
    `,



    components: {
        noteAdd,
        notePreview
    },
    created() {},
};