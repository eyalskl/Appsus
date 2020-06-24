import emailPreview from "./email-preview.cmp.js";

export default {
  props: ["emails"],
  template: `
        <ul class="emil-list clean-list flex column align-center">
            <email-preview v-for="email in emails" :email="email" :key="email.id"/>
        </ul>
    `,
  components: {
    emailPreview,
  },
  methods: {
    // openEmailDesc(emailId) {
    //   this.$router.push('/email/' + emailId)
    // },
  },
};


// @click.native="openemailDesc(email.id)"