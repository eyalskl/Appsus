'use strict';

export default {
    template: `
        <section class="book-filter">
            <router-link to="/add-book"> Add Books </router-link>
            <input type="text" placeholder="Search something..." v-model="filterBy.byName" @input="filter"/>
            <input type="number" placeholder="From Price..." v-model.number="filterBy.fromPrice" @input="filter"/>
            <input type="number" placeholder="To Price..." v-model.number="filterBy.toPrice" @input="filter"/>
            <button title="Clear" @click="clearFilters"> <i class="fas fa-ban"></i> </button>
        </section>
    `,
    data() {
        return {
            filterBy: {
                byName: '',
                fromPrice: -Infinity,
                toPrice: Infinity
            }
        }
    },
    methods: {
        filter() {
            this.$emit('filtered', this.filterBy);
        },
        clearFilters() {
            this.filterBy = {
                byName: '',
                fromPrice: -Infinity,
                toPrice: Infinity
            };
            this.$emit('filtered', this.filterBy);
        }
    }
}