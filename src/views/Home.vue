<script setup lang="ts">
import { useAuthStore } from '../stores/auth'
import BingoGenerator from '../components/BingoGenerator.vue';

const auth = useAuthStore()
</script>

<template>
  <div class="hero min-h-screen bg-base-200">
    <div class="hero-content text-center">
      <div class="max-w-md">
        <h1 class="text-5xl font-bold" v-if="auth.isAuthenticated">
          Welcome, {{ auth.user?.email }}!
        </h1>
        <h1 class="text-5xl font-bold" v-else>
          Welcome to Auth App
        </h1>
        <p class="py-6" v-if="!auth.isAuthenticated">
          Please login or register to continue.
        </p>
        <p class="py-6" v-else>
          You are now authenticated and can access all features.
        </p>
        <p>
          <BingoGenerator  v-if="auth.isAuthenticated" />
        </p>
      </div>
    </div>
  </div>
</template>