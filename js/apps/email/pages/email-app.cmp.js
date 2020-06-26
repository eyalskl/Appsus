import { emailService } from '../services/email.service.js';
import { utilsService } from '../../../services/utils.service.js';

import emailList from '../cmps/email-list.cmp.js';
import emailFolders from '../cmps/email-folders.cmp.js';
import emailFilter from '../cmps/email-filter.cmp.js';

export default {
    name: 'email-app',
    template: `
    <section v-if="emails" class="email-app flex column">
        <div class="email-nav">
<<<<<<< HEAD
            <email-filter @searching="setSearch" />
=======
            <email-filter @searching="setSearch" @readFilter="setReadFilter" @setSortBy="setSortBy" />
>>>>>>> d65f66c75701f4882128d95b7bb6902ef14f6fad
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
<<<<<<< HEAD
            searchBy: ''
=======
            searchBy: '',
            readFilter: 'all',
            elRadioAllRead: null,
            sortBy: 'none'
>>>>>>> d65f66c75701f4882128d95b7bb6902ef14f6fad
        }
    },
    computed: {
        emailsToShow() {
<<<<<<< HEAD
            if (this.searchBy) return this.emails.filter(email => email.subject.toLowerCase().includes(this.searchBy.toLowerCase()) || email.body.toLowerCase().includes(this.searchBy.toLowerCase()));
=======
            let filteredEmail = this.emails;
            if (this.searchBy) return filteredEmail.filter(email => email.subject.toLowerCase().includes(this.searchBy.toLowerCase()) || email.body.toLowerCase().includes(this.searchBy.toLowerCase()) || email.from.toLowerCase().includes(this.searchBy.toLowerCase()));
            if (this.readFilter === 'all') filteredEmail = filteredEmail
            else return filteredEmail.filter(email => {
                if (this.readFilter === 'read') return email.isRead && email.folder !== 'trash'
                else return !email.isRead && email.folder !== 'trash'
            })
>>>>>>> d65f66c75701f4882128d95b7bb6902ef14f6fad
            if (this.folderToShow === 'starred') return this.emails.filter(email => email.isStarred === true && email.folder !== 'trash');
            if (this.folderToShow === 'sent') return this.emails.filter(email => email.isSent === true && email.folder !== 'trash');
            return this.emails.filter(email => email.folder === this.folderToShow);
        }
    },
    methods: {
        setFolderDisplay(folder) {
            this.searchBy = '';
            this.readFilter = 'all';
            if (this.elRadioAllRead) this.elRadioAllRead.checked = true;
            this.folderToShow = folder;
        },
        setSearch(searchBy) {
<<<<<<< HEAD
            this.searchBy = searchBy
=======
            if (this.elRadioAllRead) this.elRadioAllRead.checked = true;
            this.searchBy = searchBy
        },
        setReadFilter(readFilter, elRadio) {
            this.elRadioAllRead = elRadio
            this.readFilter = readFilter;
        },
        setSortBy(sortBy) {
            const mySort = utilsService.compareValues
            switch (sortBy) {
                case 'title':
                    this.emails.sort(mySort('subject'))
                    break;
                case 'date':
                    this.emails.sort(mySort('sentAt', 'desc'))
                    break;
            }
>>>>>>> d65f66c75701f4882128d95b7bb6902ef14f6fad
        }
    },
    created() {
        emailService.getDefaultEmails()
            .then(emails => {
                this.emails = emails
                this.setSortBy('date')
            })
            
    },
    components: {
        emailFolders,
        emailList,
        emailFilter
    }
}