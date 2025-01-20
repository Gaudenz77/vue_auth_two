<script setup lang="ts">
import { ref } from 'vue'
import { useAuthStore } from '../stores/auth'

const auth = useAuthStore()
const themes = ['light', 'dark', 'cyberpunk']
const currentTheme = ref('light')

const changeTheme = (theme: string) => {
  currentTheme.value = theme
  document.documentElement.setAttribute('data-theme', theme)
}
</script>

<template>
  <div class="navbar bg-base-100">
    <div class="flex-1">
      <router-link to="/" class="btn btn-ghost text-xl">Auth App</router-link>
    </div>
    <div class="flex-none gap-2">
      <div class="dropdown dropdown-end">
        <label tabindex="0" class="btn m-1">Theme</label>
        <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
          <li v-for="theme in themes" :key="theme">
            <a @click="changeTheme(theme)" :class="{ 'active': currentTheme === theme }">
              {{ theme }}
            </a>
          </li>
        </ul>
      </div>
      <div v-if="auth.isAuthenticated" class="dropdown dropdown-end">
        <label tabindex="0" class="btn m-1">{{ auth.user?.email }}</label>
        <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
          <li><a @click="auth.logout">Logout</a></li>
        </ul>
      </div>
      <template v-else>
        <router-link to="/login" class="btn btn-ghost">Login</router-link>
        <router-link to="/register" class="btn btn-ghost">Register</router-link>
      </template>
    </div>
  </div>
</template>