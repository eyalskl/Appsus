

export default {
    name: 'email-preview',
    props: ["email"],
    template: `
        <li class="email-preview flex space-between" :class="isRead">
            <div class="flex from"> {{ email.from }} </div>
            <div class="flex subject"> {{ email.subject }} </div>
            <div class="flex body"> {{ email.body }} </div>
            <div class="flex sentAt"> {{ sentAt }} </div>
        </li>
        `,
    computed: {
        sentAt() {
            return new Date(this.email.sentAt).toDateString()
        },
        isRead() {
            if (this.email.isRead) return 'read';
            else return 'unread';
        }
    }

}
