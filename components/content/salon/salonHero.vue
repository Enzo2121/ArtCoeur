<template>
  <section>
    <div class="max-w-6xl max-lg:max-w-7xl mx-auto">
      <div class="space-y-4 md:space-y-8">
        <div class="max-w-4xl">
          <h2 class="lg:text-6xl font-semibold sm:text-3xl">
            <ContentSlot name="title" />
          </h2>
          <p class="mt-4">
            <ContentSlot name="description" />
          </p>
        </div>
        <div class="relative">
        <nuxt-img :src="imageSrc" class="lg:w-full lg:h-[42rem] md:w-full md:h-[32rem] w-full h-[18rem] shadow-lg rounded-lg border-[5px] border-[#331E23]" alt="Hero Image" />
        <div class="absolute lg:-top-5 lg:right-4 md:right-2 -top-1 right-1 translate-x-1/2 -translate-y-1/2">
          <img src="/images/heartHero.svg" class="w-16 h-16 md:w-[104px] md:h-[104px] lg:w-[241px] lg:h-[241px]" alt="Heart Icon" />
        </div>
      </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const props = defineProps({
  imageSrc: String
});
</script>

<style scoped>
/* Ajoutez ici des styles personnalisés si nécessaire */
</style>