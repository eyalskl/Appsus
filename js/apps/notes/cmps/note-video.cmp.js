export default {
    name: 'noteVideo',
    template: `
        <div class="note-desc">
        <video controls="true">
        <source :src="info.url" type="video/mp4" />
        </video>
            <h2>{{info.title}}</h2>
            <i class="far fa-image note-type"></i>
        </div>
          `,
    props: ["info"],
    data() {
        return {
            val: "",
        };
    },
    created() {
        this.info.url
    }
};