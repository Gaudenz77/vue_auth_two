<script setup lang="ts">
import { ref } from 'vue'

interface BingoNumbers {
  main: number[]
  extra: number[]
}

const numbers = ref<BingoNumbers>({
  main: Array(5).fill(0),
  extra: Array(2).fill(0)
})
const shufflingNumbers = ref<BingoNumbers>({
  main: Array(5).fill(0),
  extra: Array(2).fill(0)
})
const isGenerating = ref(false)
const currentIndex = ref(0)

function getRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function generateUniqueNumber(max: number, existingNumbers: number[]): number {
  let num: number
  do {
    num = getRandomNumber(1, max)
  } while (existingNumbers.includes(num))
  return num
}

let shuffleIntervals: number[] = []

function startShuffling(index: number, isExtra: boolean = false) {
  const intervalId = window.setInterval(() => {
    if (isExtra) {
      shufflingNumbers.value.extra[index] = getRandomNumber(1, 12)
    } else {
      shufflingNumbers.value.main[index] = getRandomNumber(1, 50)
    }
  }, 50) // Shuffle every 50ms
  shuffleIntervals.push(intervalId)
}

function stopShuffling() {
  shuffleIntervals.forEach(interval => clearInterval(interval))
  shuffleIntervals = []
}


async function startGenerator() {
  if (isGenerating.value) return

  isGenerating.value = true
  currentIndex.value = 0
  
  // Reset all numbers
  numbers.value = {
    main: Array(5).fill(0),
    extra: Array(2).fill(0)
  }
  shufflingNumbers.value = {
    main: Array(5).fill(0),
    extra: Array(2).fill(0)
  }

  const mainNumbers: number[] = []
  const extraNumbers: number[] = []

  // Start shuffling all numbers
  for (let i = 0; i < 5; i++) {
    startShuffling(i)
  }
  for (let i = 0; i < 2; i++) {
    startShuffling(i, true)
  }

  // Generate main numbers (1-50)
  for (let i = 0; i < 5; i++) {
    await new Promise(resolve => setTimeout(resolve, 800))
    const num = generateUniqueNumber(50, mainNumbers)
    mainNumbers.push(num)
    numbers.value.main[i] = num
    shufflingNumbers.value.main[i] = num
    currentIndex.value++
  }

  // Generate extra numbers (1-12)
  for (let i = 0; i < 2; i++) {
    await new Promise(resolve => setTimeout(resolve, 800))
    const num = generateUniqueNumber(12, extraNumbers)
    extraNumbers.push(num)
    numbers.value.extra[i] = num
    shufflingNumbers.value.extra[i] = num
    currentIndex.value++
  }

  stopShuffling()
  isGenerating.value = false
}

function reset() {
  stopShuffling()
  isGenerating.value = false
  currentIndex.value = 0
  numbers.value = {
    main: Array(5).fill(0),
    extra: Array(2).fill(0)
  }
  shufflingNumbers.value = {
    main: Array(5).fill(0),
    extra: Array(2).fill(0)
  }
}
</script>

<template>
  <div class="max-w-2xl mx-auto p-6">
    <h2 class="text-2xl font-bold mb-6">Euromillions Number Generator</h2>
    
    <div class="grid grid-cols-7 gap-4 mb-6">
      <!-- Main numbers (1-50) -->
      <div v-for="(number, index) in numbers.main" :key="`main-${index}`"
           class="relative aspect-square">
        <div class="absolute inset-0 flex items-center justify-center rounded-full border-4"
             :class="{
               'bg-primary text-primary-content border-primary': number !== 0,
               'border-base-300': number === 0,
               'animate-pulse': isGenerating && currentIndex === index
             }">
          <span class="text-2xl font-bold">
            {{ isGenerating && currentIndex < index 
               ? shufflingNumbers.main[index] || '-'
               : number || '-' }}
          </span>
        </div>
      </div>

      <!-- Extra numbers (1-12) -->
      <div v-for="(number, index) in numbers.extra" :key="`extra-${index}`"
           class="relative aspect-square">
        <div class="absolute inset-0 flex items-center justify-center rounded-full border-4"
             :class="{
               'bg-secondary text-secondary-content border-secondary': number !== 0,
               'border-base-300': number === 0,
               'animate-pulse': isGenerating && currentIndex === index + 5
             }">
          <span class="text-2xl font-bold">
            {{ isGenerating && currentIndex < index + 5
               ? shufflingNumbers.extra[index] || '-'
               : number || '-' }}
          </span>
        </div>
      </div>
    </div>

    <div class="flex justify-center gap-4">
      <button @click="startGenerator"
              :disabled="isGenerating"
              class="btn btn-primary">
        {{ isGenerating ? 'Generating...' : 'Generate Numbers' }}
      </button>
      <button @click="reset"
              :disabled="isGenerating"
              class="btn btn-secondary">
        Reset
      </button>
    </div>
  </div>
</template>