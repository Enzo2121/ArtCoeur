<template>
  <div
    class="font-display grid min-h-screen grid-rows-[auto,auto,1fr,auto] bg-[#FAF7F7] dark:bg-[#1f1417] text-[#201e33] dark:text-[#FAF7F7] transition-colors">
    <AppHeaderBanner />
    <AppNavbar />
    <slot />
    <AppFooter />
  </div>
</template>

<style lang="postcss"></style>