<template>
  <header class="w-full z-20 fixed">
    <div class="max-w-container mx-auto py-xs flex md:justify-center">
      <NuxtLink class="max-md:mt-3xs max-md:ml-md" to="/">
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
