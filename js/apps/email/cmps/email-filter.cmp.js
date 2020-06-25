export default {
    name: 'email-filter',
    template: `
        <nav class="email-filter flex align-center">
            <div class="search-email">
                <button @click="searching" > <i class="fas fa-search"></i> </button>
                <input type="search" @keyup.enter.prevent="searching" placeholder="Search mail" v-model="searchInput">
            </div>
            <div class="read-sort">
                <label for="all"> All <input type="radio" name="setReadDis" value="all" checked> </label>
                <label for="read"> Read <input type="radio" name="setReadDis" value="read"> </label>
                <label for="unread"> Unread <input type="radio" name="setReadDis" value="unread"> </label>
            </div>
            <div class="date-title-sort">
                <label for="sortByWhat"> Sort by
                    <select name="" id="sortByWhat">
                        <option value="title"> Date </option>
                        <option value="date"> Title </option>
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
    computed: {

    },
    methods: {
        searching() {
            this.$emit('searching', this.searchInput);
        }
    },
    created() {

    },
    components: {

    },
}