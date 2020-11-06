export default {
    name: 'note-filter',
    template: `
        <nav class="notes-filter flex align-center">
            <div class="search-notes">
                <button @click.stop="setFilterBy" > <i class="fas fa-search"></i> </button>
                <input type="search" @keyup.enter.prevent="setFilterBy" @input.stop="setFilterBy" placeholder="Search note" v-model="filterBy.term">
                <select @change="setFilterBy" v-model="filterBy.type">
                        <option value="all"> Show all </option>
                        <option value="noteText"> Text </option>
                        <option value="noteTodos"> Todos </option>
                        <option value="noteImg"> Images </option>
                        <option value="noteVideo"> Video </option>
                    </select>
            </div>
        </nav>
    `,
    data() {
        return {
            filterBy: {
                term: '',
                type: 'all'
            }
        };
    },
    methods: {
        setFilterBy() {
            this.$emit('filtering', {...this.filterBy}) 
        }
    },
}