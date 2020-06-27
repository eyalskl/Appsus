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
                <note-filter @setFilterBy="setFilter"/>  
            </div>   
            <div class="flex">  
                <div class="flex column">
                    <note-add :notes="notes" class="add-notes"/>
                    <note-list :notes="notesToShow"/>  
                </div>
                <side-bar> </side-bar>
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
            if(!this.filterBy) return this.notes
            return this.notes.filter(note=> note.type === this.filterBy)
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
            console.log(this.filterBy)
            

    },
    components: {
        noteList,
        noteAdd,
        noteFilter,
        sideBar
    },
};