<template>
    <section class="py-4 md:py-8 bg-gray-900 text-gray-100">
      <div class="max-w-5xl mx-auto px-6">
        <h2 class="leading-none font-display tracking-tight text-4xl sm:text-5xl md:text-7xl xl:text-9xl">
          <ContentSlot name="pricingTitle" />
        </h2>
        <p class="mt-12 max-w-xl sm:text-lg sm:leading-normal lg:text-xl lg:leading-normal xl:text-2xl xl:leading-normal font-semibold">
          <ContentSlot name="pricingDescription" />
        </p>
  
        <div class="mt-12 md:mt-24 grid gap-y-6 sm:grid-cols-2 sm:gap-x-6 md:gap-x-12 xl:gap-x-24">
          <a href="#" class="py-12 px-4 flex flex-col rounded-xl bg-white text-gray-900 text-center transition duration-75 hover:-rotate-1 hover:scale-105 focus:-rotate-1 focus:scale-105">
            <div>
              <h3 class="px-6 py-2 inline-block text-2xl md:text-3xl font-bold bg-gray-900 text-white -rotate-1">
                <ContentSlot name="plan1Title" />
              </h3>
            </div>
  
            <div class="flex-1 py-12 font-bold leading-none text-6xl md:text-7xl md:leading-none lg:text-8xl lg:leading-none xl:text-9xl xl:leading-none">
              <div class="inline-block">
                <span class="text-lg" style="vertical-align: super"><ContentSlot name="plan1StartingAt" /></span>
                <sup class="text-3xl"><ContentSlot name="plan1Price" /></sup>
                <small class="block text-lg text-right"><ContentSlot name="plan1Per" /></small>
              </div>
            </div>
  
            <ul class="mx-auto text-left md:text-xl md:leading-normal font-bold space-y-1">
              <li class="flex items-start">
                <Icon icon="mdi:check-circle" class="mt-1 mr-2 h-5 text-teal-400" />
                <ContentSlot name="plan1Feature1" />
              </li>
              <li class="flex items-start">
                <Icon icon="mdi:check-circle" class="mt-1 mr-2 h-5 text-teal-400" />
                <ContentSlot name="plan1Feature2" />
              </li>
              <li class="flex items-start">
                <Icon icon="mdi:check-circle" class="mt-1 mr-2 h-5 text-teal-400" />
                <ContentSlot name="plan1Feature3" />
              </li>
              <li class="flex items-start">
                <Icon icon="mdi:check-circle" class="mt-1 mr-2 h-5 text-teal-400" />
                <ContentSlot name="plan1Feature4" />
              </li>
            </ul>
  
            <div class="mt-16">
              <div class="group inline-flex items-center justify-center text-xl md:text-2xl font-bold text-white px-6 py-3 rounded bg-rose-500 hover:bg-red-600 focus:bg-red-600">
                <ContentSlot name="plan1Button" />
                <Icon icon="mdi:arrow-right" class="ml-2 fill-current group-hover:translate-x-1 group-focus:translate-x-1" width="25" height="16" />
              </div>
            </div>
          </a>
  
          <a href="#" class="py-12 px-4 flex flex-col rounded-xl border-2 border-dashed border-gray-400 text-center transition duration-75 hover:rotate-1 hover:scale-105 focus:rotate-1 focus:scale-105">
            <div>
              <h3 class="px-6 py-2 inline-block text-2xl md:text-3xl font-bold bg-teal-500 text-white -rotate-1">
                <ContentSlot name="plan2Title" />
              </h3>
            </div>
  
            <div class="flex-1 py-12 font-bold leading-none text-6xl md:text-7xl md:leading-none lg:text-8xl lg:leading-none xl:text-9xl xl:leading-none">
              <div class="inline-block">
                <sup class="text-3xl"><ContentSlot name="plan2PriceRange" /></sup>
                <small class="block text-lg text-right"><ContentSlot name="plan2Per" /></small>
              </div>
            </div>
  
            <ul class="mx-auto text-left md:text-xl md:leading-normal font-bold space-y-1">
              <li class="flex items-start">
                <Icon icon="mdi:check-circle" class="mt-1 mr-2 h-5 text-teal-400" />
                <ContentSlot name="plan2Feature1" />
              </li>
              <li class="flex items-start">
                <Icon icon="mdi:check-circle" class="mt-1 mr-2 h-5 text-teal-400" />
                <ContentSlot name="plan2Feature2" />
              </li>
              <li class="flex items-start">
                <Icon icon="mdi:check-circle" class="mt-1 mr-2 h-5 text-teal-400" />
                <ContentSlot name="plan2Feature3" />
              </li>
              <li class="flex items-start">
                <Icon icon="mdi:check-circle" class="mt-1 mr-2 h-5 text-teal-400" />
                <ContentSlot name="plan2Feature4" />
              </li>
            </ul>
  
            <div class="mt-16">
              <div class="group inline-flex items-center justify-center text-xl md:text-2xl font-bold text-rose-500 hover:text-rose-500-lighter focus:text-rose-500-lightest">
                <ContentSlot name="plan2Button" />
                <Icon icon="mdi:arrow-right" class="ml-2 fill-current group-hover:translate-x-1 group-focus:translate-x-1" width="25" height="16" />
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  </style>