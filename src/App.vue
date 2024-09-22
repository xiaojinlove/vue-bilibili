<template>
  <h1>我的项目</h1>
  <div>
    <router-link to="/">首页</router-link> | <router-link to="/login">登录</router-link> |
    <router-link to="/about">关于</router-link> |
    <router-link to="/video/video1">视频1</router-link> |
    <router-link to="/video/video2">视频2</router-link> |
  </div>
  <router-view></router-view>
  <div>footer</div>
</template>
<script setup></script>
