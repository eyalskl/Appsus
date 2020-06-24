import { emailService } from '../services/email.service.js';

import emailList from '../cmps/email-list.cmp.js';

export default {
    name: 'email-app',
    template: `
    <section class="app-main email-app">
        <email-list :emails="emails"> </email-list>
    </section>
    `,
    data() {
        return {
            emails: null,
        }
    },
    created() {
        emailService.getDefaultEmails()
            .then(emails => {
                this.emails = emails
                console.log(this.emails);
            })
    },
    components: {
        emailList
    }
}