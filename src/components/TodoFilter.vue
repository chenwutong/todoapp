<template>
  <div class="filters">
    <span
      v-for="filter in filters"
      :key="filter.value"
      @click="$emit('change-filter', filter.value)"
      class="filter"
      :class="{ active: selected == filter.value }"
      >{{ filter.label }}
    </span>
  </div>
</template>

<script>
export default {
  name: "TodoFilte",
  props: ["selected"],
  setup() {
    const filters = [
      { label: "未完成", value: "todo" },
      { label: "已完成", value: "done" },
      //all 全部
    ];
    return { filters };
  },
};
</script>

<style>
.filters {
  display: flex;
  margin: 0 auto;
  color: #c0c2ce;
  font-size: 14px;
  cursor: pointer;
  font-size: 10%;
}
.filter {
  float: left;
  text-align: center;
}
.filters .filter {
  margin-right: 14px;
  transition: 0.8s;
}

.filters .filter.active {
  color: #6b729c;
  transform: scale(1.2);
}
</style>