import { noteService } from "../services/note-service.js";
import noteList from "../cmps/note-list.cmp.js";
import noteAdd from "../cmps/note-add.cmp.js"
import noteFilter from "../cmps/note-filter.cmp.js";
import sideBar from "../../../cmps/side-bar.cmp.js"

export default {
    name: "note-app",
    template: `
    <section v-if="notes" class="notes-app">
            <note-filter @setFilterBy="setFilter"/>  
            <note-add :notes="notes" class="add-notes"/>
                <div class="flex">  
            <note-list :notes="notesToShow"/>  
            <side-bar> </side-bar>
            <router-view />
            </div>
    </section>    
    `,
    data() {
        return {
            notes: null,
            filterBy: null,
        };
    },
    computed: {
        notesToShow() {
            return this.notes;
        },
    },
    methods: {
        setFilter(filterBy) {
            this.filterBy = filterBy;
        },
    },
    created() {
        noteService.getDefaultNotes()
            .then(notes => this.notes = notes);

    },
    components: {
        noteList,
        noteAdd,
        noteFilter,
        sideBar
    },
};