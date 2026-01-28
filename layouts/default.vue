<template>
  <div
    :class="color ? `text-${color}` : 'text-shamrock'"
    class="min-h-screen bg-black"
  >
    <Header :color="color ? color : 'shamrock'" class="z-20" />
    <main class="bg-black relative px-lg z-10 min-h-screen">
      <div class="max-w-container m-auto">
        <slot />
      </div>
    </main>
    <Footer :color="color ? color : 'shamrock'" />
  </div>
</template>
<script lang="ts" setup>
const props = defineProps<{
  color?: string;
}>();
</script>
