<template>
  <section>
    <div class="max-w-screen-xl mx-auto px-4 gap-12 text-[#331E23] md:px-8">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="lg:text-5xl text-[#331E23] jakarta-bold mx-auto md:text-5xl">
          <ContentSlot name="heroTitle" />
        </h2>
        <p class="max-w-2xl mx-auto jakarta-regular lg:text-lg text-[#331E23] dark:text-white mt-1">
          <ContentSlot name="heroDescription" />
        </p>
        <div class="flex items-center justify-center gap-x-3 mt-3">
          <NuxtLink :to="button1Link" class="inline-block py-0 px-4 text-[#331E23] hover:text-gray-500 dark:text-white border dark:border-gray-200/20 font-medium duration-150 active:bg-gray-100 rounded-lg jakarta-regular">
            <ContentSlot name="button1Text" />
          </NuxtLink>
          <NuxtLink :to="button2Link" class="inline-block py-0 px-4 text-white font-medium duration-150 hover:bg-gray-500 active:bg-gray-700 rounded-lg shadow-lg hover:shadow-none" :style="{ backgroundColor: '#B4878E' }">
            <ContentSlot name="button2Text" />
          </NuxtLink>
        </div>
      </div>
      <div class="relative mt-14">
        <img :src="imageSrc" class="w-full  h-[48rem] shadow-lg rounded-lg border-[5px] border-[#331E23]" alt="Hero Image" />
        <div class="absolute -top-5 right-4 translate-x-1/2 -translate-y-1/2">
          <img src="/images/heartHero.svg" class="max-lg:w-10 max-lg:h-10" alt="Heart Icon" />
        </div>
      </div>
    </div>
  </section>
</template>


<script setup lang="ts">
const props = defineProps({
  button1Link: String,
  button2Link: String,
  imageSrc: String,
});
</script>

<style scoped>
</style>