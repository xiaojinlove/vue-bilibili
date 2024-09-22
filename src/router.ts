import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from './pages/HomePage.vue'
import Login from './pages/LoginPage.vue'
import Video from './pages/VideoPage.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/login', component: Login },
  { path: '/about', component: () => import('./pages/AboutPage.vue') },
  { path: '/video/:id', component: Video }
]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})

export default router
