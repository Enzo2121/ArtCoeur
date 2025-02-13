<template>
  <section>
    <div class="max-w-6xl max-lg:max-w-7xl mx-auto">
      <div class="space-y-4 md:space-y-8">
        <div class="max-w-5xl">
          <h2 class="lg:text-6xl font-semibold sm:text-3xl">
            <ContentSlot name="heroTitle" />
          </h2>
          <p class="">
            <ContentSlot name="heroDescription" />
          </p>
        </div>
        <div class="relative">
          <img :src="imageSrc" class="rounded-lg w-full h-[42rem] border-[5px] border-[#331E23]" alt="Atelier Image" />
          <div class="absolute -top-5 right-4 translate-x-1/2 -translate-y-1/2">
            <img src="/images/heartHero.svg" class="max-lg:w-10 max-lg:h-10" alt="Heart Icon" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  imageSrc: String,
});
</script>

<style scoped>
</style>