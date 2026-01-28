<template>
  <WorkDetail
    :images="[
      {
        src: '/images/IEM_1.png',
        alt: 'IEM Website Screenshot',
      },
      {
        src: '/images/IEM_2.png',
        alt: 'IEM Website Screenshot',
      },
      {
        src: '/images/IEM_3.png',
        alt: 'IEM Website Screenshot',
      },
      {
        src: '/images/IEM_4.png',
        alt: 'IEM Website Screenshot',
      },
    ]"
    color="red"
    abbv="IEM"
    heading="Industrial Electric Mfg"
    company="FINE Design"
    url="https://www.iemfg.com/"
  >
    <p class="text-red font-bold">
      IEM's design library featured a lot of sharp edges and angular line-art.
      This fit well with IEM's primary product: industrial electric equipment.
      <br />
      My Front-End additions to this aesthetic was adapting an existing
      technique used to draw text underlines to the borders of many design
      elements on the site. The site header, global footer, and some subheadings
      on the site feature this flourish.
      <br />Animation, especially nonintrusive ones, can help humanize a
      website. These were unsurprisingly applied to IEM given they are all FINE
      Design staples, but I liked particularly them being applied to IEM's
      product lineup and aesthetic.
    </p>
  </WorkDetail>
</template>
<script lang="ts" setup>
import { useGlobalStore } from "~/stores";

const globalStore = useGlobalStore();

globalStore.color = "red";
</script>
