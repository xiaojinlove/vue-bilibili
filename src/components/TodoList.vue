<template>
  <div>
    <h1>hi {{ title }}</h1>
    <!-- <div @click="add">{{ count }}</div> -->
    <input type="text" v-model="val" @keypress.enter="addTodo" />
    <button @click="addTodo">add</button>
    <button @click="clearTodo" v-if="doneCount > 0">clear</button>
    <ul>
      <li v-for="(todo, index) in todos" :key="index">
        <input type="checkbox" v-model="todo.done" />
        <span>{{ todo.title }}</span>
      </li>
    </ul>
    <div>
      <div><input type="checkbox" v-model="allDone" />Select All</div>
      {{ doneCount }}
      /
      {{ todos.length }}
    </div>
  </div>
</template>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true
    },
    itemkey: {
      type: String,
      required: true,
      default: 'todos'
    }
  },
  data() {
    return {
      count: 1,
      val: '',
      todos: localStorage.getItem(this.itemkey)
        ? JSON.parse(localStorage.getItem(this.itemkey))
        : [
            { title: '吃饭', done: true },
            { title: '睡觉', done: false }
          ]
    }
  },
  watch: {
    todos: {
      handler() {
        localStorage.setItem(this.itemkey, JSON.stringify(this.todos))
      },
      deep: true,
      immediate: true
    }
  },
  computed: {
    allDone: {
      get() {
        return this.doneCount === this.todos.length
      },
      set(value) {
        this.todos.forEach((v) => (v.done = value))
      }
    },
    doneCount() {
      return this.todos.filter((v) => v.done).length
    }
  },
  methods: {
    add() {
      this.count++
    },
    addTodo() {
      this.todos.push({
        title: this.val,
        done: false
      })
      this.val = ''
    },
    clearTodo() {
      this.todos = this.todos.filter((v) => !v.done)
    }
  }
})
</script>
<style></style>
