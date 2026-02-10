<template>
  <header class="w-full z-20 fixed">
    <div class="max-w-container mx-auto py-xs flex justify-center">
      <NuxtLink to="/">
        <SvgLogo
          :class="`text-${color}`"
          class="h-2xl transition-all duration-500"
        />
      </NuxtLink>
    </div>
  </header>
</template>
<script lang="ts" setup>
import { useGlobalStore } from "~/stores";

const globalStore = useGlobalStore();

const color = computed(() => {
  return globalStore.color;
});
</script>
