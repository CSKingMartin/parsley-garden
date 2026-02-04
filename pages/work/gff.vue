<template>
  <WorkDetail
    :images="[
      {
        src: '/images/GFF_9.png',
        alt: 'GFF  Screenshot',
      },
      {
        src: '/images/GFF_1.png',
        alt: 'GFF  Screenshot',
        landscape: true,
      },
      {
        src: '/images/GFF_5.png',
        alt: 'GFF  Screenshot',
      },
      {
        src: '/images/GFF_3.png',
        alt: 'GFF  Screenshot',
        landscape: true,
      },
      {
        src: '/images/GFF_8.png',
        alt: 'GFF  Screenshot',
      },
    ]"
    color="blue"
    abbv="GFF"
    heading="Gray Family Foundation"
    company="Studio Rover"
    url="https://www.grayff.org/"
  >
    <p class="text-blue font-bold">
      Working with Studio Rover gave opportunity to start afresh on the
      Front-End. I built the architecture for the Gray Family Foundation (GFF)
      site from the ground up. That means in addition to helping Studio Rover
      achieve their design intent this project required me to support features
      like the API calls, redirects, and state management without using an
      internal agency boilerplate.

      <br />
      Websites like this one are among my favorites to build. GFF's service to
      the Oregon community is inspiring, and getting to handpick technologies to
      support their vision helps my work feel impactful and important.
      <br />
      When responsible for non-profit domains, the word "stewardship" comes to
      mind often. Websites like that for the Gray Family Foundation are meant to
      be spaces for everyone, and ensuring the Front-End carries that ethos is
      crucial. Whether that be the simple look-and-feel of the site or its
      accessible features.
    </p>
  </WorkDetail>
</template>
<script lang="ts" setup>
import { useGlobalStore } from "~/stores";

const globalStore = useGlobalStore();

globalStore.color = "blue";

pageMeta({
  title: "Parsley Garden | GFF",
  description: "Internet gardens built by Conner Parsley",
});
</script>
