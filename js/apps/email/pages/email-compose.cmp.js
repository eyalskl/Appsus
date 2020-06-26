import { emailService } from "../services/email.service.js";
import { eventBus } from '../../../services/event-bus.service.js';

export default {
    name: 'email-compose',
    template: `
        <div class="email-compose flex column" :class="minimized">
            <div @click.stop="minimize" class="compose-header flex space-between align-center"> 
                <p> New Message </p> 
                <div class="header-controls flex">
                    <button @click.stop="minimize" title="Minimize"> <i class="far" :class="minimizedIcon"></i> </button>
                    <button @click.stop="saveAsDraft" title="Save and close"> <i class="fas fa-times"></i> </button>
                </div>
            </div>
            <section v-show="!minimizedMode">
                <div class="compose-to"> 
                    <input type="email" ref="emailInput" v-model="emailToSend.to" name="composeTo" placeholder="To">    
                </div>
                <div class="compose-subject"> 
                    <input type="text" name="composeSubject" v-model="emailToSend.subject" placeholder="Subject">    
                </div>
                <div class="compose-body"> 
                    <textarea rows="15" type="text" v-model="emailToSend.body" name="composeSubject"/>    
                </div>
                <div class="compose-footer flex space-between align-center"> 
                    <button :disabled="!isValid" title="Send" @click.stop="sendMail"> Send </button>
                    <button @click="backToEmail" title="Discard draft"> <i class="fas fa-trash"></i> </button>
                </div>
            </section>
        </div>
    `,
    data() {
        return {
            minimizedMode: false,
            emailToSend: {
                fromEmail: 'Nadav-Eyal@gmail.com',
                to: '',
                subject: '',
                body: ''
            }
        }
    },
    methods: {
        backToEmail() {
            this.$router.back();
        },
        saveAsDraft() {
            emailService.sendNewMail(this.emailToSend, 'drafts')
            this.$router.back();
        },
        minimize() {
            this.minimizedMode = !this.minimizedMode;
            console.log('this.minimizedMode:', this.minimizedMode)
        },
        sendMail() {
            emailService.sendNewMail(this.emailToSend, 'inbox')
            eventBus.$emit('email-added', true)
            this.$router.back();
        }
    },
    computed: {
        minimized() {
            if (this.minimizedMode) return 'minimized';
            else return '';
        },
        minimizedIcon() {
            if (this.minimizedMode) return 'fa-window-maximize'
            else return 'fa-window-minimize'
        },
        isValid() {
            return !!this.emailToSend.to && !!this.emailToSend.subject
        }
    }

}