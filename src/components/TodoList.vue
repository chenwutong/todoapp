<template>
  <div class="todo-list">
      <todo-list-item v-for="todo in todos" 
      :key="todo.id" 
      :todo-item="todo"
      @change-state="todo.completed = $event.target.checked"
      ></todo-list-item>
  </div>
</template>

<script>
import TodoListItem from './TodoListItem.vue';
export default {
  components: { TodoListItem },
  name: "TodoList",
  props:["todos"],
  };
</script>

<style>
.todo-list {
  display: grid;
  row-gap: 0.3px;
  position: relative;
  
  
}

</style>