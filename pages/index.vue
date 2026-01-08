<template>
  <div>
    <GraphicText />
    <p
      v-reveal
      class="text-white font-notokufi font-light header-3 text-center py-xl"
    >
      The Internet has grown into a vast, deep, and tangled web. Here is a place
      to rest your feet! This site is to be a zen garden; the free space on the
      board. Welcome! My name is Conner Parsley, a professional web developer
      and "gardener." and this is my collection of curated work, thoughts, and
      projects.
    </p>
    <ProjectGrid v-reveal="{ deep: true }">
      <ProjectCard
        class="bg-camel"
        top="SERA"
        url="sera"
        heading="Architects"
        company="FINE Design"
        data-reveal
      />
      <ProjectCard
        class="bg-terracotta"
        top="IEM"
        url="iem"
        heading="Industrial Electric Mfg"
        company="FINE Design"
        data-reveal
      />
      <ProjectCard
        class="bg-blue"
        top="GFF"
        url="gff"
        heading="Gray Family Foundation"
        company="Studio Rover"
        data-reveal
      />
    </ProjectGrid>
    <p class="text-white font-notokufi font-light header-3 text-center py-xl">
      The Internet has grown into a vast, deep, and tangled web. Here is a place
      to rest your feet! This site is to be a zen garden; the free space on the
      board. Welcome! My name is Conner Parsley and this is my collection of
      curated work, thoughts, and projects.
    </p>
  </div>
</template>
<script lang="ts" setup>
pageMeta({
  title: "Parsley Garden",
  description: "I love zen gardens",
});
</script>
