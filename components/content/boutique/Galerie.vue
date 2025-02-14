<template>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 class="text-3xl font-extrabold text-gray-900 mb-6">
        <ContentSlot name="galleryTitle" />
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-1 gap-6">
        <div v-for="(image, index) in images" :key="index" class="relative w-full h-full pb-[56.25%] overflow-hidden rounded-lg shadow-lg">
          <nuxt-img :src="image.src" :alt="image.alt" class="absolute top-0 left-0 w-full h-full object-cover" />
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    images: {
      type: Array,
      default: () => []
    }
  });
  </script>
  
  <style scoped>
  </style>