export default {
    name:'noteImg',
  template: `
        <div>
          <img :src="info.url" class="note-img"/>
            <h2>{{info.title}}</h2>
        </div>
          `,
  props: ["info"],
  data() {
    return {
      val: "",
    };
  },
};
