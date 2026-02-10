<template>
  <WorkDetail
    :title="page?.title"
    :images="page?.images"
    :color="page?.color"
    :top="page?.cardTop"
    :bottom="page?.cardBottom"
    :company="page?.company.title"
    :url="page?.url"
    :body="page?.body"
  >
    <p class="text-terracotta text-red text-sky-blue font-bold"></p>
  </WorkDetail>
</template>
<script lang="ts" setup>
import type { Work } from "~/sanity/types";
import { useGlobalStore } from "~/stores";
import { useRoute } from "vue-router";
import { workQuery } from "~/sanity/queries";

const route = useRoute();
const globalStore = useGlobalStore();

const slug = route.params.slug ? route.params.slug[0].trim() : "";

const { data: page } = await useSanityQuery<Work>(workQuery, {
  slug: slug,
});

onMounted(() => {
  globalStore.color = page.value.color;
});

pageMeta({
  title: `${page.value.title} | Parsley Garden`,
  description: "Internet gardens built by Conner Parsley",
});
</script>
