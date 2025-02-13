<script setup>
import { ref, onMounted } from 'vue';

const currentIndex = ref(0);
const slides = ref([
  {
    title: "Nike React",
    description: "Rewriting sport's playbook for billions of athletes",
    image: "https://images.unsplash.com/photo-1615615228002-890bb61cac6e?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "CoolApps",
    description: "From mobile apps to gaming consoles",
    image: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "Grumpy",
    description: "Bringing Art to everything",
    image: "https://images.unsplash.com/photo-1629666451094-8908989cae90?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
]);

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % slides.value.length;
};

const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + slides.value.length) % slides.value.length;
};

onMounted(() => {
  setInterval(() => {
    nextSlide();
  }, 5000); // Auto-slide every 5s
});
</script>

<template>
  <div class="px-4 sm:px-6 lg:px-8 py-10">
    <div class="relative overflow-hidden w-full h-[30rem] md:h-[calc(100vh-106px)] bg-gray-100 rounded-2xl">
      <div class="flex transition-transform duration-700" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
        <div v-for="(slide, index) in slides" :key="index" class="min-w-full h-[30rem] md:h-[calc(100vh-106px)] flex flex-col bg-cover bg-center bg-no-repeat" :style="{ backgroundImage: `url(${slide.image})` }">
          <div class="mt-auto w-2/3 md:max-w-lg p-5 md:p-10">
            <span class="block text-white text-xl md:text-3xl">{{ slide.title }}</span>
            <span class="block text-white">{{ slide.description }}</span>
            <div class="mt-5">
              <a class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl bg-white text-black hover:bg-gray-100" href="#">
                Read Case Study
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Arrows -->
      <button @click="prevSlide" class="absolute inset-y-0 left-0 flex items-center w-12 h-full text-black hover:bg-white/20 rounded-s-2xl focus:outline-none">
        <span class="text-2xl">
          <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
          </svg>
        </span>
      </button>

      <button @click="nextSlide" class="absolute inset-y-0 right-0 flex items-center w-12 h-full text-black hover:bg-white/20 rounded-e-2xl focus:outline-none">
        <span class="text-2xl">
          <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
          </svg>
        </span>
      </button>
    </div>
  </div>
</template>
