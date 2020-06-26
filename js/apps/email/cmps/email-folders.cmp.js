import { emailService } from '../services/email.service.js';


export default {
    template: `
        <section class="email-folders flex column">
            <router-link class="send-email-btn" to="compose"> <img src="https://www.gstatic.com/images/icons/material/colored_icons/1x/create_32dp.png"/> Compose </router-link>
            <router-view />
            <div @click="setFolder('inbox')" class="inbox" :class="highlightInbox">
                <span> <i class="fas fa-inbox"></i> </span> 
                Inbox
                <span class="unread-display"> {{ unreadEmailsAmount }} </span>
            </div>
            <div @click="setFolder('starred')" class="starred" :class="highlightStarred">
                <span> <i class="fas fa-star"></i> </span>
                Starred
            </div>
            <div @click="setFolder('sent')" class="sent" :class="highlightSent">
                <span> <i class="fas fa-share-square"></i> </span>
                Sent
            </div>
            <div @click="setFolder('trash')" class="deleted" :class="highlightTrash">
                <span> <i class="fas fa-trash"></i> </span>
                Trash
            </div>
        </section>
    `,
    data() {
        return {
            folderToDisplay: 'inbox',
        };
    },
    computed: {
        unreadEmailsAmount() {
            const unread = emailService.getUnreadAmount();
            if (unread === 0) return '';
            return unread;
        },
        highlightInbox() {
            if (this.folderToDisplay === 'inbox') return 'inbox-v'
            else return ''
        },
        highlightTrash() {
            if (this.folderToDisplay === 'trash') return 'trash-v'
            else return ''
        },
        highlightSent() {
            if (this.folderToDisplay === 'sent') return 'sent-v'
            else return ''
        },
        highlightStarred() {
            if (this.folderToDisplay === 'starred') return 'starred-v'
            else return ''
        }
    },
    methods: {
        setFolder(folder) {
            this.folderToDisplay = folder;
            this.$emit('folderUpdate', folder);
        }
    },
    created() {

    },
    components: {

    },
}