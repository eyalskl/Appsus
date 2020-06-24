import { emailService } from '../services/email.service.js';


export default {
    template: `
        <section class="email-folders flex column">
            <router-link to="/compose"> <i class="fas fa-plus"></i> Compose </router-link>
            <div @click="setFolder('inbox')" class="inbox">
                <span> <i class="fas fa-inbox"></i> </span> 
                Inbox
                <span class="unread-display"> {{ unreadEmailsAmount }} </span>
            </div>
            <div @click="setFolder('starred')" class="starred">
                <span> <i class="fas fa-star"></i> </span>
                Starred
            </div>
            <div @click="setFolder('trash')" class="deleted">
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