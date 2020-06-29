import { emailService } from '../services/email.service.js';
import { noteService } from '../../notes/services/note-service.js';
import { eventBus } from '../../../services/event-bus.service.js'

export default {
    name: 'email-peek',
    props: ['email'],
    template: `
        <li class="email-peek flex column">
                <div class="peek-header flex space-between">
                    <h3 class="peek-subject"> {{ email.subject }} </h3>
                    <div class=peek-controls>
                        <router-link :to="'email/' + email.id"> <i class="fas fa-expand"></i> </router-link>
                        <button @click.stop="replyToEmail" title="Replay"> <i class="fas fa-reply"></i> </button>
                        <button @click.stop="saveAsNote" title="Save as a Note"> <i class="fas fa-paper-plane"></i> </button>
                        <button @click.stop="deleteEmail(email.id)" title="Delete"> <i class="fas fa-trash"></i> </button>
                    </div>
                </div>
                <p class="peek-from"> {{ email.from }} <span> <{{ email.fromEmail }}> </span> </p>
                <p class="peek-body"> {{ email.body }} </p>
            </li>
    `,
    methods: {
        saveAsNote() {
            let newNote = noteService.getEmptyNoteByType('noteText')
            newNote.info.txt = `E-Mail Subject - ${this.email.subject}` + '\n\n' + `${this.email.from} Wrote: "${this.email.body}"`
            noteService.addNewNote(newNote);  
            this.$router.push('/notes');
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
        replyToEmail() {
            const mail = this.email;
            this.$router.push(`compose?from=${mail.fromEmail}&subject=Re:${mail.subject}&body=${mail.body}`);
        }
    },
    destroyed() {
        this.email.isPeeked = false;
    },
    created() {
        emailService.clearPeeked();
        this.email.isPeeked = true
    },
}