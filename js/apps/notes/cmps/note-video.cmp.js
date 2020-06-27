export default {
  name: "noteVideo",
  template: `
    <div>
        <div v-if="!edit" class="note-desc">
            <iframe width="240" :src="formattedUrl"/>
            </iframe>
            <h2>{{info.title}}</h2>
            <i class="fab fa-youtube note-type"></i>
        </div>
         <div v-else class="note-edit">
             <input type="text" v-model="url">
             <button @click="confrimEdit">confirm</button>
         </div>
    </div>
          `,
    props: ['info' , 'edit'],
    data() {
        return {
      url: this.info.url || "",
        };
    },
    methods: {
        confrimEdit(){
           this.$emit('doneEdit' , false , this.url)
        }
    },
    computed:{
        formattedUrl(){
            return this.url.replace('watch?v=' , 'embed/')
        },
    },
created(){
    console.log(this.edit)
}

};
