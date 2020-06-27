import noteAdd from "./note-add.cmp.js";
import notePreview from "./note-preview.cmp.js";

export default {
    props: ["notes"],
    template: `
        <div class="main-notes-container flex wrap" v-if="notes">
            <div  class="note-container" v-for="note in notes">
            <note-preview :note="note"/>            
            </div>
        </div>
    `,



    components: {
        noteAdd,
        notePreview
    },
    created() {},
};