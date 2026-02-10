<template>
  <div :class="`text-${globalStore.color}`">
    <div class="text-grape" />
    <WorkLanding :work="work" />
  </div>
</template>
<script lang="ts" setup>
import { useGlobalStore } from "~/stores";
import { allWorkQuery } from "~/sanity/queries";
const globalStore = useGlobalStore();

const { data: work } = await useSanityQuery(allWorkQuery);

onMounted(() => {
  globalStore.color = "sky-blue";
});

pageMeta({
  title: "Career Porfolio | Parsley Garden",
  description: "Internet gardens built by Conner Parsley",
});
</script>
