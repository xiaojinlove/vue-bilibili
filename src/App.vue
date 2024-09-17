<template>
  <!-- <TodoList title="清单1号" itemkey="todos-bilibili"></TodoList> -->
  <RateComponent :value="2" @update="notice">电影评分</RateComponent>
</template>
<script setup>
import TodoList from './components/TodoList.vue'
import RateComponent from './components/RateComponent.vue'

// 1. 组件内部的渲染和逻辑
// 2. 组件的输入
// 3. 组件的输出
function notice(val) {
  console.log(val)
}
</script>
