<template>
  <div class="todo-item" :class="{ done: todoItem.completed }">
    <label>
      <input
        type="checkbox"
        :checked="todoItem.completed"
        @click="$emit('change-state', $event)"
      />{{ todoItem.content }}
      <span class="check-button"></span>
    </label>
    <div id="hide" class="hide">
      <button>qweqwe</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoListItem",
  props: ["todoItem"],
  setup() {
    document.oncontextmenu = function () {
      return false;
      //或者 e.preventDefault()
    };
    document.onmouseup = function (event) {
      if (event.button == 2) {
        var x = event.pageX || event.clientX;
        var y = event.pageY || event.clientY;
        document.getElementById("hide").style.left = x-230 + "px";
        document.getElementById("hide").style.top = y-380 + "px";
        document.getElementById("hide").style.display = "block";
        //document.addEventListener("oncontextmenu",my);
        console.log("右键点击了" + x + " " + y);
      }
    };
  },
};
// function my() {
//   document.getElementById("hide").innerHTML = "";
// }
</script>

<style>
.todo-item div.hide {
  position: relative;
  left: 110px;
  top: 0px;
  display: none;
}
.todo-item {
  background: white;
  padding: 11px;
  border-radius: 8px;
  color: #626262;
}
.todo-item label {
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
  background: white;
}
.todo-item.done label {
  text-decoration: line-through;
  font-style: italic;
  
}
.todo-item label span.check-button {
  position: absolute;
  top: 0;
  
}
.todo-item label span.check-button::before,
.todo-item label span.check-button::after {
  content: "";
  display: block;
  position: absolute;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  
}
.todo-item label span.check-button::before {
  border: 1px solid #b382f9;
  
}
.todo-item label span.check-button::after {
  transition: 0.4s;
  background: #b382f9;
  transform: translate(1px, 1px) scale(0.8);
  opacity: 0;
}
.todo-item input {
  margin-right: 16px;
  opacity: 0;
  
}
.todo-item input:checked + span.check-button::after {
  opacity: 1;
 
}
</style>