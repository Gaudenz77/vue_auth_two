<script setup lang="ts">
import { ref } from 'vue'
import { useAuthStore } from '../stores/auth'
import { useRouter } from 'vue-router'
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'

const auth = useAuthStore()
const router = useRouter()
const email = ref('')
const password = ref('')
const username = ref('')

const handleRegister = async () => {
  const firebaseAuth = getAuth()
  try {
    const userCredential = await createUserWithEmailAndPassword(firebaseAuth, email.value, password.value)
    await updateProfile(userCredential.user, { displayName: username.value })
    router.push('/')
  } catch (error) {
    console.error('Registration error:', error)
  }
}
</script>

<template>
  <div class="hero min-h-screen bg-base-200">
    <div class="hero-content flex-col">
      <div class="text-center">
        <h1 class="text-5xl font-bold">Register</h1>
      </div>
      <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div class="card-body">
          <div class="form-control">
            <label class="label">
              <span class="label-text">Username</span>
            </label>
            <input type="text" v-model="username" placeholder="username" class="input input-bordered" required />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Email</span>
            </label>
            <input type="email" v-model="email" placeholder="email" class="input input-bordered" required />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Password</span>
            </label>
            <input type="password" v-model="password" placeholder="password" class="input input-bordered" required />
          </div>
          <div class="form-control mt-6">
            <button class="btn btn-primary" @click="handleRegister">Register</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
