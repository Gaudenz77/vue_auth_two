<template>
  <div>
    <h1>My Profile</h1>
    <p>This is the My Profile page. Only authenticated users can see this.</p>
    
    <!-- Dummy Profile Details -->
    <div class="mt-4">
      <p><strong>Name:</strong> John Doe</p>
      <p><strong>Email:</strong> john.doe@example.com</p>
      <p><strong>Account Created:</strong> January 21, 2025</p>
    </div>
    
    <!-- Account Details Edit Button -->
    <div class="mt-4">
      <button class="btn btn-secondary">Edit Profile</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MyProfile',
})
</script>

<style scoped>
/* Add any specific styling for the profile page */
</style>
