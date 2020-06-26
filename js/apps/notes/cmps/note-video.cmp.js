export default {
    name: 'noteVideo',
    template: `
    <div>
        <div v-if="!isEdit" class="note-desc">
        <iframe width="240" :src="formattedUrl"/>
        </iframe>
            <h2>{{info.title}}</h2>
            <i class="fab fa-youtube note-type"></i>
        </div>
        <div v-else>
            <input @input="changeSrc"/>
            <button></button>
        </div>
</div>
          `,
    props: {
        info: {
            type: Object,
            default: () => ({}),
            required: true,
        },
        isEdit: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            url: this.info.url || '',
            val: "",
        };
    },
    mounted() {
        // var player = new MediaElementPlayer('#player1');
    },
    computed:{
        formattedUrl(){
            console.log(this.info)
            return this.url.replace('watch?v=' , 'embed/')
        },
        changeSrc(value) {
            this.url = value; 
        },
    }

};