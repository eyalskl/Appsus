export default {
    name: 'noteVideo',
    template: `
    <div>
        <div class="note-desc">
        <iframe width="240" :src="formattedUrl"/>
        </iframe>
            <h2>{{info.title}}</h2>
            <i class="fab fa-youtube note-type"></i>
        </div>
        </div>
</div>
          `,
    props: ['info' , 'editMode'],
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
            return this.url.replace('watch?v=' , 'embed/')
        },
        created(){
            console.log(this.editMode)
        }

    }

};