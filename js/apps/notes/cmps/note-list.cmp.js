import noteAdd from "./note-add.cmp.js";
import notePreview from "./note-preview.cmp.js";

export default {
    props: ["notes"],
    template: `
        <section class="main-notes-container" v-if="notes">
            <ul  class="note-container" v-for="note in notes">
              <note-preview :note="note"/>            
            </ul>
        </section>
    `,



    components: {
        noteAdd,
        notePreview
    },
    created() {},
};