<template>
  <div class="navbar bg-base-100">
    <div class="flex-1">
      <router-link to="/" class="btn btn-ghost text-xl">Auth App</router-link>
    </div>
    <div class="flex-none gap-2">
      <!-- Theme Toggle Button -->
      <div class="dropdown dropdown-end">
        <label tabindex="0" class="btn m-1">Change Theme</label>
        <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
          <li v-for="theme in themes" :key="theme">
            <a @click="changeTheme(theme)">{{ theme.charAt(0).toUpperCase() + theme.slice(1) }}</a>
          </li>
        </ul>
      </div>
      
      <!-- Authenticated User Dropdown -->
      <div v-if="auth.isAuthenticated" class="dropdown dropdown-end">
        <label tabindex="0" class="btn m-1">{{ auth.user?.email }}</label>
        <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/mylibrary">My Library</router-link></li>
          <li><router-link to="/myprofile">My Profile</router-link></li>
          <li><a @click="auth.logout">Logout</a></li>
        </ul>
      </div>

      <!-- Not Authenticated User Links -->
      <template v-else>
        <router-link to="/login" class="btn btn-ghost">Login</router-link>
        <router-link to="/register" class="btn btn-ghost">Register</router-link>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useAuthStore } from '../stores/auth'

const auth = useAuthStore()
const themes = ['light', 'dark', 'cyberpunk']  // Available themes
const currentTheme = ref(localStorage.getItem('theme') || 'light')  // Use localStorage to persist the theme

// Change theme and store it in localStorage
const changeTheme = (theme: string) => {
  currentTheme.value = theme
  document.documentElement.setAttribute('data-theme', theme)
  localStorage.setItem('theme', theme)  // Persist theme in localStorage
}

// Initialize the theme on page load based on stored value
document.documentElement.setAttribute('data-theme', currentTheme.value)
</script>

<style scoped>
/* Add any specific styling for the theme toggle button */
</style>
