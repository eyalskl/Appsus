export default {
  name: "noteTodos",
  template: `
            <ul class="clean-list">
              <li v-for="todo in info.todos">
                <p>{{todo.txt}}</p> 
                <p>{{todo.doneAt}}</p> 

              </li>
            </ul>

            `,
  props: ["info"],
  data() {
    return {
      val: "",
    };
  },
};
