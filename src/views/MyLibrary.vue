<!-- filepath: /home/ktoomatgo/Documents/vueongo_24_main/vue_auth_two/src/views/MyLibrary.vue -->
<template>
  <div>
    <h1>My Library</h1>
    <p>This is the My Library page. Only authenticated users can see this.</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MyLibrary',
})
</script>