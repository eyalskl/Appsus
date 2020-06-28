import starRating from './star-rating.cmp.js';

import { bookService } from '../services/book.service.js';
import {eventBus} from '../../../services/event-bus.service.js';


export default {
    props: ['book'],
    template: `
        <section class="review-add" v-if="book">
            <div class="reviews">
                <ul class="clean-list">
                    <h4> Reviews </h4>
                    <li v-for="(review, idx) in book.reviews">
                        <button @click="deleteReview(idx)" title="Delete Review!">
                            <i class="fas fa-trash-alt"></i>
                        </button>
                        <p>Review by: {{review.fullName}}, {{review.stars}} Stars.</p>
                        <p>Read at: {{review.readAt}} </p>
                        <p>Review - {{review.freeText}} </p>
                    </li>
                </ul>
            </div>
            <button class="add-btn" @click="toggleAddReviewMode"> {{(this.addReviewMode) ? 'Cancel' : 'Write a new review'}} </button>
            <form v-if="addReviewMode" @submit.prevent="saveReview" class="form-review flex column">
                <label> Full Name: <input ref="input" id="fullName" v-model="reviewToEdit.fullName" type="text" placeholder="Your name..."> </label>
                <label class="flex"> Rating <star-rating @onStarSelection="setRate" /> </label>
                <label> Read At: <input type="date" v-model="reviewToEdit.readAt"></label>
                <label> <textarea v-model="reviewToEdit.freeText" cols="40" rows="5" placeholder="Tell us more..."> </textarea> </label>
                <button :disabled="!isValid">Submit Review</button>
            </form>
        </section>
    `,
    data() {
        return {
            reviewToEdit: {
                fullName: 'Books Reader',
                stars: 1,
                readAt: '',
                freeText: ''
            },
            addReviewMode: false,
        }
    },
    methods: {
        saveReview() {
            bookService.addReview(this.bookId, this.reviewToEdit);
            this.reviewToEdit = {
                fullName: 'Books Reader',
                stars: 1,
                readAt: this.currDate,
                freeText: ''
            };
            this.toggleAddReviewMode();
            eventBus.$emit('show-msg', {
                isVisible: true,
                txt: 'Yor Review on the book "' + this.book.title + '" has been successfully added!',   
                type:'success',
                link: '/book/' + this.bookId,
                showFor: 3000
            })
        },
        deleteReview(reviewIdx) {
            bookService.removeReview(this.bookId, reviewIdx);
            eventBus.$emit('show-msg', {
                isVisible: true,
                txt: 'Your Review has been successfully deleted!',   
                type:'removed',
                showFor: 1000
            })
        },
        toggleAddReviewMode() {

            this.addReviewMode = !this.addReviewMode;
        },
        setRate(stars) {
            this.reviewToEdit.stars = stars
        },

    },
    computed: {
        currDate() {
            return new Date().toISOString().substring(0, 10);
        },
        isValid() {
            return !!this.reviewToEdit.fullName
        },
        bookId() {
            return this.$route.params.bookId
        },
    },
    created() {
        this.reviewToEdit.readAt = this.currDate
    },
    components: {
        starRating
    },

}