<template>
  <div class="detail-page relative">
    <div
      class="flex flex-col md:flex-row-reverse md:items-start gap-md items-center max-md:items-stretch py-md md:align-start"
    >
      <!-- COLUMN 1 -->
      <div
        ref="sticky-block"
        class="md:top-xl md:sticky bg-black md:h-[calc(100vh-var(--space-3xl))] md:py-xl md:py-[0] flex flex-col w-full"
      >
        <div class="md:absolute w-full flex flex-col items-center">
          <ProjectCard
            v-reveal
            :class="`bg-${color}`"
            class="top-md md:mx-md md:max-w-[400px] md:opacity-[.3] md:mx-auto w-[105%]"
            :top="top"
            :abbv="abbv"
            :heading="heading"
            :tagline="title"
          />
        </div>
        <div
          :class="`text-${color}`"
          class="max-md:my-auto max-md:mt-lg relative bg-black text-panel md:p-sm md:mt-xl"
        >
          <slot />
        </div>
      </div>
      <!-- COLUMN 2 -->
      <div class="flex flex-col basis-[50%] items-center">
        <template v-for="(image, i) in images">
          <div
            v-reveal
            :class="image.landscape ? 'aspect-[4/3]' : 'aspect-[.7/1]'"
            class="mt-lg overflow-hidden rounded-[4px] flex items-center"
          >
            <img
              class="min-h-full object-cover object-center"
              :src="image.src"
              :alt="image.alt"
            />
          </div>
        </template>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  color: string;
  top?: string;
  heading: string;
  title: string;
  images?: {
    src: String;
    alt: String;
  }[];
}>();

function goBack() {
  history.back();
}
</script>
<style lang="postcss" scoped>
.text-panel {
  background-color: #12130fbb;
}
</style>
