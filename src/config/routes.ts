import { createRouter, createWebHashHistory } from 'vue-router';
const routes = [
  {
    path: '/',
    name: 'Home',
    component: import("@/pages/Home.vue"),
  },
  {
    path: '/login',
    name: 'Login',
    component: import("@/pages/Login.vue")
  },
  {
    path: '/settings',
    name: 'Settings',
    component: import("@/pages/Settings.vue")
  },
  {
    path: '/editor',
    name: 'ArticleEditor',
    component: import("@/pages/ArticleEditor.vue")
  },
  {
    path: '/article/:slug',
    name: 'Article',
    component: import("@/pages/Article.vue")
  },
  {
    path: '/profile/:username',
    name: 'Profile',
    component: import("@/pages/Profile.vue")
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router;