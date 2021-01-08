<template>
  <div>
    <input
      v-model="inputField"
      v-on:keyup.enter="addTodo"
      placeholder="Todo Item"
    />
    <button
      @click="addTodo"
    >
      Add Todo
    </button>
      </div>
            <div>
                <ul>
                   <li
                    v-for="todo in todoList"
                    :key="todo"
                    >
                      <div>
                        <input
                          type="checkbox"
                          v-on:change="toggle(todo)"
                          v-bind:checked="todo.complete"
                        >
                        <del v-if="todo.complete">
                           <span class="task">{{ todo.task }}</span>
                        </del>
                        <span v-else>
                           <span class="task">{{ todo.task }}</span>
                        </span>
                        <button @click="deleteTodo(todo)">delete</button>
                      </div>
                   </li>
                </ul>
             </div>
</template>

<script lang="ts">

type Data = {
    inputField: string;
    todoList: [];
}

export default {

  methods: {
    addTodo(task: string) {
      // eslint-disable-next-line no-param-reassign
      task = this.inputField;
      this.todoList.push({ task, complete: false });
      this.inputField = '';
    },
    deleteTodo(todo: string) {
      const index = this.todoList.indexOf(todo);
      this.todoList.splice(index, 1);
    },
    toggle(todo: { complete: boolean }) {
      // eslint-disable-next-line no-param-reassign
      todo.complete = !todo.complete;
    },
  },
  data(): Data {
    return {
      inputField: '',
      todoList: [],
    };
  },
};
</script>

<style>
  .task {
    margin: 5px;
  }
</style>
