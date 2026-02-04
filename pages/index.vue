<template>
  <div class="flex flex-col items-center">
    <GraphicText />
    <p v-reveal class="font-sans header-4 font-bold text-center pt-lg pb-3xl">
      The Internet has grown into a vast, deep, and tangled web. Here is a place
      to rest your feet! This site is to be a zen garden; the free space on the
      board. Welcome! My name is Conner Parsley, a professional web developer
      and gardener. This is my collection of curated work, thoughts, and
      projects.
    </p>
    <div v-reveal class="pt-3xl pb-md">
      <h2 class="font-sans font-bold header-2 text-center">
        FEATURED WORK AND PROJECTS
      </h2>
    </div>
    <ProjectSpread class="pb-3xl relative w-screen">
      <ProjectCard
        class="bg-terracotta"
        top="SERA"
        url="sera"
        heading="Architects"
        company="FINE Design"
        data-reveal
      />

      <ProjectCard
        class="bg-red"
        top="IEM"
        url="iem"
        heading="Industrial Electric Mfg"
        company="FINE Design"
        data-reveal
      />

      <ProjectCard
        class="bg-sky-blue"
        top="GFF"
        url="gff"
        heading="Gray Family Foundation"
        company="Studio Rover"
        data-reveal
      />

      <!-- <ProjectCard
        class="bg-shamrock"
        top="SPECTRUM"
        heading="Equity"
        url="spectrum"
        company="FINE Design"
      />

      <ProjectCard
        class="bg-grape"
        top="Lead Edge"
        heading="Capital"
        url="ledge"
        company="FINE Design"
      /> -->
    </ProjectSpread>
    <p v-reveal class="font-sans font-bold huge header-2 text-center py-3xl">
      <em>“You can't blossom if you keep growing gardens out of weeds”</em> -
      Beach Bunny
    </p>
  </div>
</template>
<script lang="ts" setup>
import { useGlobalStore } from "~/stores";

const globalStore = useGlobalStore();

onMounted(() => {
  globalStore.color = "shamrock";
});

pageMeta({
  title: "Parsley Garden",
  description: "I love zen gardens",
});
</script>
