export default {
    name: 'email-filter',
    template: `
        <nav class="email-filter flex align-center">
        <button class="btn-menu" @click="toggleMenu"> ☰ </button>
            <div class="search-email">
                <button @click="searching" > <i class="fas fa-search"></i> </button>
                <input type="search" @keyup.enter.prevent="searching" @change="searching" placeholder="Search mail" v-model="searchInput">
                <select id="sortByWhat" @change="setSortBy">
                        <option value="date">Sort by Date </option>
                        <option value="title">Sort by Title </option>
                </select>
            </div>
            <div class="read-sort">
                <label for="all"> All <input type="radio" name="setReadDis" @change="setReadFilter" ref="allRead" value="all" checked> </label>
                <label for="read"> Read <input type="radio" name="setReadDis" @change="setReadFilter" value="read"> </label>
                <label for="unread"> Unread <input type="radio" name="setReadDis" @change="setReadFilter" value="unread"> </label>
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
        setReadFilter(event) {
            this.$emit('readFilter', event.target.value, this.$refs.allRead) 
        },
        setSortBy(event) {
            this.$emit('setSortBy', event.target.value) 
        },
        toggleMenu() {
            document.body.classList.toggle('menu-open'); 
        }
    },
}