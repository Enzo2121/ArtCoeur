<script setup lang="js">
import { ref, computed } from 'vue';

const { data } = await useAsyncData('artisans', () => queryContent('/artisans').where({ _extension: "md" }).find());

const selectedCategory = ref('');

const filteredArtisans = computed(() => {
  if (selectedCategory.value) {
    return data.value.filter(artisan => artisan.categories && artisan.categories.includes(selectedCategory.value));
  }
  return data.value;
});

const categories = computed(() => {
  const allCategories = data.value.flatMap(artisan => artisan.categories || []);
  return [...new Set(allCategories)];
});

const selectCategory = (category) => {
  selectedCategory.value = category;
};
</script>

<template>
  <div>
    <div class="flex space-x-4 mb-4">
      <button 
        v-for="category in categories" 
        :key="category" 
        @click="selectCategory(category)" 
        class="badge"
        :class="{ 'bg-[#B4878E] text-white': selectedCategory === category, 'bg-gray-200 dark:bg-[#281C1F]': selectedCategory !== category }"
      >
        {{ category }}
      </button>
      <button @click="selectCategory('')" class="badge bg-gray-200 dark:bg-[#281C1F] hover:text-white">Tous</button>
    </div>
    <div class="not-prose grid grid-cols-1 lg:grid-cols-3 gap-4">
      <UiCard v-for="i in filteredArtisans" :key="i._path" :item="i" />
    </div>
  </div>
</template>

<style scoped>
.badge {
  @apply px-3 py-1 rounded-lg cursor-pointer hover:bg-[#B4878E] hover:text-white transition-colors;
}
</style>