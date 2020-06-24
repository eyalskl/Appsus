import { emailService } from '../services/email.service.js';

import emailList from '../cmps/email-list.cmp.js';
import emailFolders from '../cmps/email-folders.cmp.js';

export default {
    name: 'email-app',
    template: `
    <section v-if="emails" class="app-main email-app flex">
        <email-folders @folderUpdate="setFolderDisplay"> </email-folders>
        <email-list :emails="emailsToShow"> </email-list>
        <router-view/>
    </section>
    `,
    data() {
        return {
            emails: null,
            folderToShow: 'inbox',
        }
    },
    computed: {
        emailsToShow() {
            if (this.folderToShow === 'starred') return this.emails.filter(email => email.isStarred === true && email.folder !== 'trash')
            return this.emails.filter(email => email.folder === this.folderToShow)
        }
    },
    methods: {
        setFolderDisplay(folder) {
            this.folderToShow = folder;
        }
    },
    created() {
        emailService.getDefaultEmails()
            .then(emails => {
                this.emails = emails
            })
            
    },
    components: {
        emailFolders,
        emailList
    }
}