import { utilsService } from '../../../services/utils.service.js'


export default {
  props: ["book"],
  template: `
    <li class="book-preview flex column">
        <h4> {{ book.title }} - {{ formattedPrice }} </h4>
        <p v-for="author in book.authors">by {{author}} </p>
        <img :src="book.thumbnail" alt="This book has no image to display"/>
        <!-- <router-link :to="'/book/' + book.id"> Details </router-link>  -->
    </li>
    `,
  computed: {
    formattedPrice() {
      const currencyCode = this.book.listPrice.currencyCode;
      const price = this.book.listPrice.amount;
      return utilsService.formatCurrency(this.book.language, currencyCode, price);
    },
  },
}
