export default {
    name: 'noteText',
    props: ['info', 'edit'],
    template: `
        <div class="note-desc text-container">
            <div v-if="!editMode">
                <h3>{{info.txt}}</h3>
                <i class="fas fa-font note-type"></i>
            </div>
            <div v-else class="note-edit">
                <input v-model="txt" type="text" />
                <button @click.stop="confirmEdit"> Confirm </button>
            </div>
        </div>
          `,
    data() {
        return {
            txt: this.info.txt || '',

        }
    },
    methods: {
        confirmEdit() {
            this.$emit('doneEdit', done)
        }
    },
    computed: {

    }
};