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
        v-for="project in featuredWork"
        :class="`bg-${project.color}`"
        :top="project.cardTop"
        :bottom="project.cardBottom"
        :url="project.slug.current"
        :tagline="`with ${project.company.title}`"
        data-reveal
      />
    </ProjectSpread>
    <NuxtLink
      class="button bg-sky-blue border-sky-blue-500 hover:text-sky-blue hover:bg-black"
      to="/work"
      >See more work
    </NuxtLink>
    <p v-reveal class="font-sans font-bold huge header-2 text-center py-3xl">
      <em>“You can't blossom if you keep growing gardens out of weeds”</em> -
      Beach Bunny
    </p>
  </div>
</template>
<script lang="ts" setup>
import { featuredWorkQuery } from "~/sanity/queries";
import { useGlobalStore } from "~/stores";

const { data: featuredWork } = await useSanityQuery(featuredWorkQuery);

const globalStore = useGlobalStore();

onMounted(() => {
  globalStore.color = "shamrock";
});

pageMeta({
  title: "Parsley Garden",
  description: "I love zen gardens",
});
</script>
