export default {
    props:['todosAmount'],
template:`
<div>
<button @click="todosAmount++">+</button>
<input v-for="todo in todosAmount">
</div>
`,


}