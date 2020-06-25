import { emailService } from "../services/email.service.js";


export default {
    name: 'email-preview',
    props: ['email'],
    template: `
        <section class="email-preview">
            <li @click="openEmailPeek" @mouseover="displayControls" @mouseout="hideControls" class="email-preview flex space-between align-center" :class="isRead">
                <div class="flex star"> 
                    <button @click.stop="toggleStarred"> 
                        <i :class="starClasses"></i> 
                    </button> 
                </div>
                <div class="flex from"> {{ email.from }} </div>
                <div class="flex subject"> {{ email.subject }} </div>
                <div class="flex body" style="font-weight: 300"> - {{ emailBodyShortText }}... </div>
                <div class="flex sentAt"> {{ sentAt }} </div>

                <div v-show="showControls" class="email-controls flex">
                    <button @click.stop="toggleRead" :title="setReadTitle"> <i class="fas" :class="classByRead"></i> </button>
                    <button @click.stop="deleteEmail(email.id)" title="Delete"> <i class="fas fa-trash"></i> </button>
                </div>
            </li>
            <li class="email-peek flex column" :class="descClass">
                <div class="peek-header flex space-between">
                    <h3 class="peek-subject"> {{ email.subject }} </h3>
                    <div class=peek-controls>
                        <router-link :to="'/email/' + email.id"> <i class="fas fa-expand"></i> </router-link>
                        <button @click.stop="deleteEmail(email.id)" title="Delete"> <i class="fas fa-trash"></i> </button>
                    </div>
                </div>
                <p class="peek-from"> {{ email.from }} <span> <{{ email.fromEmail }}> </span> </p>
                <p class="peek-body"> {{ email.body }} </p>
            </li>
        </section>
        `,
    data() {
        return {
            showControls: false,
            showPeek: false
        }
    },
    computed: {
        sentAt() {
            if (new Date(Date.now()).toDateString().slice(4, 10) === new Date(this.email.sentAt).toDateString().slice(4, 10)) {
                return new Date(this.email.sentAt).toLocaleTimeString('en-US', 
                { 
                    hour12: true, 
                    hour: "numeric", 
                    minute: "numeric"
                });;
            } else return new Date(this.email.sentAt).toDateString().slice(4, 10)
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
        },
        starClasses() {
            if (this.email.folder === 'trash') return 'fas fa-trash';
            if (this.email.isStarred) return 'fas fa-star starred'
            else return 'far fa-star'
        },
        notInTrash() {
            return this.email.folder !== 'trash';
        },
        descClass() {
            if (!this.showPeek) return 'hide';
            else return '';
        },
    },
    methods: {
        toggleRead() {
            this.email.isRead = !this.email.isRead
            emailService.updateEmailProp(this.email.id, 'isRead', this.email.isRead);
        },
        displayControls() {
            this.showControls = true;
        },
        hideControls() {
            this.showControls = false;
        },
        deleteEmail(emailIdx) {
            emailService.removeEmail(emailIdx);
        },
        toggleStarred() {
            if (this.email.folder === 'trash') return;
            this.email.isStarred = !this.email.isStarred
            emailService.updateEmailProp(this.email.id, 'isStarred', this.email.isStarred);
        },
        openEmailPeek() {
            this.showPeek = !this.showPeek
            this.email.isRead = true;
            emailService.updateEmailProp(this.email.id, 'isRead', this.email.isRead);
        }
    }

}
