"use strict";
import { bookService } from "../services/book.service.js";

import bookList from "../cmps/book-list.cmp.js";
import bookFilter from "../cmps/book-filter.cmp.js";
import sideBar from '../../../cmps/side-bar.cmp.js';


export default {
  template: `
    <main class="app-main book-app flex column">
        <book-filter @filtered="setFilter" /> 
    <div class="flex">
        <book-list :books="booksToShow"/>
        <side-bar> </side-bar>        
        </div>
    </main>
    `,
  data() {
    return {
      books: [],
      filterBy: null,
    };
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
  components: {
    bookFilter,
    bookList,
    sideBar
  }
};
