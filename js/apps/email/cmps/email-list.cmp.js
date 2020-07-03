import emailPreview from "./email-preview.cmp.js";

export default {
    name: 'email-list',
    props: ['emails'],
    template: `
        <ul class="email-list clean-list flex column align-center">
            <email-preview v-for="email in emails" :email="email" :key="email.id"/>
        </ul>
    `,
    components: {
        emailPreview,
    }
};