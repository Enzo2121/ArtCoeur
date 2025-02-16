<template>
  <section>
    <div class="max-w-screen-xl mx-auto px-4 gap-12 text-[#331E23] md:px-8">
      <div class="max-w-4xl mx-auto md:text-center text-left">
        <h2 class="lg:text-5xl text-[#331E23] jakarta-bold mx-auto md:text-5xl">
          <ContentSlot name="heroTitle" />
        </h2>
        <p class="max-w-2xl mx-auto jakarta-regular lg:text-lg text-[#331E23] dark:text-white mt-1">
          <ContentSlot name="heroDescription" />
        </p>
        <div class="flex items-start md:items-center justify-start md:justify-center gap-x-3 mt-3">
          <NuxtLink :to="button1Link" class="inline-block py-0 px-4 text-[#331E23] hover:text-gray-500 dark:text-white border dark:border-gray-200/20 font-medium duration-150 active:bg-gray-100 rounded-lg jakarta-regular">
            <ContentSlot name="button1Text" />
          </NuxtLink>
          <NuxtLink :to="button2Link" class="inline-block py-0 px-4 text-white font-medium duration-150 hover:bg-gray-500 active:bg-gray-700 rounded-lg shadow-lg hover:shadow-none" :style="{ backgroundColor: '#B4878E' }">
            <ContentSlot name="button2Text" />
          </NuxtLink>
        </div>
      </div>
      <div class="relative mt-14">
        <nuxt-img :src="imageSrc" class="lg:w-full lg:h-[42rem] md:w-full md:h-[32rem] w-full h-[18rem] shadow-lg rounded-lg border-[5px] border-[#331E23]" alt="Hero Image" />
        <div class="absolute lg:-top-5 lg:right-4 md:right-2 -top-1 right-1 translate-x-1/2 -translate-y-1/2">
          <img src="/images/heartHero.svg" class="w-16 h-16 md:w-[104px] md:h-[104px] lg:w-[241px] lg:h-[241px]" alt="Heart Icon" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const props = defineProps({
  imageSrc: String,
  button1Link: String,
  button2Link: String,
});
</script>

<style scoped>
/* Ajoutez ici des styles personnalisés si nécessaire */
</style>