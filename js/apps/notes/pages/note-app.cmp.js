import { noteService } from "../services/note-service.js";
import noteList from "../cmps/note-list.cmp.js";
import noteAdd from "../cmps/note-add.cmp.js"
// import noteFilter from "../cmps/note-filter.cmp.js";

export default {
<<<<<<< HEAD
  name: "note-app",
  template: `
    <section v-if="notes" class="app-main notes-app">
=======
    name: "note-app",
    template: `
    <section v-if="notes" class="notes-app">
>>>>>>> d65f66c75701f4882128d95b7bb6902ef14f6fad
    <!-- <note-filter @filter="setFilter"/>    --> 
    <note-add :notes="notes"/>
            <note-list :notes="notesToShow"/>  
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
        noteAdd
        // noteFilter,
    },
};