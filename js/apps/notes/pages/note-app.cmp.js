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
                <note-filter @searching="setSearchBy" @setFilterBy="setFilter"/>  
            </div>   
            <div class="flex">  
                <div class="flex notes-app-w column">
                        <note-add class="add-notes"/>
                        <note-list :notes="pinnedNotesToShow"/>  
                        <note-list :notes="unpinnedNotesToShow"/>  
                </div>
                <side-bar> </side-bar>
            </div>
        </section>    
    `,
    data() {
        return {
            notes: null,
            filterBy: null,
            searchBy: '',
            editMode:false
        };
    },
    computed: {
        pinnedNotesToShow() {
            if(!this.filterBy || !this.searchBy) return this.notes.filter(note => note.isPinned)
            if (this.searchBy) return this.notes.filter(note => {
                if (note.type === 'noteText') return note.info.txt.toLowerCase().contains(this.searchBy.toLowerCase());
                if (note.type === 'noteImg' || note.type === 'noteVideo') return note.info.title.toLowerCase().contains(this.searchBy.toLowerCase());
                if (note.type === 'noteTodos') return note.info.todos.forEach(todo => todo.txt.toLowerCase().contains(this.searchBy.toLowerCase()))
            })
            var fiilterdNotes = this.notes.filter(note=> note.type === this.filterBy)
            return fiilterdNotes.filter(note => note.isPinned)
        },
        unpinnedNotesToShow() {
            if(!this.filterBy || !this.searchBy) return this.notes.filter(note => !note.isPinned)
            if (this.searchBy) return this.notes.filter(note => {
                if (note.type === 'noteText') return note.info.txt.toLowerCase().contains(this.searchBy.toLowerCase());
                if (note.type === 'noteImg' || note.type === 'noteVideo') return note.info.title.toLowerCase().contains(this.searchBy.toLowerCase());
                if (note.type === 'noteTodos') return note.info.todos.forEach(todo => todo.txt.toLowerCase().contains(this.searchBy.toLowerCase()))
            })
            var fiilterdNotes = this.notes.filter(note=> note.type === this.filterBy)
            return fiilterdNotes.filter(note => !note.isPinned)
        }
    },
    methods: {
        setFilter(filterBy) {
            this.filterBy = filterBy;
           
        },
        onEdit(yes){
            this.editMode = yes
        },
        setSearchBy(searchBy) {
            console.log('searchBy:', searchBy)
            this.searchBy = searchBy;
        }
    },
    created() {
        noteService.getNotes()
            .then(notes => this.notes = notes);
            

    },
    components: {
        noteList,
        noteAdd,
        noteFilter,
        sideBar,

    },
};