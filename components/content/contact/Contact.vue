<template>
  <div class="p-4 font-[sans-serif]">
    <div class="mx-auto max-w-6xl">
      <div class="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 items-center gap-4 lg:gap-8">
        <div class="group flex flex-col h-full text-center rounded-lg p-4 sm:p-6">
          <div class="mt-5">
            <h3 class="text-lg font-semibold">
              <ContentSlot name="knowledgebaseTitle" />
            </h3>
            <p class="mt-1">
              <ContentSlot name="knowledgebaseDescription" />
            </p>
            <a class="mt-5 inline-flex items-center gap-x-1 font-medium text-[#9C626B] hover:text-[#9C626B]" href="#">
              <ContentSlot name="knowledgebaseLinkText" />
            </a>
          </div>
        </div>

        <div class="group flex flex-col h-full text-center rounded-lg p-4 sm:p-6">
          <div class="mt-5">
            <h3 class="text-lg font-semibold">
              <ContentSlot name="faqTitle" />
            </h3>
            <p class="mt-1 ">
              <ContentSlot name="faqDescription" />
            </p>
            <a class="mt-5 inline-flex items-center gap-x-1 font-medium text-[#9C626B] hover:text-[#9C626B]" href="#">
              <ContentSlot name="faqLinkText" />
            </a>
          </div>
        </div>

        <div class="group flex flex-col h-full text-center rounded-lg p-4 sm:p-6">
          <div class="mt-5">
            <h3 class="text-lg font-semibold ">
              <ContentSlot name="developerApisTitle" />
            </h3>
            <p class="mt-1 ">
              <ContentSlot name="developerApisDescription" />
            </p>
            <a class="mt-5 inline-flex items-center gap-x-1 font-medium text-[#9C626B] hover:text-[#9C626B]" href="#">
              <ContentSlot name="developerApisLinkText" />
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