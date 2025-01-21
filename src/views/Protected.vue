<template>
    <div>
      <h1>Protected Page</h1>
      <p>Welcome to the protected page! You must be logged in to view this content.</p>
    </div>
  </template>
  
  <script setup lang="ts">
  import { onMounted } from "vue";
  import { useRouter } from "vue-router";
  import { auth } from "../firebaseConfig";
  
  const router = useRouter();
  
  // Ensure the user is authenticated when accessing this page
  onMounted(() => {
    const currentUser = auth.currentUser;
    if (!currentUser) {
      router.push("/login"); // Redirect to login if not authenticated
    }
  });
  </script>
  