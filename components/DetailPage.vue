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
            :company="company"
          />
        </div>
        <div
          :class="`text-${color}`"
          class="max-md:my-auto max-md:mt-lg relative bg-black text-panel md:p-sm md:mt-xl"
        >
          <h1 class="uppercase font-bold font-sans header-3 mb-xs">
            {{ top }} {{ heading }}
          </h1>
          <slot />
          <div v-if="url" class="py-md flex flex-col items-start max-md:hidden">
            <a
              :class="`bg-${color} border-${color}-500 hover:text-${color}`"
              class="button"
              :href="url"
              >Visit {{ top }} {{ heading }}</a
            >
            <button class="mt-sm underline" @click="goBack()">Go back!</button>
          </div>
        </div>
      </div>
      <!-- COLUMN 2 -->
      <div class="flex flex-col basis-[50%] items-center">
        <!-- <ProjectCard
					:class="`bg-${color}`"
					class="top-md mx-md md:mx-lg max-md:hidden"
					:top="top"
					:heading="heading"
					:company="company"
				/> -->
        <template v-for="(image, i) in images">
          <img v-reveal class="mt-lg" :src="image.src" :alt="image.alt" />
        </template>
      </div>
      <div v-if="url" class="py-md flex flex-col items-start md:hidden w-full">
        <a class="button" :href="url">Visit {{ top }} {{ heading }}</a>
        <button class="mt-sm underline" @click="goBack()">Go back!</button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  color: string;
  top?: string;
  abbv?: string;
  heading: string;
  company: string;
  url?: string;
  images: {
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
