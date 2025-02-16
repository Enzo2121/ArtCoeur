<script setup lang="ts">
const props = defineProps(['icon', 'color']);
</script>

<template>
  <button type="button"
    class="focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 px-2.5 py-1.5 shadow-sm dark:ring-gray-700 text-gray-900 dark:text-white bg-white hover:bg-gray-50 disabled:bg-white dark:bg-gray-900 dark:hover:bg-gray-800/50 dark:disabled:bg-gray-900 inline-flex items-center">
    <Icon v-if="icon" :name="icon" class="h-4 w-4" aria-hidden="true" />
    <slot />
  </button>
</template>