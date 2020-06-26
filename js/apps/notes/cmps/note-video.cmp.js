export default {
    name: 'noteVideo',
    template: `
        <div class="note-desc">
        <iframe width="200" height="240" :src="formattedUrl"/>
        </iframe>
            <h2>{{info.title}}</h2>
            <i class="fab fa-youtube note-type"></i>
        </div>
          `,
    props: ["info"],
    data() {
        return {
            val: "",
        };
    },

    computed:{
        formattedUrl(){
            console.log(this.info)
            return this.info.url.replace('watch?v=' , 'embed/')
        }
    }

};