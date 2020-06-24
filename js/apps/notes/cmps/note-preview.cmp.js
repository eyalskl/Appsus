export default {
    props: ['note'],
    template: `
        <div class="note-preview flex column space-between">

<h2>preview</h2>
</div>
    `,

    computed: {
        // bookValue() {
        //     const bookPrice = this.book.listPrice
        //     return new Intl.NumberFormat(bookPrice.language, { style: 'currency', currency: bookPrice.currencyCode }).format(bookPrice.amount)
        // }
    },
};