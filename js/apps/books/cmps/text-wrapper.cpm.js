'use strict';

export default {
    props: ['desc'],
    template: `
    <div class="book-desc"> 
        <div v-if="!showAll" class="short-text"> 
            <p> {{ shortText }}  <button v-show="isLongText" @click="toggleShowAll"> Read More </button> </p>
        </div>
        <div v-else class="long-text"> 
            <p> {{ desc }}  <button @click="toggleShowAll"> Read Less </button> </p>
        </div>
    </div>
    `,
    data() {
        return {
            showAll: false
        }
    },
    methods: {
        toggleShowAll() {
            this.showAll = !this.showAll;
        }
    },
    computed: {
        shortText() {
            if (!this.isLongText) return this.desc; 
            return this.desc.slice(0,100) + '...';
        },
        isLongText() {
            if (!this.desc) return false
            return (this.desc.length > 100)
        }
    }
}