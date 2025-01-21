import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import MyLibrary from '../views/MyLibrary.vue'
import MyProfile from '../views/MyProfile.vue'
import { useAuthStore } from '../stores/auth'

const authGuard = (to: any, from: any, next: any) => {
  const auth = useAuthStore()
  if (auth.isAuthenticated) {
    next()
  } else {
    next('/login')
  }
}

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    {
      path: '/mylibrary',
      component: MyLibrary,
      beforeEnter: authGuard,
    },
    {
      path: '/myprofile',
      component: MyProfile,
      beforeEnter: authGuard,
    },
  ],
})

export default router
