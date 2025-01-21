<template>
  <div class="container mx-auto p-6">
    <h1 class="text-3xl font-bold mb-4">My Profile</h1>
    <p class="text-lg mb-6">This is the My Profile page. Only authenticated users can see this.</p>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <!-- Profile Details -->
      <div class="bg-base-100 p-4 rounded-lg shadow-md">
        <h2 class="text-xl font-semibold mb-4">Profile Details</h2>
        <p class="mb-2"><strong>Name:</strong> John Doe</p>
        <p class="mb-2"><strong>Email:</strong> {{ auth.user?.email }}</p>
        <p class="mb-2"><strong>Account Created:</strong> January 21, 2025</p>
      </div>

      <!-- Edit Profile Section -->
      <div class="bg-base-100 p-4 rounded-lg shadow-md flex flex-col justify-between">
        <h2 class="text-xl font-semibold mb-4">Manage Account</h2>
        <p class="mb-4">You can edit your account details or reset your password here.</p>
        <button class="btn btn-secondary w-full">Edit Profile</button>
        <button class="btn btn-outline mt-2 w-full">Reset Password</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useAuthStore } from '../stores/auth'

export default defineComponent({
  name: 'MyProfile',
  setup() {
    const auth = useAuthStore()
    return { auth }
  }
})
</script>

<style scoped>
/* Additional styling if needed */
</style>
