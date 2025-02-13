<template>
    <div>
      <div class="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
        <div class="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <div class="mx-auto max-w-md text-center lg:mx-auto lg:flex-auto lg:py-32 lg:text-center">
            <h2 class="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              <ContentSlot name="contactTitle" />
            </h2>
            <p class="mt-6 text-pretty text-lg/8 text-gray-300">
              <ContentSlot name="contactDescription" />
            </p>
            <div class="mt-10 flex items-center justify-center gap-x-6">
              <a href="#" class="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                <ContentSlot name="contactButtonText" />
              </a>
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