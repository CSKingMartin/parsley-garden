<template>
  <footer
    :class="color ? `bg-${color}` : 'bg-shamrock'"
    class="h-screen w-screen flex flex-col"
  >
    <div
      class="flex flex-col items-end text-black header-3 uppercase font-bold relative p-lg grow"
    >
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/work">Work</NuxtLink>
      <!-- <NuxtLink to="/blog">Blog</NuxtLink> -->
      <NuxtLink to="/about">About</NuxtLink>
    </div>
    <div class="bottom-[0] sticky p-lg flex flex-col justify-end">
      <p class="text-black header-1 font-bold huge leading-[1] mr-3xl">
        GROW WITH PEACE OF MIND.
      </p>
    </div>
  </footer>
</template>
<script lang="ts" setup>
const props = defineProps<{
  color?: string;
}>();
</script>
