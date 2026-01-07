<template>
  <div class="work-detail relative">
    <div class="flex flex-col md:flex-row gap-md items-stretch py-md">
      <!-- COLUMN 1 -->
      <div class="basis-[30%] relative">
        <div v-reveal="{ deep: true }" class="sticky top-[0]">
          <slot />
        </div>
      </div>
      <!-- COLUMN 2 -->
      <div class="flex flex-col basis-[70%] gap-md mt-md md:mt-2xs">
        <template v-for="image in images">
          <img :src="image.src" :alt="image.alt" />
        </template>
      </div>
    </div>
    <div class="py-md">
      <button @click="goBack()">Go back!</button>
    </div>
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  images: {
    src: String;
    alt: String;
  }[];
}>();

function goBack() {
  history.back();
}
</script>
