<template>
    <div class="p-4 font-[sans-serif]">
      <div class="mx-auto max-w-6xl">
        <!-- Première ligne -->
        <div class="grid items-center gap-6 md:grid-cols-2">
          <div>
            <h2 class="text-3xl font-bold">
              <ContentSlot name="teamTitle" />
            </h2>
            <p class="mt-4 text-lg leading-relaxed">
              <ContentSlot name="teamDescription" />
            </p>
          </div>
          <div class="group relative aspect-square cursor-pointer overflow-hidden rounded-xl">
            <div class="absolute inset-x-0 -bottom-2 z-50 flex cursor-pointer items-end rounded-xl bg-gradient-to-t from-black/80 to-transparent pt-30 text-white opacity-0 transition duration-300 ease-in-out group-hover:opacity-100">
              <div class="translate-y-4 transform space-y-3 p-4 pb-10 text-xl transition duration-300 ease-in-out group-hover:translate-y-0 group-hover:opacity-100">
                <div class="font-bold">
                  <ContentSlot name="member1Name" />
                </div>
                <div class="text-sm opacity-60">
                  <ContentSlot name="member1Role" />
                </div>
              </div>
            </div>
            <img :src="member1Image" class="aspect-square w-full rounded-lg object-cover transition duration-300 ease-in-out" />
          </div>
        </div>
  
        <!-- Deuxième ligne -->
        <div class="mt-6 grid gap-6 md:grid-cols-2">
          <div class="group relative aspect-square cursor-pointer overflow-hidden rounded-xl">
            <div class="absolute inset-x-0 -bottom-2 z-50 flex cursor-pointer items-end rounded-xl bg-gradient-to-t from-black/80 to-transparent pt-30 text-white opacity-0 transition duration-300 ease-in-out group-hover:opacity-100">
              <div class="translate-y-4 transform space-y-3 p-4 pb-10 text-xl transition duration-300 ease-in-out group-hover:translate-y-0 ">
                <div class="font-bold">
                  <ContentSlot name="member2Name" />
                </div>
                <div class="text-sm opacity-60">
                  <ContentSlot name="member2Role" />
                </div>
              </div>
            </div>
            <img :src="member2Image" class="aspect-square w-full mx-auto rounded-lg object-cover transition duration-300 ease-in-out" />
          </div>
          <div class="group relative aspect-square cursor-pointer overflow-hidden rounded-xl">
            <div class="absolute inset-x-0 -bottom-2 z-50 flex cursor-pointer items-end rounded-xl bg-gradient-to-t from-black/80 to-transparent pt-30 text-white opacity-0 transition duration-300 ease-in-out group-hover:opacity-100">
              <div class="translate-y-4 transform space-y-3 p-4 pb-10 text-xl transition duration-300 ease-in-out group-hover:translate-y-0 ">
                <div class="font-bold">
                  <ContentSlot name="member3Name" />
                </div>
                <div class="text-sm opacity-60">
                  <ContentSlot name="member3Role" />
                </div>
              </div>
            </div>
            <img :src="member3Image" class="aspect-square w-full mx-auto rounded-lg object-cover transition duration-300 ease-in-out" />
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    member1Image: String,
    member2Image: String,
    member3Image: String,
  });
  </script>
  
  <style scoped>
  </style>