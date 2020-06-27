import { emailService } from '../services/email.service.js';
import { utilsService } from '../../../services/utils.service.js';
import { eventBus } from '../../../services/event-bus.service.js';

import emailFilter from '../cmps/email-filter.cmp.js'
import emailFolders from '../cmps/email-folders.cmp.js'

export default {
    name: 'email-desc',
    template: `
        <section class="email-app flex column">
            <email-filter @click.native="back"> </email-filter>
            <div class="flex">
                <email-folders @click.native="back"> </email-folders>

                <div v-if="email" class="email-desc flex column">
                    <button class="back-btn" @click="back">
                         <i class="fas fa-arrow-left"></i> 
                    </button>
                    <div class="desc-header flex space-between">
                        <h1 class="desc-subject"> {{ email.subject }} </h1>
                        <div class="desc-controls">
                        <button @click.stop="replyToEmail" title="Replay"> 
                            <i class="fas fa-reply"></i> 
                        </button>
                        <button @click.stop="deleteEmail(email.id)" title="Delete"> 
                                <i class="fas fa-trash"></i> 
                            </button>
                        </div>
                    </div>
                    <div class="from-container flex align-center">
                        <div :style="{ backgroundColor : randomBgc }" class="user-logo"> {{ firstLetterFrom }} </div>
                        <p class="desc-from">
                             {{ email.from }} 
                             <span> <{{ email.fromEmail }}> </span> 
                        </p>
                    </div>
                    <p class="desc-body"> {{ email.body }} </p>
                </div>
                
            </div>
        </section>
    `,
    data() {
        return {
            email: null,
        }
    },
    methods: {
        loadEmail() {
            const { emailId } = this.$route.params;
            emailService.getById(emailId)
                .then(email => {
                    this.email = email;
                })
        },
        back() {
            this.$router.back()
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
            this.back()
        },
        replyToEmail() {
            const mail = this.email;
            this.$router.push(`/compose?from=${mail.fromEmail}&subject=${mail.subject}&body=${mail.body}`)
        }
    },
    computed: {
        firstLetterFrom() {
            return this.email.from.slice(0,1)
        },
        randomBgc() {
            return utilsService.getRandomColor()
        }
    },
    created() {
        this.loadEmail()
      },
    watch: {
        '$route.params.emailId'() {
            this.loadEmail();
        },
    },
    components: {
        emailFilter,
        emailFolders
    },
}