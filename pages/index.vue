<template>
  <div class="flex flex-col items-center">
    <GraphicText />
    <p v-reveal class="font-serif font-light header-3 text-center py-xl">
      The Internet has grown into a vast, deep, and tangled web. Here is a place
      to rest your feet! This site is to be a zen garden; the free space on the
      board. Welcome! My name is Conner Parsley, a professional web developer
      and gardener. and this is my collection of curated work, thoughts, and
      projects.
    </p>
    <div class="py-md md:py-xl">
      <h2 class="font-sans font-bold header-2 text-center">
        FEATURED WORK AND PROJECTS
      </h2>
    </div>
    <ProjectSpread
      class="pb-xl py-sm flex gap-sm flex-wrap justify-center items-start relative w-screen"
      v-reveal="{ deep: true }"
    >
      <ProjectCard
        class="bg-terracotta hover:scale-[1.05] duration-[.3s]"
        top="SERA"
        url="sera"
        heading="Architects"
        company="FINE Design"
        data-reveal
      />

      <ProjectCard
        class="bg-red hover:scale-[1.05] duration-[.3s]"
        top="IEM"
        url="iem"
        heading="Industrial Electric Mfg"
        company="FINE Design"
        data-reveal
      />

      <ProjectCard
        class="bg-blue hover:scale-[1.05] duration-[.3s]"
        top="GFF"
        url="gff"
        heading="Gray Family Foundation"
        company="Studio Rover"
        data-reveal
      />

      <ProjectCard
        class="bg-shamrock hover:scale-[1.05] duration-[.3s]"
        heading="Spectrum Equity"
        url="spectrum"
        company="FINE Design"
      />

      <ProjectCard
        class="bg-grape hover:scale-[1.05] duration-[.3s]"
        top="Lead Edge"
        heading="Capital"
        company="FINE Design"
      />
    </ProjectSpread>
    <p class="font-serif huge font-light header-2 text-center py-xl">
      “You can't blossom if you keep growing gardens out of weeds” - Beach Bunny
    </p>
  </div>
</template>
<script lang="ts" setup>
pageMeta({
  title: "Parsley Garden",
  description: "I love zen gardens",
});
</script>
