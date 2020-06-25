import { emailService } from '../services/email.service.js';

import emailList from '../cmps/email-list.cmp.js';
import emailFolders from '../cmps/email-folders.cmp.js';
import emailFilter from '../cmps/email-filter.cmp.js';

export default {
    name: 'email-app',
    template: `
    <section v-if="emails" class="email-app flex column">
        <div class="email-nav">
            <email-filter @searching="setSearch" />
        </div>
        <div class="email-main flex">
            <email-folders @folderUpdate="setFolderDisplay"> </email-folders>
            <email-list :emails="emailsToShow"> </email-list>
            <router-view/>
        </div>
    </section>
    `,
    data() {
        return {
            emails: null,
            folderToShow: 'inbox',
            searchBy: ''
        }
    },
    computed: {
        emailsToShow() {
            if (this.searchBy) return this.emails.filter(email => email.subject.toLowerCase().includes(this.searchBy.toLowerCase()) || email.body.toLowerCase().includes(this.searchBy.toLowerCase()));
            if (this.folderToShow === 'starred') return this.emails.filter(email => email.isStarred === true && email.folder !== 'trash');
            if (this.folderToShow === 'sent') return this.emails.filter(email => email.isSent === true && email.folder !== 'trash');
            return this.emails.filter(email => email.folder === this.folderToShow);
        }
    },
    methods: {
        setFolderDisplay(folder) {
            this.folderToShow = folder;
        },
        setSearch(searchBy) {
            this.searchBy = searchBy
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
        emailList,
        emailFilter
    }
}