<template>
  <header class="w-full">
    <NuxtLink
      to="/"
      class="max-w-container mx-auto px-lg py-xs flex justify-center"
    >
      <SvgLogo class="h-2xl" />
    </NuxtLink>
  </header>
</template>
<script lang="ts" setup>
onMounted(() => {
  console.log("header mounted");
});
</script>
