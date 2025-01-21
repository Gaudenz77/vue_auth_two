<template>
  <div>
    <h1>My Library</h1>
    <p>This is the My Library page. Only authenticated users can see this.</p>
    
    <!-- Dummy Table for Library -->
    <table class="table-auto w-full mt-4">
      <thead>
        <tr>
          <th class="px-4 py-2">Book Title</th>
          <th class="px-4 py-2">Author</th>
          <th class="px-4 py-2">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="px-4 py-2">The Great Gatsby</td>
          <td class="px-4 py-2">F. Scott Fitzgerald</td>
          <td class="px-4 py-2"><button class="btn btn-primary">Details</button></td>
        </tr>
        <tr>
          <td class="px-4 py-2">1984</td>
          <td class="px-4 py-2">George Orwell</td>
          <td class="px-4 py-2"><button class="btn btn-primary">Details</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MyLibrary',
})
</script>

<style scoped>
/* Add any specific styling for the library page */
</style>
