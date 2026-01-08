<template>
  <header class="w-full">
    <NuxtLink
      to="/"
      class="max-w-container mx-auto px-lg py-xs flex justify-center"
    >
      <SvgLogo
        :class="`text-${color}`"
        class="h-2xl transition-all duration-500"
      />
    </NuxtLink>
  </header>
</template>
<script lang="ts" setup>
import { useGlobalStore } from "~/stores";

const globalStore = useGlobalStore();

const color = computed(() => {
  return globalStore.color;
});
</script>
