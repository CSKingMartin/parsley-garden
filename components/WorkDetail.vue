<template>
  <div class="work-detail relative">
    <div
      class="flex flex-col md:flex-row-reverse md:items-start gap-md items-center max-md:items-stretch py-md"
    >
      <!-- COLUMN 1 -->
      <ProjectCard
        v-reveal
        :class="`bg-${color}`"
        class="top-md mx-md md:mx-lg md:hidden"
        :top="top"
        :heading="heading"
        :company="company"
      />
      <div
        ref="sticky-block"
        class="md:top-3xl md:sticky bg-black md:h-[calc(100vh-var(--space-3xl))] py-xl md:pt-[0] md:pb-3xl flex flex-col"
      >
        <div :class="`text-${color}`" class="my-auto">
          <slot />
          <div class="py-md flex flex-col items-start max-md:hidden">
            <a
              :class="`bg-${color} border-${color} hover:text-${color}`"
              class="button"
              href="https://www.seradesign.com/"
              >Visit {{ top }}</a
            >
            <button class="mt-sm underline" @click="goBack()">Go back!</button>
          </div>
        </div>
      </div>
      <!-- COLUMN 2 -->
      <div class="flex flex-col basis-[30%] items-center">
        <ProjectCard
          :class="`bg-${color}`"
          class="top-md mx-md md:mx-lg max-md:hidden"
          :top="top"
          :heading="heading"
          :company="company"
        />
        <template v-for="(image, i) in images">
          <img v-reveal class="mt-lg" :src="image.src" :alt="image.alt" />
        </template>
      </div>
      <div class="py-md flex flex-col items-start md:hidden w-full">
        <a class="button" href="https://www.seradesign.com/"
          >Visit {{ company }}</a
        >
        <button class="mt-sm underline" @click="goBack()">Go back!</button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  color: string;
  top?: string;
  heading: string;
  company: string;
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
.phantom {
  display: block;
  height: var(--phantom-height);
}

.strip {
  transform: translateX(var(--percentage));
}
</style>
