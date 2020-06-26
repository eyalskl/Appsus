export default {
    name: 'note-filter',
    template: `
        <nav class="note-filter flex align-center">
            <div class="search-Notes">
                <button @click="searching" > <i class="fas fa-search"></i> </button>
                <input type="search" @keyup.enter.prevent="searching" @change="searching" placeholder="Search Title" v-model="searchInput">
            </div>
          
            <div class="note-title-sort">
                <label for="filterByWhat"> Filter by
                    <select id="filterByWhat" @change="setFilterBy">
                        <option value="noteText"> Text </option>
                        <option value="noteTodos"> Todos </option>
                        <option value="noteImg"> Images </option>
                        <option value="noteVideos"> Video </option>
                    </select>
                </label>
            </div>
        </nav>
    `,
    data() {
        return {
            searchInput: ''
        };
    },
    methods: {
        searching() {
            this.$emit('searching', this.searchInput);
        },
        setFilterBy(event) {
            this.$emit('setFilterBy', event.target.value) 
        }
    },
}