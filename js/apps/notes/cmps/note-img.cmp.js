export default {
    name: 'noteImg',
    template: `
        <div class="note-desc">
          <img :src="info.url" class="note-img"/>
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
};