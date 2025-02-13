<template>
  <section class="">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="">
        <h2 class="text-3xl font-extrabold">
          <ContentSlot name="sectionTitle" />
        </h2>
        <p class="mt-4 text-lg">
          <ContentSlot name="sectionDescription" />
        </p>
      </div>
      <div class="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="bg-white dark:bg-[#281c1f] shadow-md rounded-lg overflow-hidden">
          <img :src="card1Image" alt="Card Image 1" class="w-full h-[18rem] object-cover">
          <div class="px-4">
            <h3 class="text-xl font-semibold">
              <ContentSlot name="card1Title" />
            </h3>
            <p class="">
              <ContentSlot name="card1Description" />
            </p>
          </div>
        </div>
        <div class="bg-white dark:bg-[#281c1f] shadow-md rounded-lg overflow-hidden">
          <img :src="card2Image" alt="Card Image 2" class="w-full h-[18rem] object-cover">
          <div class="px-4">
            <h3 class="text-xl font-semibold">
              <ContentSlot name="card2Title" />
            </h3>
            <p class="">
              <ContentSlot name="card2Description" />
            </p>
          </div>
        </div>
        <div class="bg-white dark:bg-[#281c1f] shadow-md rounded-lg overflow-hidden">
          <img :src="card3Image" alt="Card Image 3" class="w-full h-[18rem] object-cover">
          <div class="px-4">
            <h3 class="text-xl font-semibold">
              <ContentSlot name="card3Title" />
            </h3>
            <p class="">
              <ContentSlot name="card3Description" />
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  card1Image: String,
  card2Image: String,
  card3Image: String,
});
</script>

<style scoped>
</style>