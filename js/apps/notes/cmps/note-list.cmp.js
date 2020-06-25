import noteAdd from "./note-add.cmp.js";
import notePreview from "./note-preview.cmp.js";

export default {
    props: ["notes"],
    template: `
        <div class="main-notes-container" v-if="notes">
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