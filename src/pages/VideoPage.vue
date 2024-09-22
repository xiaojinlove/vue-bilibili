<template>
  <div>视频 {{ videoid }}</div>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router'

const router = useRouter() //实体
console.log(router)

const route = useRoute()
console.log(route)

const { id: videoid } = route.params
// video1和video2之间切换，无法重新渲染组件
</script>
