<template>
  <span>
    <slot />
  </span>
  <span @mousemove="tryUpdate">
    {{ score }}
  </span>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    value: {
      type: Number,
      required: true
    }
  },
  computed: {
    score() {
      return '0123456789'.slice(5 - this.value, 10 - this.value)
    }
  },
  methods: {
    tryUpdate() {
      this.$emit('update', 'hello' + this.value)
    }
  }
})
</script>
