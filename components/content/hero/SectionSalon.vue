<template>
    <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div class="md:grid md:grid-cols-2 md:gap-10 lg:gap-16 md:items-center">
        <div>
          <div class="relative z-10">
            <h2 class="text-2xl font-bold  md:text-3xl md:leading-normal xl:text-4xl xl:leading-normal">
              <ContentSlot name="salonTitle" />
            </h2>
            <p class="mt-4 text-lg md:text-xl md:leading-normal lg:text-xl xl:leading-normal">
              <ContentSlot name="salonDescription" />
            </p>
          </div>
          <div class="mt-8 lg:mt-14">
            <NuxtLink :to="buttonLink" class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-[#B4878E] hover:bg-[#9d7379] hover:text-gray-50 text-white focus:outline-none focus:bg-gray-900 disabled:opacity-50 disabled:pointer-events-none">
              <ContentSlot name="buttonText" />
            </NuxtLink>
          </div>
        </div>
        <div class="hidden md:block mb-24 md:mb-0 sm:px-6">
          <div class="relative">
            <img class="rounded-lg w-full h-[32rem]" :src="imageSrc" alt="Salon de Thé">
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  const props = defineProps({
    imageSrc: String,
    buttonLink: String,
  });
  </script>
  
  <style scoped>
  </style>