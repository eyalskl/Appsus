import bookPreview from "./book-preview.cmp.js";

export default {
  props: ["books"],
  template: `
        <ul class="book-list clean-list flex wrap align-center justify-center">
            <book-preview v-for="book in books" @click.native="openBookDesc(book.id)" :book="book" :key="book.id"/>
        </ul>
    `,
  components: {
    bookPreview,
  },
  methods: {
    openBookDesc(bookId) {
      this.$router.push('/book/' + bookId)
    },
  },
};
