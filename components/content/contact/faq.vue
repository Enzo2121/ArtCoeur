<template>
    <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div class="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h2 class="text-2xl font-bold md:text-3xl md:leading-tight">
          <ContentSlot name="faqTitle" />
        </h2>
      </div>
  
      <div class="max-w-5xl mx-auto">
        <div class="grid sm:grid-cols-2 gap-6 md:gap-12">
          <div>
            <h3 class="text-lg font-semibold">
              <ContentSlot name="question1" />
            </h3>
            <p class="mt-2text-gray-600">
              <ContentSlot name="answer1" />
            </p>
          </div>
          <div>
            <h3 class="text-lg font-semibold">
              <ContentSlot name="question2" />
            </h3>
            <p class="mt-2">
              <ContentSlot name="answer2" />
            </p>
          </div>
          <div>
            <h3 class="text-lg font-semibold">
              <ContentSlot name="question3" />
            </h3>
            <p class="mt-2">
              <ContentSlot name="answer3" />
            </p>
          </div>
          <div>
            <h3 class="text-lg font-semibold">
              <ContentSlot name="question4" />
            </h3>
            <p class="mt-2">
              <ContentSlot name="answer4" />
            </p>
          </div>
          <div>
            <h3 class="text-lg font-semibold">
              <ContentSlot name="question5" />
            </h3>
            <p class="mt-2">
              <ContentSlot name="answer5" />
            </p>
          </div>
          <div>
            <h3 class="text-lg font-semibold">
              <ContentSlot name="question6" />
            </h3>
            <p class="mt-2">
              <ContentSlot name="answer6" />
            </p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  </style>