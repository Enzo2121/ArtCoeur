<template>
    <div class="">
      <div class="max-w-7xl mx-auto px-4 xl:px-0 pt-24 lg:pt-32 pb-24">
        <h1 class="font-semibold text-white text-5xl md:text-6xl lg:max-w-5xl">
          <ContentSlot name="heroTitle" />
        </h1>
        <div class="max-w-4xl">
          <p class="mt-5 text-neutral-400 text-lg">
            <ContentSlot name="heroDescription" />
          </p>
        </div>
      </div>
    </div>
  </template>