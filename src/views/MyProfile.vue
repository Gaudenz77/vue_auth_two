<script lang="ts">
import { defineComponent, ref } from 'vue'
import { getAuth, updateProfile, updateEmail, sendPasswordResetEmail } from 'firebase/auth'

export default defineComponent({
  name: 'MyProfile',
  setup() {
    const firebaseAuth = getAuth()
    const user = firebaseAuth.currentUser
    const displayName = ref(user?.displayName || '')
    const email = ref(user?.email || '')
    const newPassword = ref('')

    const updateProfileDetails = async () => {
      try {
        if (user) {
          await updateProfile(user, { displayName: displayName.value })
          await updateEmail(user, email.value)
          alert('Profile updated successfully!')
        }
      } catch (error) {
        console.error('Profile update error:', error)
        alert('Failed to update profile. Please try again.')
      }
    }

    const resetPassword = async () => {
      try {
        if (user && user.email) {
          await sendPasswordResetEmail(firebaseAuth, user.email)
          alert('Password reset email sent. Please check your inbox.')
        }
      } catch (error) {
        console.error('Password reset error:', error)
        alert('Failed to send password reset email. Please try again.')
      }
    }

    return { displayName, email, newPassword, updateProfileDetails, resetPassword }
  }
})
</script>

<template>
  <div class="container mx-auto p-6">
    <h1 class="text-3xl font-bold mb-4">My Profile</h1>
    <p class="text-lg mb-6">This is the My Profile page. Only authenticated users can see this.</p>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <!-- Profile Details -->
      <div class="bg-base-100 p-4 rounded-lg shadow-md">
        <h2 class="text-xl font-semibold mb-4">Profile Details</h2>
        <div class="form-control mb-4">
          <label class="label">
            <span class="label-text">Name</span>
          </label>
          <input type="text" v-model="displayName" class="input input-bordered" />
        </div>
        <div class="form-control mb-4">
          <label class="label">
            <span class="label-text">Email</span>
          </label>
          <input type="email" v-model="email" class="input input-bordered" />
        </div>
        <button class="btn btn-primary w-full" @click="updateProfileDetails">Save Changes</button>
      </div>

      <!-- Manage Account -->
      <div class="bg-base-100 p-4 rounded-lg shadow-md flex flex-col justify-between">
        <h2 class="text-xl font-semibold mb-4">Manage Account</h2>
        <p class="mb-4">You can edit your account details or reset your password here.</p>
        <button class="btn btn-outline w-full" @click="resetPassword">Reset Password</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Additional styling if needed */
</style>
