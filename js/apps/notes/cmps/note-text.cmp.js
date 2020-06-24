export default {
    name:'noteText',
    template: `
          <div>
            <h3>{{info.txt}}</h3>
</div>
          `,
    props: ["info"],
    data() {
      return {
        val: ""
      };
    },
    methods: {
    //   reportVal() {
    //     this.$emit("setVal", this.val);
    //   }
    },
    computed: {
    //   listId() {
    //     return "list" + this._uid;
    //   }
    }
  };