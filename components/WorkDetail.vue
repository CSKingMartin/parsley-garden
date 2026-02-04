<template>
  <div class="work-detail relative">
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
            class="top-md max-md:mt-3xl md:mx-md max-w-[400px] md:opacity-[.3] md:mx-auto w-[105%]"
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
              :style="`--button-color: ${color}`"
              :class="`bg-${color} border-${color}-500 hover:text-${color}`"
              class="button"
              :href="url"
              >Visit {{ top }} {{ heading }}</a
            >
            <button class="mt-sm underline font-bold" @click="goBack()">
              Go back!
            </button>
          </div>
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
      <div
        v-if="url"
        :class="`text-${color}`"
        class="py-md flex flex-col items-start md:hidden w-full"
      >
        <a
          :style="`--button-color: ${color}`"
          :class="`bg-${color} border-${color}-500 hover:text-${color}`"
          class="button"
          :href="url"
          >Visit {{ top }} {{ heading }}</a
        >
        <button class="mt-sm underline font-bold" @click="goBack()">
          Go back!
        </button>
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
    landscape?: Boolean;
  }[];
}>();

function goBack() {
  history.back();
}
</script>
<style lang="postcss" scoped>
.work-detail .button {
  &:hover {
    color: var(--button-color);
  }
}
.text-panel {
  border-radius: 4px;
  background-color: #12130fbb;
  /* background-color: #eae6e5cc; */
}
</style>
