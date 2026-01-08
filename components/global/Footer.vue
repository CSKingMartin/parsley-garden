<template>
  <footer
    :class="color ? `bg-${color}` : 'bg-shamrock'"
    class="min-h-screen w-screen"
  >
    <div
      class="flex flex-col items-end text-black header-3 uppercase font-bold relative p-lg h-[calc(100vh-300px)]"
    >
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/work">Work</NuxtLink>
      <!-- <NuxtLink to="/blog">Blog</NuxtLink> -->
      <NuxtLink to="/about">About</NuxtLink>
    </div>
    <div class="bottom-[0] mt-[230px] sticky p-lg flex flex-col justify-end">
      <p class="text-black header-1 font-bold huge leading-[1]">
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
