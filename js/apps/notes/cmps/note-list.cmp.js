import noteAdd from "./note-add.cmp.js";
import notePreview from "./note-preview.cmp.js";


export default {
    props: ['notes', 'header'],
    template: `
        <div class="main-notes-container flex wrap" v-if="notes">
            <h3 :class="header"> {{ header }} </h3>
            <draggable v-bind="dragOptions" class="drag-zone" tag="div" :notes="notes"  @start="drag=true" @end="drag=false">
                    <transition-group class="transition-container flex wrap" type="transition"  :name="!drag ? 'flip-list' : null">
                    <div class="note-container" v-for="(note,idx) in notes" :key="idx">
                        <note-preview :note="note"/>            
                    </div>
                    </transition-group>
            </draggable>    
        </div>
    `,
    data() {
        return {
            drag: false,
            // note: this.notes
        }
    },
    components: {
        noteAdd,
        notePreview,

    },
    computed: {
        dragOptions() {
            return {
                animation: 300,
                group: 'description',
                disabled: false,
                ghostClass: 'ghost'
            }
        },

    }

};