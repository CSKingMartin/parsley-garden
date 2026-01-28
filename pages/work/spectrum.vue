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
    color="shamrock"
    heading="Spectrum Equity"
    company="FINE Design"
    url="https://www.spectrumequity.com/"
  >
    <p class="text-shamrock font-bold">
      Large portfolio websites like Spectrum Equity pose the challenge of having
      too much information to handle in software conventionally. For the reader,
      a large grid of endless logos is un-engaging and won't be read. For the
      designer, repeated elements of your design can often stretch the need for
      variety and visual breakup. For the Front-End developer handling
      dramatically different layouts at viewports for mobile phones, tablets,
      and desktop computers can lead to complex stylesheets and headaches.
      <br />
      The <a>portfolio page</a> for Spectrum Equity breaks up the uniform logo
      wall with large-panel links to Companies in their portfolio with a
      case-study to showcase. Using a different treatment for each media
      breakpoint helps the case-study panel fall at the optimal visual break for
      each.
    </p>
  </WorkDetail>
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
