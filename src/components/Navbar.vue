<template>
  <div class="navbar bg-base-100">
    <div class="flex-1">
      <router-link to="/" class="btn btn-ghost text-xl">Auth App</router-link>
    </div>

    <!-- Mobile Menu (for smaller screens) -->
    <div class="flex-none lg:hidden">
      <div class="dropdown dropdown-end">
        <label tabindex="0" class="btn m-1">Menu</label>
        <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/mylibrary">Library</router-link></li>
          <li><router-link to="/myprofile">Profile</router-link></li>
          <li v-if="auth.isAuthenticated"><a @click="auth.logout">Logout</a></li>
          <li v-else><router-link to="/login">Login</router-link></li>
          <li v-else><router-link to="/register">Register</router-link></li>
        </ul>
      </div>
    </div>

    <!-- Navbar Links for Larger Screens -->
    <div class="hidden lg:flex flex-1 justify-center gap-4">
      <router-link to="/" class="nav-link text-xl">Home</router-link>
      <router-link to="/mylibrary" class="nav-link text-xl">Library</router-link>
      <router-link to="/myprofile" class="nav-link text-xl">Profile</router-link>

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
/* Adjust navbar links to make the layout look better */
.nav-link {
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #4f46e5; /* Blue color on hover */
}

/* Optional: Additional styling for the theme toggle button */
</style>
