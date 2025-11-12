<template>
  <header class="w-full">
    <div class="max-w-container mx-auto px-lg py-xs flex justify-center">
      <SvgLogo class="h-2xl" />
    </div>
  </header>
</template>
<script lang="ts" setup>
onMounted(() => {
  console.log("header mounted");
});
</script>
