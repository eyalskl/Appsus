

export default {
    props: ['msgData'],
    template: `
    <div :class="checkType" v-if="msgData.isVisible" class="user-msg">
        <button @click="toggleShow"> x </button>
        <h3> <i class="fas" :class="checkClassType"></i> {{ headerTxt }}! </h3>
        <p> {{ msgData.txt }} </p>
        <router-link v-if="msgData.link" :to="msgData.link">Check it Out</router-link>
    </div>
    `,
    methods: {
        toggleShow() {
            this.msgData.isVisible = !this.msgData.isVisible
        }
    },
    watch: {
        msgData(newValue) {
          if (newValue) setTimeout(() => {
            this.msgData.isVisible = false
          }, this.msgData.showFor);
        }
    },
    computed: {
        checkType() {
            if (this.msgData.type === 'success') return 'success';
            else if (this.msgData.type === 'email-sent') return 'sent'
            else if (this.msgData.type === 'removed-email') return 'removed-email'
            else return 'removed'
        },
        checkClassType() {
            if (this.msgData.type === 'success' || this.msgData.type ==='email-sent') return 'fa-check';
            else return 'fa-times'
        },
        headerTxt() {
            if (this.msgData.type === 'success') return 'Success'
            if (this.msgData.type === 'removed') return 'Removed'
            if (this.msgData.type === 'removed-email') return 'Removed'
            if (this.msgData.txt === 'The email was saved to drafs!') return 'Saved'
            if (this.msgData.type === 'email-sent') return 'Sent'
        }
    },
    created() {

    }
}