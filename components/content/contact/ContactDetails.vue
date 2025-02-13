<template>
    <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h2 class="text-2xl font-bold ">
            <ContentSlot name="detailsTitle" />
          </h2>
          <p class="mt-4 text-lg ">
            <strong>Téléphone :</strong> <ContentSlot name="phoneNumber" />
          </p>
          <p class="mt-2 text-lg">
            <strong>Adresse :</strong> <ContentSlot name="address" />
          </p>
          <p class="mt-2 text-lg">
            <strong>Email :</strong> <ContentSlot name="email" />
          </p>
        </div>
        <div>
          <iframe
            :src="mapSrc"
            width="100%"
            height="450"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    mapSrc: {
      type: String,
      required: true
    }
  });
  </script>
  
  <style scoped>
  </style>