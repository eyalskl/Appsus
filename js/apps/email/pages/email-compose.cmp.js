import { emailService } from "../services/email.service.js";
import { eventBus } from '../../../services/event-bus.service.js';
import { utilsService } from "../../../services/utils.service.js";

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
                    <textarea rows="15" type="text" v-model="emailToSend.body" ref="bodyInput" name="composeSubject" placeholder="Compose email" />    
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
            expandedMode: false,
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
            this.$router.push('/email');
        },
        saveAsDraft() {
            if (!this.emailToSend.to && !this.emailToSend.subject && !this.emailToSend.body) return this.$router.push('/email')
            emailService.sendNewMail(this.emailToSend, 'drafts')
            eventBus.$emit('show-msg', {
                isVisible: true,
                txt: 'The email was saved to drafs!',   
                type:'email-sent',
                showFor: 3000
            })
            this.$router.push('/email');
        },
        minimize() {
            this.minimizedMode = !this.minimizedMode;
        },
        expand() {
            this.expandedMode = !this.expandedMode;
        },
        sendMail() {
            emailService.sendNewMail(this.emailToSend, 'inbox')
            eventBus.$emit('show-msg', {
                isVisible: true,
                txt: 'The email was sent successfully!',   
                type:'email-sent',
                showFor: 3000
            })
            eventBus.$emit('email-added', true)
            this.$router.push('/email');
        }
    },
    computed: {
        minimized() {
            if (this.minimizedMode) return 'minimized';
            else if (this.expandedMode) return 'expanded';
            else return '';
        },
        minimizedIcon() {
            if (this.minimizedMode) return 'fa-window-maximize'
            else return 'fa-window-minimize'
        },
        isValid() {
            return !!this.emailToSend.to && !!this.emailToSend.subject
        }
    },
    mounted() {
        this.$refs.emailInput.focus();
    },
    created() {
        const get = utilsService.getParameterByName;
        const to = get('to');
        const subject = get('subject');
        const body = get('body');
        const from = get('from');
        if (!to && !subject && !body && !from) return
        else if (!from && !to) {
            this.emailToSend.body = body;
        }
        else if (!from) { 
            this.emailToSend.to = to;
            this.emailToSend.body = body;
        } else { 
            this.emailToSend.to = from;
            this.emailToSend.body = `On Fri, Jun 26, 2020 at 8:42 PM <${from}> wrote: "${body}"`;
            this.$refs.bodyInput.focus();
        }
            this.emailToSend.subject = subject;
    }
}