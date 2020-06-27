import noteAdd from "./note-add.cmp.js";
import notePreview from "./note-preview.cmp.js";

export default {
    props: ["notes"],
    template: `
        <div class="main-notes-container flex wrap" v-if="notes">
                <h3 :class="notesHeader"> {{ notesHeader }} </h3>
                <div class="note-container" v-for="note in notes">
                    <note-preview :note="note"/>            
                </div>
        </div>
    `,
    components: {
        noteAdd,
        notePreview
    },
    computed: {
        notesHeader() {
            if (this.notes[0].isPinned) return 'pinned';
            else if (!this.notes[0].isPinned) return 'others';
            else return ''
        }
    }
};