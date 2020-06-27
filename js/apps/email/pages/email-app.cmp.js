// SERVICES
import { emailService } from '../services/email.service.js';
import { utilsService } from '../../../services/utils.service.js';
import { eventBus } from '../../../services/event-bus.service.js'
// CMPS
import emailList from '../cmps/email-list.cmp.js';
import emailFolders from '../cmps/email-folders.cmp.js';
import emailFilter from '../cmps/email-filter.cmp.js';
import sideBar from '../../../cmps/side-bar.cmp.js';

export default {
    name: 'email-app',
    template: `
    <section v-if="emails" class="email-app flex column">
        <div class="email-nav">
            <email-filter @searching="setSearch" @readFilter="setReadFilter" @setSortBy="setSortBy" />
        </div>
        <div class="email-main flex">
            <email-folders @folderUpdate="setFolderDisplay"> </email-folders>
            <email-list :emails="emailsToShow"> </email-list>
            <side-bar> </side-bar>
            <router-view />
        </div>
    </section>
    `,
    data() {
        return {
            emails: null,
            folderToShow: 'inbox',
            searchBy: '',
            readFilter: 'all',
            elRadioAllRead: null,
            sortBy: 'none'
        }
    },
    computed: {
        emailsToShow() {
            if (this.searchBy) return this.emails.filter(email => email.subject.toLowerCase().includes(this.searchBy.toLowerCase()) || email.body.toLowerCase().includes(this.searchBy.toLowerCase()) || email.from.toLowerCase().includes(this.searchBy.toLowerCase()));
            if (this.readFilter === 'all') this.emails = this.emails
            else return this.emails.filter(email => {
                if (this.readFilter === 'read') return email.isRead && email.folder !== 'trash' && email.folder !== 'drafts'
                else return !email.isRead && email.folder !== 'trash' && email.folder !== 'drafts'
            })
            if (this.folderToShow === 'starred') return this.emails.filter(email => email.isStarred === true && email.folder !== 'trash');
            if (this.folderToShow === 'sent') return this.emails.filter(email => email.isSent === true && email.folder !== 'trash');
            return this.emails.filter(email => email.folder === this.folderToShow);
        }
    },
    methods: {
        setFolderDisplay(folder) {
            console.log('folder:', folder)
            this.searchBy = '';
            this.readFilter = 'all';
            if (this.elRadioAllRead) this.elRadioAllRead.checked = true;
            this.folderToShow = folder;
        },
        setSearch(searchBy) {
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
        }
    },
    created() {
        emailService.getEmails()
            .then(emails => {
                this.emails = emails
                this.setSortBy('date')
            })   
            
        eventBus.$on('email-added', () => {
                emailService.getEmails()
                .then(emails => {
                    this.emails = emails
                    this.setSortBy('date')
                }) 
        });
    },
    components: {
        emailFolders,
        emailList,
        emailFilter,
        sideBar
    }
}