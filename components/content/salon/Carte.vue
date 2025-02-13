<template>
  <div class="min-h-screen p-8">
    <div class="max-w-5xl mx-auto">
      <h1 class="text-4xl font-bold text-center mb-8">
        <ContentSlot name="menuTitle" />
      </h1>
      
      <!-- Catégorie 1 : Boissons Chaudes -->
      <div class="mb-12">
        <h2 class="text-2xl font-semibold mb-4 flex items-center">
          <ContentSlot name="category1Icon" />
          <ContentSlot name="category1Name" />
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <!-- Boisson Chaude 1 -->
          <div class="bg-gray-50 dark:bg-[#281c1f] p-4 rounded-lg shadow-[0_2px_10px_-2px_rgba(93,96,127,0.2)] transition duration-300 ease-in-out hover:shadow-md">
            <div class="flex justify-between items-start">
              <div>
                <h3 class="text-lg font-medium">
                  <ContentSlot name="item1Name" />
                </h3>
                <p class="text-sm mt-1">
                  <ContentSlot name="item1Description" />
                </p>
              </div>
              <span class="text-lg font-semibold">
                <ContentSlot name="item1Price" />€
              </span>
            </div>
          </div>
          <!-- Boisson Chaude 2 -->
          <div class="bg-gray-50 dark:bg-[#281c1f] p-4 rounded-lg shadow-[0_2px_10px_-2px_rgba(93,96,127,0.2)] transition duration-300 ease-in-out hover:shadow-md">
            <div class="flex justify-between items-start">
              <div>
                <h3 class="text-lg font-medium">
                  <ContentSlot name="item2Name" />
                </h3>
                <p class="text-sm mt-1">
                  <ContentSlot name="item2Description" />
                </p>
              </div>
              <span class="text-lg font-semibold">
                <ContentSlot name="item2Price" />€
              </span>
            </div>
          </div>
          <!-- Boisson Chaude 3 -->
          <div class="bg-gray-50 dark:bg-[#281c1f] p-4 rounded-lg shadow-[0_2px_10px_-2px_rgba(93,96,127,0.2)] transition duration-300 ease-in-out hover:shadow-md">
            <div class="flex justify-between items-start">
              <div>
                <h3 class="text-lg font-medium">
                  <ContentSlot name="item3Name" />
                </h3>
                <p class="text-sm mt-1">
                  <ContentSlot name="item3Description" />
                </p>
              </div>
              <span class="text-lg font-semibold">
                <ContentSlot name="item3Price" />€
              </span>
            </div>
          </div>
          <!-- Boisson Chaude 4 -->
          <div class="bg-gray-50 dark:bg-[#281c1f] p-4 rounded-lg shadow-[0_2px_10px_-2px_rgba(93,96,127,0.2)] transition duration-300 ease-in-out hover:shadow-md">
            <div class="flex justify-between items-start">
              <div>
                <h3 class="text-lg font-medium">
                  <ContentSlot name="item4Name" />
                </h3>
                <p class="text-sm mt-1">
                  <ContentSlot name="item4Description" />
                </p>
              </div>
              <span class="text-lg font-semibold">
                <ContentSlot name="item4Price" />€
              </span>
            </div>
          </div>
          <!-- Boisson Chaude 5 -->
          <div class="bg-gray-50 dark:bg-[#281c1f] p-4 rounded-lg shadow-[0_2px_10px_-2px_rgba(93,96,127,0.2)] transition duration-300 ease-in-out hover:shadow-md">
            <div class="flex justify-between items-start">
              <div>
                <h3 class="text-lg font-medium">
                  <ContentSlot name="item5Name" />
                </h3>
                <p class="text-sm mt-1">
                  <ContentSlot name="item5Description" />
                </p>
              </div>
              <span class="text-lg font-semibold">
                <ContentSlot name="item5Price" />€
              </span>
            </div>
          </div>
          <!-- Boisson Chaude 6 -->
          <div class="bg-gray-50 dark:bg-[#281c1f] p-4 rounded-lg shadow-[0_2px_10px_-2px_rgba(93,96,127,0.2)] transition duration-300 ease-in-out hover:shadow-md">
            <div class="flex justify-between items-start">
              <div>
                <h3 class="text-lg font-medium">
                  <ContentSlot name="item6Name" />
                </h3>
                <p class="text-sm mt-1">
                  <ContentSlot name="item6Description" />
                </p>
              </div>
              <span class="text-lg font-semibold">
                <ContentSlot name="item6Price" />€
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Catégorie 2 : Boissons Froides -->
      <div class="mb-12">
        <h2 class="text-2xl font-semibold mb-4 flex items-center">
          <ContentSlot name="category2Icon" />
          <ContentSlot name="category2Name" />
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <!-- Boisson Froide 1 -->
          <div class="bg-gray-50 dark:bg-[#281c1f] p-4 rounded-lg shadow-[0_2px_10px_-2px_rgba(93,96,127,0.2)] transition duration-300 ease-in-out hover:shadow-md">
            <div class="flex justify-between items-start">
              <div>
                <h3 class="text-lg font-medium">
                  <ContentSlot name="item8Name" />
                </h3>
                <p class="text-sm mt-1">
                  <ContentSlot name="item8Description" />
                </p>
              </div>
              <span class="text-lg font-semibold">
                <ContentSlot name="item8Price" />€
              </span>
            </div>
          </div>
          <!-- Boisson Froide 2 -->
          <div class="bg-gray-50 dark:bg-[#281c1f] p-4 rounded-lg shadow-[0_2px_10px_-2px_rgba(93,96,127,0.2)] transition duration-300 ease-in-out hover:shadow-md">
            <div class="flex justify-between items-start">
              <div>
                <h3 class="text-lg font-medium">
                  <ContentSlot name="item9Name" />
                </h3>
                <p class="text-sm mt-1">
                  <ContentSlot name="item9Description" />
                </p>
              </div>
              <span class="text-lg font-semibold">
                <ContentSlot name="item9Price" />€
              </span>
            </div>
          </div>
          <!-- Boisson Froide 3 -->
          <div class="bg-gray-50 dark:bg-[#281c1f] p-4 rounded-lg shadow-[0_2px_10px_-2px_rgba(93,96,127,0.2)] transition duration-300 ease-in-out hover:shadow-md">
            <div class="flex justify-between items-start">
              <div>
                <h3 class="text-lg font-medium">
                  <ContentSlot name="item10Name" />
                </h3>
                <p class="text-sm mt-1">
                  <ContentSlot name="item10Description" />
                </p>
              </div>
              <span class="text-lg font-semibold">
                <ContentSlot name="item10Price" />€
              </span>
            </div>
          </div>
          <!-- Boisson Froide 4 -->
          <div class="bg-gray-50 dark:bg-[#281c1f] p-4 rounded-lg shadow-[0_2px_10px_-2px_rgba(93,96,127,0.2)] transition duration-300 ease-in-out hover:shadow-md">
            <div class="flex justify-between items-start">
              <div>
                <h3 class="text-lg font-medium">
                  <ContentSlot name="item11Name" />
                </h3>
                <p class="text-sm mt-1">
                  <ContentSlot name="item11Description" />
                </p>
              </div>
              <span class="text-lg font-semibold">
                <ContentSlot name="item11Price" />€
              </span>
            </div>
          </div>
          <!-- Boisson Froide 5 -->
          <div class="bg-gray-50 dark:bg-[#281c1f] p-4 rounded-lg shadow-[0_2px_10px_-2px_rgba(93,96,127,0.2)] transition duration-300 ease-in-out hover:shadow-md">
            <div class="flex justify-between items-start">
              <div>
                <h3 class="text-lg font-medium">
                  <ContentSlot name="item12Name" />
                </h3>
                <p class="text-sm mt-1">
                  <ContentSlot name="item12Description" />
                </p>
              </div>
              <span class="text-lg font-semibold">
                <ContentSlot name="item12Price" />€
              </span>
            </div>
          </div>
          <!-- Boisson Froide 6 -->
          <div class="bg-gray-50 dark:bg-[#281c1f] p-4 rounded-lg shadow-[0_2px_10px_-2px_rgba(93,96,127,0.2)] transition duration-300 ease-in-out hover:shadow-md">
            <div class="flex justify-between items-start">
              <div>
                <h3 class="text-lg font-medium">
                  <ContentSlot name="item13Name" />
                </h3>
                <p class="text-sm mt-1">
                  <ContentSlot name="item13Description" />
                </p>
              </div>
              <span class="text-lg font-semibold">
                <ContentSlot name="item13Price" />€
              </span>
            </div>
          </div>
        </div>
      </div>



      <div class="mb-12">
        <h2 class="text-2xl font-semibold mb-4 flex items-center">
          <ContentSlot name="category3Icon" />
          <ContentSlot name="category3Name" />
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <!-- Boisson Froide 1 -->
          <div class="bg-gray-50 dark:bg-[#281c1f] p-4 rounded-lg shadow-[0_2px_10px_-2px_rgba(93,96,127,0.2)] transition duration-300 ease-in-out hover:shadow-md">
            <div class="flex justify-between items-start">
              <div>
                <h3 class="text-lg font-medium">
                  <ContentSlot name="item14Name" />
                </h3>
                <p class="text-sm mt-1">
                  <ContentSlot name="item14Description" />
                </p>
              </div>
              <span class="text-lg font-semibold">
                <ContentSlot name="item14Price" />€
              </span>
            </div>
          </div>
          <!-- Boisson Froide 2 -->
          <div class="bg-gray-50 dark:bg-[#281c1f] p-4 rounded-lg shadow-[0_2px_10px_-2px_rgba(93,96,127,0.2)] transition duration-300 ease-in-out hover:shadow-md">
            <div class="flex justify-between items-start">
              <div>
                <h3 class="text-lg font-medium">
                  <ContentSlot name="item15Name" />
                </h3>
                <p class="text-sm mt-1">
                  <ContentSlot name="item15Description" />
                </p>
              </div>
              <span class="text-lg font-semibold">
                <ContentSlot name="item15Price" />€
              </span>
            </div>
          </div>
          <!-- Boisson Froide 3 -->
          <div class="bg-gray-50 dark:bg-[#281c1f] p-4 rounded-lg shadow-[0_2px_10px_-2px_rgba(93,96,127,0.2)] transition duration-300 ease-in-out hover:shadow-md">
            <div class="flex justify-between items-start">
              <div>
                <h3 class="text-lg font-medium">
                  <ContentSlot name="item17Name" />
                </h3>
                <p class="text-sm mt-1">
                  <ContentSlot name="item17Description" />
                </p>
              </div>
              <span class="text-lg font-semibold">
                <ContentSlot name="item17Price" />€
              </span>
            </div>
          </div>
          <!-- Boisson Froide 4 -->
          <div class="bg-gray-50 dark:bg-[#281c1f] p-4 rounded-lg shadow-[0_2px_10px_-2px_rgba(93,96,127,0.2)] transition duration-300 ease-in-out hover:shadow-md">
            <div class="flex justify-between items-start">
              <div>
                <h3 class="text-lg font-medium">
                  <ContentSlot name="item18Name" />
                </h3>
                <p class="text-sm mt-1">
                  <ContentSlot name="item18Description" />
                </p>
              </div>
              <span class="text-lg font-semibold">
                <ContentSlot name="item18Price" />€
              </span>
            </div>
          </div>
          <!-- Boisson Froide 5 -->
          <div class="bg-gray-50 dark:bg-[#281c1f] p-4 rounded-lg shadow-[0_2px_10px_-2px_rgba(93,96,127,0.2)] transition duration-300 ease-in-out hover:shadow-md">
            <div class="flex justify-between items-start">
              <div>
                <h3 class="text-lg font-medium">
                  <ContentSlot name="item19Name" />
                </h3>
                <p class="text-sm mt-1">
                  <ContentSlot name="item19Description" />
                </p>
              </div>
              <span class="text-lg font-semibold">
                <ContentSlot name="item19Price" />€
              </span>
            </div>
          </div>
          <!-- Boisson Froide 6 -->
          <div class="bg-gray-50 dark:bg-[#281c1f] p-4 rounded-lg shadow-[0_2px_10px_-2px_rgba(93,96,127,0.2)] transition duration-300 ease-in-out hover:shadow-md">
            <div class="flex justify-between items-start">
              <div>
                <h3 class="text-lg font-medium">
                  <ContentSlot name="item20Name" />
                </h3>
                <p class="text-sm mt-1">
                  <ContentSlot name="item20Description" />
                </p>
              </div>
              <span class="text-lg font-semibold">
                <ContentSlot name="item20Price" />€
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
/* Ajoutez ici des styles personnalisés si nécessaire */
</style>