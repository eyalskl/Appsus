"use strict";

import { bookService } from "../services/book.service.js";
import { eventBus } from '../../../services/event-bus.service.js';

export default {
    name: 'add-books',
    template: `
        <main class="book-app add-book">
            <div class="add-search-bar">
                <button @click.stop="backToBooks" class="back-to-book-list"> BACK </button>
                <input ref="searchInput" @keyup.enter="searchBooks" type="text" placeholder="Search for a book online...">
                <button class="search-book" @click="searchBooks"> Search </button>
            </div>
            <section>
                <ul class="clean-list flex wrap justify-center">
                    <li class="flex column" v-for="book in googleBooks">
                        <h4> {{ book.volumeInfo.title }} </h4>
                        <p v-for="author in book.volumeInfo.authors"> {{ author }} </p>
                        <button @click.stop="addBook(book)"> Add to my List </button>
                    </li>
                </ul>
            </section>
        </main>
        `,
    data() {
      return {
          googleBooks: null,
          bookToAdd: null
      };
    },
    computed: {

    },
    methods: {
      addBook(book) {
        bookService.addGoogleBook(book)
        eventBus.$emit('show-msg', {
            isVisible: true,
            txt: 'The book "' + book.volumeInfo.title + '" was added successfully!',   
            type:'success',
            link: '/book/' + book.id,
            showFor: 5000
        })
    },
    backToBooks() {
        this.$router.push('/book')
    },
    searchBooks() {
        const search = this.$refs.searchInput.value;
        this.$refs.searchInput.value = '';
        bookService.searchBooksFromAPI(search)
            .then(books => {
                console.log(books);
                this.googleBooks = books
            })
    }
    },
    created() {
      bookService.getBooksFromAPI()
          .then(books => {
            console.log(books);
              
            this.googleBooks = books
          })
    },
    components: {

    },
};