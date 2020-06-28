import { utilsService } from '../../../services/utils.service.js';
import { emailService } from '../services/email.service.js';
import { eventBus } from '../../../services/event-bus.service.js'

import emailPeek from './email-peek.cmp.js'

export default {
    name: 'email-preview',
    props: ['email'],
    template: `
        <section class="email-preview">
            <li @click="openEmailPeek" @mouseover="displayControls" @mouseout="hideControls" class="email-preview flex space-between align-center" :class="isRead">
                <div :style="{ backgroundColor : randomBgc }" class="user-logo"> {{ firstLetterFrom }} </div>
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
            <email-peek v-if="email.isPeeked" :email="email"> </email-peek>
        </section>
        `,
    data() {
        return {
            showControls: false,
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
        firstLetterFrom() {
            return this.email.from.slice(0,1)
        },
        randomBgc() {
            return utilsService.getRandomColor()
        }
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
            var txt = (this.email.folder !== 'trash') ? 'The email was moved to trash' : 'The email is permenantly deleted!';
            eventBus.$emit('show-msg', {
                isVisible: true,
                txt,   
                type:'removed-email',
                showFor: 2000
            })
        },
        toggleStarred() {
            if (this.email.folder === 'trash') return;
            this.email.isStarred = !this.email.isStarred
            emailService.updateEmailProp(this.email.id, 'isStarred', this.email.isStarred);
        },
        openEmailPeek() {
            if (this.email.folder !== 'drafts') {
                this.email.isPeeked = !this.email.isPeeked
                this.email.isRead = true;
                emailService.updateEmailProp(this.email.id, 'isRead', this.email.isRead);
            } else {
                const mail = this.email
                this.$router.push(`compose?to=${mail.to}&subject=${mail.subject}&body=${mail.body}`)
            }
        }
    },
    components: {
        emailPeek
    }
}
