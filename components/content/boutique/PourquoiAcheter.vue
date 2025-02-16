<template>
  <div class="p-4 font-[sans-serif]">
    <div class="max-w-6xl max-lg:max-w-3xl mx-auto">
      <div class="max-w-2xl mx-auto text-center">
        <h2 class="text-gray-800 dark:text-[#FAF7F7] text-3xl font-bold">
          <ContentSlot name="sectionTitle" />
        </h2>
        <p class="text-sm text-gray-500 dark:text-[#FAF7F7] mt-6 leading-relaxed">
          <ContentSlot name="sectionDescription" />
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
              <h6 class="text-lg font-semibold text-gray-800 dark:text-[#FAF7F7]">
                <ContentSlot name="card1Title" />
              </h6>
            </div>
          </div>

          <div class="mt-6">
            <p class="text-sm leading-relaxed text-gray-800 dark:text-[#FAF7F7]">
              <ContentSlot name="card1Description" />
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
              <h6 class="text-lg font-semibold text-gray-800 dark:text-[#FAF7F7]">
                <ContentSlot name="card2Title" />
              </h6>
            </div>
          </div>

          <div class="mt-6">
            <p class="text-sm leading-relaxed text-gray-800 dark:text-[#FAF7F7]">
              <ContentSlot name="card2Description" />
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
              <h6 class="text-lg font-semibold text-gray-800 dark:text-[#FAF7F7]">
                <ContentSlot name="card3Title" />
              </h6>
            </div>
          </div>

          <div class="mt-6">
            <p class="text-sm leading-relaxed text-gray-800 dark:text-[#FAF7F7]">
              <ContentSlot name="card3Description" />
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
</style>