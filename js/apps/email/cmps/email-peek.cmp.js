import { emailService } from '../services/email.service.js';

export default {
    name: 'email-peek',
    props: ['email'],
    template: `
        <li class="email-peek flex column">
                <div class="peek-header flex space-between">
                    <h3 class="peek-subject"> {{ email.subject }} </h3>
                    <div class=peek-controls>
                        <router-link :to="'email/' + email.id"> <i class="fas fa-expand"></i> </router-link>
                        <button @click.stop="deleteEmail(email.id)" title="Delete"> <i class="fas fa-trash"></i> </button>
                    </div>
                </div>
                <p class="peek-from"> {{ email.from }} <span> <{{ email.fromEmail }}> </span> </p>
                <p class="peek-body"> {{ email.body }} </p>
            </li>
    `,
    methods: {
        deleteEmail(emailIdx) {
            emailService.removeEmail(emailIdx);
        },
    },
    destroyed() {
        this.email.isPeeked = false;
    },
    created() {
        emailService.clearPeeked();
        this.email.isPeeked = true
    },
}