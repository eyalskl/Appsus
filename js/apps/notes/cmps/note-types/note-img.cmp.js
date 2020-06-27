export default {
    name: 'noteImg',
    template: `
    <div>
        <div v-if="!edit" class="note-desc">
          <img :src="info.url" class="note-img"/>
            <h2>{{info.title}}</h2>
            <i class="far fa-image note-type"></i>
        </div>
            <div v-else class="note-edit flex column align-center">
             <input type="text" v-model="url">
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