export default {
    name: 'noteText',
    props: ['info', 'edit'],
    template: `
        <div class="note-desc text-container">
                <div class="another-container note-text" v-if="!edit">
                    <h4>{{info.txt}}</h4>
                    <i class="fas fa-font note-type"></i>
                </div>
                <div v-else class="note-edit flex column align-center">
                    <input v-model="txt" @keyup.enter="confirmEdit" type="text" />
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
            this.$emit('doneEditText', false, this.txt)
        }
    },
    computed: {

    }
};