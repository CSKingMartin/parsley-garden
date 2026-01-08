<template>
  <div>Lead Edge Capital</div>
</template>
<script lang="ts" setup>
import { useGlobalStore } from "~/stores";

const globalStore = useGlobalStore();

globalStore.color = "grape";

pageMeta({
  title: "Parsley Garden | Lead Edge Capital",
  description: "Internet gardens built by Conner Parsley",
});
</script>
