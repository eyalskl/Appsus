export default {
    name: 'noteText',
    template: `
          <div class="note-desc">
            <h3>{{info.txt}}</h3>
            <i class="fas fa-font note-type"></i>
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