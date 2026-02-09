<template>
  <div class="content-block font-bold">
    <PortableText :value="content" />
  </div>
</template>
<script lang="ts" setup>
import { PortableText } from "@portabletext/vue";

const props = defineProps<{
  content: Array;
}>();
</script>
<style lang="postcss">
.content-block > * + * {
  margin-top: var(--space-xs);
}
</style>
