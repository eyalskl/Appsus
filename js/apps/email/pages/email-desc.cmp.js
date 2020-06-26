import { emailService } from '../services/email.service.js';

import emailFilter from '../cmps/email-filter.cmp.js'
import emailFolders from '../cmps/email-folders.cmp.js'

export default {
    name: 'email-desc',
    template: `
        <section class="email-app flex column">
            <email-filter></email-filter>
            <div class="flex">
                <email-folders></email-folders>
                <div v-if="email" class="email-desc flex column">
                    <button @click="back"> <i class="fas fa-arrow-left"></i> </button>
                    <div class="desc-header flex space-between">
                        <h1 class="desc-subject"> {{ email.subject }} </h1>
                    <div class=desc-controls>
                        <button @click.stop="deleteEmail(email.id)" title="Delete"> <i class="fas fa-trash"></i> </button>
                    </div>
                </div>
                <p class="desc-from"> {{ email.from }} <span> <{{ email.fromEmail }}> </span> </p>
                <p class="desc-body"> {{ email.body }} </p>
                </div>
            </div>
        </section>
    `,
    data() {
        return {
            email: null,
        }
    },
    methods: {
        loadEmail() {
            const { emailId } = this.$route.params;
            emailService.getById(emailId)
                .then(email => {
                    this.email = email;
                })
        },
        back() {
            this.$router.back()
        },
        deleteEmail(emailIdx) {
            emailService.removeEmail(emailIdx);
            this.back()
        },
    },
    created() {
        this.loadEmail()
      },
    watch: {
        '$route.params.emailId'() {
            this.loadEmail();
        },
    },
    components: {
            emailFilter,
            emailFolders
    },
}