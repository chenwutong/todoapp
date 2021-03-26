<template>
  <main>
    <el-container>
      <el-header >
        <div class="topmenu"></div>
      </el-header>
      <el-container>
        <el-aside
        width="250px">
          Aside</el-aside>
        <el-main>
        <todo-show></todo-show>
        
          <todo-add :tid="todos.length" @add-todo="addTodo"></todo-add>
          <todo-filter
            :selected="filter"
            @change-filter="filter = $event"
          ></todo-filter>
          <todo-list :todos="filteredTodos"></todo-list>
        </el-main>
      </el-container>
    </el-container>
    <!-- <div
      style="
        margin: 0 auto;
        width: 70%;
        position: fixed;
        bottom: 5px;
        height: 50px;
        font-size: 0;
        line-height: 0;
        z-index: 100;
        text-align: right;
      "
    >
      <Button
        ID="Button2"
        Style="width: 150px; height: 50px; text-decoration: none;"
        runat="server"
        Text="Apply Order"
      />
    </div> -->
  </main>
</template>

<script>
//import { computed,ref } from "vue";
import TodoAdd from "./components/TodoAdd.vue";
import TodoFilter from "./components/TodoFilter.vue";
import TodoList from "./components/TodoList.vue";
import useTodos from "./composables/useTodos";
import useFilteredTodos from "./composables/useFilteredTodos";
import todoShow from"./components/todoShow";
import TodoShow from './components/todoShow.vue';
export default {
  name: "App",
  components: { TodoAdd, TodoFilter, TodoList, TodoShow },
  setup() {
    const { todos, addTodo } = useTodos();
    const { filter, filteredTodos } = useFilteredTodos(todos);

    return {
      todos,
      addTodo,
      filter,
      filteredTodos,
      todoShow,
    };
  },
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 2px;
  padding: 0;
  background-color: rgb(245, 246, 252);

  font-family: Helvetica, "PingFang SC", "Microsoft Yahei", sans-serif;
}
/* 整个页面 */



/* 标题 */
h1 {
  margin: 24px 0;
  font-size: 28px;
  color: #414873;
}
.jiange{
  height: 10px;
  background-color:rgb(245, 246, 252);

}
.el-header {
  margin:3px;
  width: 99%;
  max-width: 100%;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.15);
  border-radius: 15px;
  padding: 30px 130px;
  background-color: rgb(245, 246, 252);
  text-align: center;
  line-height: 120px;
  height:90px
}

.el-aside {
  margin:3px;
  width: 100%;
  max-width: 100%;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.15);
  border-radius: 15px;
  padding: 50px 100px;
  background-color: rgb(245, 246, 252);
  text-align: center;
  height: 600px;
}

.el-main {
  margin:3px;
  color: #333;
  width: 100%;
  max-width: 100%;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.15);
  border-radius: 15px;
  padding: 200px 160px;
  background-color:rgb(245, 246, 252);
  text-align: center;
  height: 600px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
