import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAuthStore = defineStore('auth', () => {
  const user = ref<{ email: string } | null>(null)
  const isAuthenticated = ref(false)

  function login(email: string, password: string) {
    // In a real app, you would make an API call here
    user.value = { email }
    isAuthenticated.value = true
  }

  function register(email: string, password: string) {
    // In a real app, you would make an API call here
    user.value = { email }
    isAuthenticated.value = true
  }

  function logout() {
    user.value = null
    isAuthenticated.value = false
  }

  return { user, isAuthenticated, login, register, logout }
})