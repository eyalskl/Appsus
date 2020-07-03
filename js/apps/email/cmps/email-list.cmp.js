import emailPreview from "./email-preview.cmp.js";

export default {
    name: 'email-list',
    props: ['emails'],
    template: `
        <div>
            <ul class="email-list clean-list flex column align-center">
                <draggable v-bind="dragOptions" class="drag-zone" tag="div" :email="email"  @start="drag=true" @end="drag=false">
                    <transition-group class="transition-container flex wrap" type="transition"  :name="!drag ? 'flip-list' : null">
                        <email-preview v-for="email in emails" :email="email" :key="email.id"/>
                    </transition-group>
                </draggable>
            </ul>
        </div>
    `,
    data() {
        return {
            email: this.email,
            drag: false,
        }
    },
    components: {
        emailPreview,
    },
    computed: {
        dragOptions() {
            return {
                animation: 300,
                group: "description",
                disabled: false,
                ghostClass: "ghost"
            }
        },

    }
};