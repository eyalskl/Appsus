export default {
    template: `
        <section class="email-folders flex column">
            <div @click="setFolder('inbox')" class="inbox">
                <span> <i class="fas fa-inbox"></i> </span> 
                Inbox
            </div>
            <div @click="setFolder('starred')" class="starred">
                <span> <i class="fas fa-star"></i> </span>
                Starred
            </div>
            <div @click="setFolder('trash')" class="deleted">
                <span> <i class="fas fa-trash"></i> </span>
                Trash
            </div>
        </section>
    `,
    data() {
        return {
            folderToDisplay: 'inbox',
        };
    },
    computed: {

    },
    methods: {
        setFolder(folder) {
            console.log('folder:', folder)
            this.folderToDisplay = folder
        }
    },
    created() {

    },
    components: {

    },
}