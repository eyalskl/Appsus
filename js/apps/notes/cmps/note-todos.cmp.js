export default {
    name: "noteTodos",
    template: `
            <ul class="clean-list note-desc">
              <li class="todo-task" v-for="(todo,idx) in info.todos" @click.prevent="addLinethrough(todo)"  :class="{done:todo.doneAt}">
                <p>{{todo.txt}}
                  </p>
                  <input type="checkbox"/>
                </li>
                <i class="fas fa-list note-type"></i> 
            </ul>

            `,
    props: ["info"],
    data() {
        return {
            val: "",
        };
    },
    computed: {},
    methods: {
        addLinethrough(todo) {
            if (todo.doneAt > 0) todo.doneAt = null;
            else todo.doneAt = Date.now();
        },

    },
    destroyed() {
        console.log(1)
    }
};