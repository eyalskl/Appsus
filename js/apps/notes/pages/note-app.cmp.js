import { noteService } from "../services/note-service.js";
import noteList from "../cmps/note-list.cmp.js";
// import noteFilter from "../cmps/note-filter.cmp.js";

export default {
  name: "note-app",
  template: `
    <section class="app-main note-app">
    <!-- <note-filter @filter="setFilter"/>    -->
            <note-list :notes="notesToShow"/>  
        <h1>Welcome to notes!</h1>    
    </section>    
    `,
  data() {
    return {
      notes:[],
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
    // noteFilter,
  },
};
