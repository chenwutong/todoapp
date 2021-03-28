<template>
  <div class="todo-file">
    <div class="todo-file-item">
      <button>
        <div class="photo"> 图标 </div>
        今天
      </button>
      <button>
        <div class="photo">图标</div>
        明天
      </button>
      <button>
        <div class="photo">图标</div>
        即将到来
      </button>
      <button>
        <div class="photo">图标</div>
        待定
      </button>
    </div>
    <div class="block"></div>
    <div class="line01"></div>
    <div class="todo-file-list">
       <todo-file-list></todo-file-list>
    </div>
    <div class="todo-add">
      <button class="add-button">新建清单</button>
    </div>
  </div>
</template>

<script>
import TodoFileList from './TodoFileList.vue';

export default {
  components: { TodoFileList },};
</script>

<style>
.todo-file {
  border: 12px;
  position: relative;
}
.photo {
  float: left;
  margin: 2px;
}
.todo-file-item button {
  position: relative;
  background: white;
  padding: 0px;
  border: 0px;
  height: 34px;
  top: 5px;
  border-radius: 7px;
  width: 240px;
  float: left;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.15);
  margin: 2px;
  text-align: left;
}
.todo-file-item {
  background: #f5f6fc;
  padding: 0px;
  height: 140px;
  border-radius: 8px;
  color: #626262;
  position: relative;
}
.todo-list {
  overflow: auto;
}
.todo-add {
  position: absolute;
  z-index: 9999999;

  width: 200px;
  left: 15px;
  top: 569px;
  background: aquamarine;
}
.todo-add button {
  background: antiquewhite;
}
.todo-file hr {
  background: white;
  color: white;
  left: px;
  width: 200px;

  size: 1;
  text-align: center;
}
.add-button {
  color: black;
}
.line01 {
  position: relative;
  height: 2px;
  border-top: 1px solid black;
  text-align: center;
  width: 240px;
  top: 1px;
  
}
.block {
  top: 90px;
  margin:25px;
}
.line01 span {
  position: relative;
  top: -8px;
  background: #fff;
  padding: 0 20px;
}
</style>