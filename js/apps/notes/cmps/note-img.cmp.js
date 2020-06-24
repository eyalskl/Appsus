export default {
    name:'noteImg',
  template: `
        <div>
            <h2>{{info.title}}</h2>
             <img :src="info.url" class="note-img"/>
        </div>
          `,
  props: ["info"],
  data() {
    return {
      val: "",
    };
  },
};
