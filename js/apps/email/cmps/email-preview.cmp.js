import { emailService } from "../services/email.service.js";


export default {
    name: 'email-preview',
    props: ["email"],
    template: `
        <li @mouseover="displayControls" @mouseout="hideControls" class="email-preview flex space-between align-center" :class="isRead">
            <div class="flex from"> {{ email.from }} </div>
            <div class="flex subject"> {{ email.subject }} </div>
            <div class="flex body" style="font-weight: 300"> - {{ emailBodyShortText }}... </div>
            <div class="flex sentAt"> {{ sentAt }} </div>
            
            <div v-show="showControls" class="email-controls flex">
                <button @click.stop="toggleRead" :title="setReadTitle"> <i class="fas" :class="classByRead"></i> </button>
                <button @click.stop="deleteEmail(email.id)" title="Delete"> <i class="fas fa-trash"></i> </button>
            </div>
        </li>
        `,
    data() {
        return {
            showControls: false,
        }
    },
    computed: {
        sentAt() {
            return new Date(this.email.sentAt).toDateString()
        },
        isRead() {
            if (this.email.isRead) return 'read';
            else return 'unread';
        },
        emailBodyShortText() {return this.email.body.slice(0, 50);},
        classByRead() {
            if (this.email.isRead) return 'fa-envelope'
            else return 'fa-envelope-open'
        },
        setReadTitle() {
            if (this.email.isRead) return 'Mark as unread'
            else return 'Mark as read'
        }
    },
    methods: {
        toggleRead() {
            this.email.isRead = !this.email.isRead
            emailService.updateEmailReadStatus(this.email.id, this.email.isRead);
        },
        displayControls() {
            this.showControls = true;
        },
        hideControls() {
            this.showControls = false;
        },
        deleteEmail(emailIdx) {
            emailService.removeEmail(emailIdx);
        }
    }

}
