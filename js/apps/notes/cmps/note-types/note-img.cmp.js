export default {
    name: 'noteImg',
    template: `
    <div>
        <div v-if="!edit" class="note-desc">
            <img :src="info.url" class="note-img"/>
            <div class="content-container">
                <h3>{{info.title}}</h3>
                <i class="far fa-image note-type"></i>
            </div>
        </div>
        <div v-else class="note-edit flex column align-center">
            <input type="text" @keyup.enter="confirmEdit" v-model="url">
            <button @click="confirmEdit">confirm</button>
        </div>
    </div>
          `,
    props: ["info" , "edit"],
    data() {
        return {
            url: this.info.url || "",
        };
    },
    methods: {
        confirmEdit(){
           this.$emit('doneEditSrc' , false , this.url)
        }
    }
};