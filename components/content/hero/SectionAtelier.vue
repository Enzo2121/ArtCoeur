<template>
  <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    <!-- Title and Subheading -->
    <div class="mb-10">
      <h1 class="text-4xl font-bold text-gray-800">
        <ContentSlot name="atelierTitle" />
      </h1>
      <p class="mt-2 text-lg text-gray-600">
        <ContentSlot name="atelierSubtitle" />
      </p>
    </div>
    <!-- End Title and Subheading -->

    <!-- Tab Nav -->
    <nav class="flex flex-col md:flex-row md:space-x-4">
      <button type="button" class="hs-tab-active:bg-gray-100 hs-tab-active:hover:border-transparent w-full flex flex-col text-start hover:bg-gray-100 focus:outline-none focus:bg-gray-100 p-3 md:p-5 rounded-xl dark:bg-[#281c1f] bg-white md:bg-transparent dark:hover:bg-[#352529] mb-4 md:mb-0" id="tabs-with-card-item-1" aria-selected="true" data-hs-tab="#tabs-with-card-1" aria-controls="tabs-with-card-1" role="tab">
        <Icon name="mdi:palette" class="shrink-0 size-7 hs-tab-active:text-blue-600" />
        <span class="mt-5">
          <span class="hs-tab-active:text-blue-600 text-lg block font-bold">
            <ContentSlot name="atelierTab1Title" />
          </span>
          <span class="mt-2">
            <ContentSlot name="atelierTab1Description" />
          </span>
        </span>
      </button>

      <button type="button" class="hs-tab-active:bg-gray-100 hs-tab-active:hover:border-transparent w-full flex flex-col text-start hover:bg-gray-100 focus:outline-none focus:bg-gray-100 p-3 md:p-5 rounded-xl dark:bg-[#281c1f] bg-white md:bg-transparent dark:hover:bg-[#352529] mb-4 md:mb-0" id="tabs-with-card-item-2" aria-selected="false" data-hs-tab="#tabs-with-card-2" aria-controls="tabs-with-card-2" role="tab">
        <Icon name="mdi:tools" class="shrink-0 size-7 hs-tab-active:text-blue-600" />
        <span class="mt-5">
          <span class="hs-tab-active:text-blue-600 text-lg block font-bold">
            <ContentSlot name="atelierTab2Title" />
          </span>
          <span class="mt-2">
            <ContentSlot name="atelierTab2Description" />
          </span>
        </span>
      </button>

      <button type="button" class="hs-tab-active:bg-gray-100 hs-tab-active:hover:border-transparent w-full flex flex-col text-start hover:bg-gray-100 focus:outline-none focus:bg-gray-100 p-3 md:p-5 rounded-xl dark:bg-[#281c1f] bg-white md:bg-transparent dark:hover:bg-[#352529] mb-4 md:mb-0" id="tabs-with-card-item-3" aria-selected="false" data-hs-tab="#tabs-with-card-3" aria-controls="tabs-with-card-3" role="tab">
        <Icon name="mdi:share" class="shrink-0 size-7 hs-tab-active:text-blue-600" />
        <span class="mt-5">
          <span class="hs-tab-active:text-blue-600 text-lg block font-bold">
            <ContentSlot name="atelierTab3Title" />
          </span>
          <span class="mt-2">
            <ContentSlot name="atelierTab3Description" />
          </span>
        </span>
      </button>
    </nav>
    <!-- End Tab Nav -->

    <!-- Tab Content -->
    <div class="mt-12 md:mt-16">
      <div id="tabs-with-card-1" role="tabpanel" aria-labelledby="tabs-with-card-item-1">
        <div class="relative">
          <nuxt-img class="lg:w-full lg:h-[42rem] md:w-full md:h-[32rem] w-full h-[18rem] rounded-lg" :src="imageSrc" alt="Features Image"/>
        </div>
      </div>
    </div>
    <!-- End Tab Content -->
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  imageSrc: String,
});
</script>

<style scoped>
/* Ajoutez ici des styles personnalisés si nécessaire */
</style>