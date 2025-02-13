<template>
    <div class="p-4 font-[sans-serif]">
      <div class="max-w-6xl max-lg:max-w-3xl mx-auto">
        <div class="max-w-2xl mx-auto text-center">
          <h2 class="text-gray-800 dark:text-[#FAF7F7] text-2xl font-bold">
            <ContentSlot name="testimonialsTitle" />
          </h2>
          <p class="text-sm text-gray-500 dark:text-[#FAF7F7] mt-6 leading-relaxed">
            <ContentSlot name="testimonialsDescription" />
          </p>
        </div>
  
        <div class="grid lg:grid-cols-3 md:grid-cols-2 gap-x-6 gap-y-10 max-md:justify-center max-md:max-w-md mx-auto mt-16">
          <!-- Première carte -->
          <div class="w-full shadow-[0_2px_10px_-2px_rgba(93,96,127,0.2)] lg:p-8 p-4 rounded-lg bg-white dark:bg-[#281c1f] relative">
            <div class="flex items-center justify-center w-12 h-12 max-lg:w-10 max-lg:h-10 absolute -top-5 -right-5">
              <img src="/images/heart.svg" class="w-12 h-12 max-lg:w-10 max-lg:h-10" alt="Heart Icon" />
            </div>
  
            <div class="flex items-center">
              <div class="">
                <h6 class="text-sm font-semibold text-gray-800 dark:text-[#FAF7F7]">
                  <ContentSlot name="testimonial1Name" />
                </h6>
                <div class="flex space-x-1 mt-2">
                  <Icon name="mdi:heart" class="w-3.5 h-3.5 text-[#B4878E]" v-for="n in 5" :key="n" />
                </div>
              </div>
            </div>
  
            <div class="mt-6">
              <p class="text-sm leading-relaxed text-gray-800 dark:text-[#FAF7F7]">
                <ContentSlot name="testimonial1Text" />
              </p>
            </div>
          </div>
  
          <!-- Deuxième carte -->
          <div class="w-full shadow-[0_2px_10px_-2px_rgba(93,96,127,0.2)] lg:p-8 p-4 rounded-lg bg-white dark:bg-[#281c1f] relative">
            <div class="flex items-center justify-center w-12 h-12 max-lg:w-10 max-lg:h-10 absolute -top-5 -right-5">
              <img src="/images/heart.svg" class="w-12 h-12 max-lg:w-10 max-lg:h-10" alt="Heart Icon" />
            </div>
  
            <div class="flex items-center">
              <div class="">
                <h6 class="text-sm font-semibold text-gray-800 dark:text-[#FAF7F7]">
                  <ContentSlot name="testimonial2Name" />
                </h6>
                <div class="flex space-x-1 mt-2">
                  <Icon name="mdi:heart" class="w-3.5 h-3.5 text-[#B4878E]" v-for="n in 5" :key="n" />
                </div>
              </div>
            </div>
  
            <div class="mt-6">
              <p class="text-sm leading-relaxed text-gray-800 dark:text-[#FAF7F7]">
                <ContentSlot name="testimonial2Text" />
              </p>
            </div>
          </div>
  
          <!-- Troisième carte -->
          <div class="w-full shadow-[0_2px_10px_-2px_rgba(93,96,127,0.2)] lg:p-8 p-4 rounded-lg bg-white dark:bg-[#281c1f] relative">
            <div class="flex items-center justify-center w-12 h-12 max-lg:w-10 max-lg:h-10 absolute -top-5 -right-5">
              <img src="/images/heart.svg" class="w-12 h-12 max-lg:w-10 max-lg:h-10" alt="Heart Icon" />
            </div>
  
            <div class="flex items-center">
              <div class="">
                <h6 class="text-sm font-semibold text-gray-800 dark:text-[#FAF7F7]">
                  <ContentSlot name="testimonial3Name" />
                </h6>
                <div class="flex space-x-1 mt-2">
                  <Icon name="mdi:heart" class="w-3.5 h-3.5 text-[#B4878E]" v-for="n in 5" :key="n" />
                </div>
              </div>
            </div>
  
            <div class="mt-6">
              <p class="text-sm leading-relaxed text-gray-800 dark:text-[#FAF7F7]">
                <ContentSlot name="testimonial3Text" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  </script>
  
  <style scoped>
  </style>