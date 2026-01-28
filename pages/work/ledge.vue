<template>
  <WorkDetail
    :images="[
      {
        src: '/images/SERA_1.png',
        alt: 'SERA Design Screenshot',
      },
      {
        src: '/images/SERA_2.png',
        alt: 'SERA Design Screenshot',
      },
      {
        src: '/images/SERA_3.png',
        alt: 'SERA Design Screenshot',
      },
      {
        src: '/images/SERA_4.png',
        alt: 'SERA Design Screenshot',
      },
      {
        src: '/images/SERA_5.png',
        alt: 'SERA Design Screenshot',
      },
    ]"
    color="grape"
    top="Lead Edge"
    heading="Captial"
    company="FINE Design"
    url="https://www.leadedge.com/"
  >
    <p class="text-grape font-bold">
      The build for Lead Edge Capital reflected the practicality and sleek model
      of the designs. Subtle animations on elements as they appear in the
      viewport and quick transitions between pages keep the presentation crisp
      and professional.
      <br />
      I feel websites like Lead Edge help demonstrate the "less is more" ideal.
      The experience is elevated by being absent of many pitfalls present on
      modern domains. In addition to no advertisements, long load times, or
      autoplaying audio the limited design elements feel curated, not sparse.
    </p>
  </WorkDetail>
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
