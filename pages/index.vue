<template>
  <div>
    <GraphicText
      ><h1>
        <span aria-hidden>PAR</span><span aria-hidden>SLEY</span>
        <span aria-hidden>GAR</span><span aria-hidden>DEN</span>
        <span class="sr-only">Parsley Garden</span>
      </h1></GraphicText
    >
    <p class="text-white font-notokufi font-light header-3 text-center py-xl">
      The Internet has grown into a vast, deep, and tangled web. Here is a place
      to rest your feet! This site is to be a zen garden; the free space on the
      board. Welcome! My name is Conner Parsley, a professional web developer
      and "gardener." and this is my collection of curated work, thoughts, and
      projects.
    </p>
    <ProjectGrid>
      <ProjectCard
        class="bg-camel"
        top="SERA"
        url="sera"
        heading="Architects"
        company="FINE Design"
      />
      <ProjectCard
        class="bg-terracotta"
        top="IEM"
        url="iem"
        heading="Industrial Electric Mfg"
        company="FINE Design"
      />
      <ProjectCard
        class="bg-blue"
        top="GFF"
        url="gff"
        heading="Gray Family Foundation"
        company="Studio Rover"
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
