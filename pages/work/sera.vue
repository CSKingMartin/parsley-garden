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
    color="terracotta"
    top="SERA"
    heading="Architects"
    company="FINE Design"
    url="https://www.seradesign.com/"
  >
    <p class="text-terracotta font-bold">
      SERA Architects design library had a palette of fun, contrasting colors
      that we wanted to showcase throughout. To bring the full arrangement into
      focus we added features like the changing the background color of the
      fullscreen navigation on each interaction.
      <br />
      To feature their large portfolio of images most components were designed
      to be fullscreen to showcase their details and provide the scale of SERA's
      work.
      <br />
      I am particularly proud of being able to work on SERA Architects for a
      multitude of reasons. Not only was it my premier solo project at FINE
      Design, it is also an
      <a
        href="https://www.webaward.org/winner/37455/fine-wins-2024-webaward-for-sera-architects.html"
        >award winning site</a
      >
      and for a local Portland Oregon business doing important work in the
      community.
    </p>
  </WorkDetail>
</template>
<script lang="ts" setup>
import { useGlobalStore } from "~/stores";

const globalStore = useGlobalStore();

globalStore.color = "terracotta";

pageMeta({
  title: "Parsley Garden | SERA Architects",
  description: "Internet gardens built by Conner Parsley",
});
</script>
