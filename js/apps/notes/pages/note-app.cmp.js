import { noteService } from "../services/note-service.js";
import noteList from "../cmps/note-list.cmp.js";
import noteAdd from "../cmps/note-add.cmp.js"
import noteFilter from "../cmps/note-filter.cmp.js";
import sideBar from "../../../cmps/side-bar.cmp.js"


export default {
    name: "note-app",
    template: `
        <section v-if="notes" class="notes-app">
            <div class="filter-add-container flex">
                <note-filter @filtering="setFilter"/>  
            </div>  
            <div class="flex">  
                <div class="flex notes-app-w column">
                        <note-add class="add-notes"/>
                        <template v-if="notes">
                            <note-list :notes="pinnedNotes" header="Pinned" />  
                            <note-list :notes="unpinnedNotes" header="Others"/>                                  
                        </template>
                </div>
                <side-bar> </side-bar>
            </div>
        </section>    
    `,
    data() {
        return {
            notes: null,
            filterBy: null,
            editMode: false
        };
    },
    computed: {
        pinnedNotes() {
            return this.notesToShow.filter(note => note.isPinned)
        },
        unpinnedNotes() {
            return this.notesToShow.filter(note => !note.isPinned)
        },
        notesToShow() {
            var { notes, filterBy } = this
            if (!filterBy) return notes;
            var { term, type } = filterBy;
            term = term.toLowerCase();
            if (term) {
                notes = notes.filter(note => {
                    if (note.type === 'noteText') return note.info.txt.toLowerCase().includes(term);
                    if (note.type === 'noteImg' || note.type === 'noteVideo') return note.info.title.toLowerCase().includes(term)
                    if (note.type === 'noteTodos') return note.info.todos.forEach(todo => todo.txt.toLowerCase().includes(term))
                })
            }
            return (type === 'all') ? notes : notes.filter(note => note.type === type)
        }
    },
    methods: {
        setFilter(filterBy) {
            console.log('filterBy:', filterBy)
            this.filterBy = filterBy;
        },
        onEdit(yes) {
            this.editMode = yes
        },
        async loadNotes() {
            this.notes = await noteService.getNotes()
        }
    },
    created() {
        this.loadNotes();
    },
    components: {
        noteList,
        noteAdd,
        noteFilter,
        sideBar,

    },
};