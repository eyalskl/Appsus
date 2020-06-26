"use strict";

import bookList from "../cmps/book-list.cmp.js";
import bookFilter from "../cmps/book-filter.cmp.js";

import { bookService } from "../services/book.service.js";

export default {
  template: `
    <main class="app-main book-app">
        <book-filter @filtered="setFilter" /> 
        <book-list :books="booksToShow"/>
    </main>
    `,
  data() {
    return {
      books: [],
      filterBy: null,
    };
  },
  components: {
    bookFilter,
    bookList
  },
  computed: {
    booksToShow() {
      const filterBy = this.filterBy;
      if (!filterBy) return this.books;
      var filteredBooks = this.books.filter(book => {
        return book.title.toLowerCase().includes(filterBy.byName.toLowerCase());
      });
      filteredBooks = filteredBooks.filter(book => {
        return (book.listPrice.amount >= filterBy.fromPrice && book.listPrice.amount <= filterBy.toPrice);
      });
      return filteredBooks;
    },
  },
  methods: {
    setFilter(filterBy) {
      this.filterBy = filterBy;
    },
  },
  created() {
    bookService.getBooks()
      .then(books => this.books = books);
  },
};
