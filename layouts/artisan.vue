<template>
  <div class="max-w-7xl xl:max-w-8xl px-5 py-10 mx-auto">
    <div class="">
      <h1 class="text-4xl font-bold mb-4">{{ page.title }}</h1>
      <div class="">
        <p>{{ page.description }}</p>
      </div>
      <div class="flex space-x-4 mt-4">
        <a v-for="link in page.socialLinks" :key="link.url" :href="link.url" target="_blank" class="hover:text-[#B4878E] hover:underline">
          <Icon :name="link.icon" class="h-6 w-6" />
        </a>
      </div>
    </div>
    <div class="mt-8">
      <h2 class="text-2xl font-semibold mb-4">Galerie de travaux</h2>
      <div class="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-3">
        <div v-for="image in page.gallery" :key="image" class="relative w-full overflow-hidden rounded">
          <img :src="image" class="w-full h-64 object-cover" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { page } = useContent();
</script>

<style scoped>
/* Ajoutez ici des styles personnalisés si nécessaire */
</style>
