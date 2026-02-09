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
            :bottom="bottom"
            :tagline="`With ${company}`"
          />
        </div>
        <div
          :class="`text-${color}`"
          class="max-md:my-auto max-md:mt-lg relative bg-black text-panel md:p-sm md:mt-xl"
        >
          <h1 class="uppercase font-bold font-sans header-3 mb-xs">
            {{ title }}
          </h1>
          <Block :content="body" />

          <div v-if="url" class="py-md flex flex-col items-start max-md:hidden">
            <a
              :style="`--button-color: ${color}`"
              :class="`bg-${color} border-${color}-500 hover:text-${color}`"
              class="button"
              :href="url"
              >Visit {{ title }}</a
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
            <SanityImage
              class="min-h-full object-cover object-center"
              :asset-id="image.image.asset._ref"
              auto="format"
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
          >Visit {{ title }}</a
        >
        <button class="mt-sm underline font-bold" @click="goBack()">
          Go back!
        </button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { PortableText } from "@portabletext/vue";

const props = defineProps<{
  title: string;
  color: string;
  top?: string;
  abbv?: string;
  bottom: string;
  company: string;
  url?: string;
  body: Array;
  images: {
    image: string;
    landscape?: Boolean;
  }[];
}>();

console.log(props);

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
