<template>
  <div>Spectrum Equity</div>
</template>
<script lang="ts" setup>
import { useGlobalStore } from "~/stores";

const globalStore = useGlobalStore();

globalStore.color = "shamrock";

pageMeta({
  title: "Parsley Garden | Spectrum Equity",
  description: "Internet gardens built by Conner Parsley",
});
</script>
