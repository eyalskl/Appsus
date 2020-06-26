import { utilsService } from '../../../services/utils.service.js'


export default {
  props: ["book"],
  template: `
    <li class="book-preview flex column">
        <h4> {{ book.title }} - {{ formattedPrice }} </h4>
        <p> by {{book.authors[0]}} </p>
        <img :src="book.thumbnail" alt="This book has no image to display"/>
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
