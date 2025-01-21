<template>
  <div class="container mx-auto p-6">
    <h1 class="text-3xl font-bold mb-4">My Library</h1>
    <p class="text-lg mb-6">This is the My Library page. Only authenticated users can see this.</p>
    
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <!-- Books Table -->
      <div class="lg:col-span-2 bg-base-100 p-4 rounded-lg shadow-md">
        <h2 class="text-xl font-semibold mb-4">Books in Library</h2>
        <table class="table-auto w-full">
          <thead>
            <tr class="text-left border-b">
              <th class="px-4 py-2">Book Title</th>
              <th class="px-4 py-2">Author</th>
              <th class="px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="px-4 py-2">The Great Gatsby</td>
              <td class="px-4 py-2">F. Scott Fitzgerald</td>
              <td class="px-4 py-2">
                <button class="btn btn-primary">Details</button>
              </td>
            </tr>
            <tr>
              <td class="px-4 py-2">1984</td>
              <td class="px-4 py-2">George Orwell</td>
              <td class="px-4 py-2">
                <button class="btn btn-primary">Details</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Sidebar for Recommendations -->
      <div class="bg-base-100 p-4 rounded-lg shadow-md">
        <h2 class="text-xl font-semibold mb-4">Recommended Books</h2>
        <ul class="space-y-2">
          <li class="flex justify-between items-center">
            <span>To Kill a Mockingbird</span>
            <button class="btn btn-sm btn-outline">View</button>
          </li>
          <li class="flex justify-between items-center">
            <span>The Catcher in the Rye</span>
            <button class="btn btn-sm btn-outline">View</button>
          </li>
          <li class="flex justify-between items-center">
            <span>Brave New World</span>
            <button class="btn btn-sm btn-outline">View</button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MyLibrary',
})
</script>

<style scoped>
/* Additional styling if needed */
</style>
