<template>
    <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div class="md:grid md:grid-cols-2 md:gap-10 lg:gap-16 md:items-center">
        <div class="hidden md:block mb-24 md:mb-0 sm:px-6">
          <div class="relative">
            <img class="rounded-lg" :src="imageSrc" alt="Atelier Image">
          </div>
        </div>
        <div>
          <div class="relative z-10">
            <h2 class="text-2xl font-bold md:text-3xl md:leading-normal xl:text-4xl xl:leading-normal">
              <ContentSlot name="atelierTitle" />
            </h2>
            <p class="mt-4 text-lg md:text-xl md:leading-normal lg:text-xl xl:leading-normal">
              <ContentSlot name="atelierDescription" />
            </p>
            <button class="mt-6 py-2 px-4 bg-[#B4878E] text-white font-semibold rounded-lg shadow-md hover:bg-[#9C6D75] focus:outline-none focus:ring-2 focus:ring-[#B4878E] focus:ring-opacity-75">
              Contactez-nous
            </button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  const props = defineProps({
    imageSrc: String,
  });
  </script>
  
  <style scoped>
  </style>