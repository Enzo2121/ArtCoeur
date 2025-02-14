<template>
    <div class="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
      <div class="h-52 flex flex-col justify-center items-center bg-blue-600 rounded-t-xl">
        <nuxt-img :src="card.image" alt="Card Image" class="w-full h-full object-cover rounded-t-xl" />
      </div>
      <div class="p-4 md:p-6">
        <span class="block mb-1 text-xs font-semibold uppercase text-blue-600 dark:text-blue-500">
          {{ card.category }}
        </span>
        <h3 class="text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:hover:text-white">
          {{ card.title }}
        </h3>
        <p class="mt-3 text-gray-500 dark:text-neutral-500">
          {{ card.description }}
        </p>
      </div>
      <div class="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-neutral-700 dark:divide-neutral-700">
        <a class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" :href="card.sampleLink">
          
        </a>
        <a class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" :href="card.apiLink">
          
        </a>
      </div>
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    card: {
      type: Object,
      required: true
    }
  });
  </script>
  
  <style scoped>
  /* Ajoutez ici des styles personnalisés si nécessaire */
  </style>