<template>
  <div>
    <h1 class="header-1 uppercase font-tenali">Work</h1>
    <p class="paragraph-lg">
      I have worked across a variety of web agencies over the years. In between
      each studio I have also done a share of contracting, either to get to know
      agencies to determine a good fit or just to lend a hand. I am proud of all
      my work. Here I have a showcase of just a slice of my web presence.
    </p>
    <div class="flex gap-sm py-md pb-xl">
      <div class="shrink">
        <NuxtLink to="/work/sera">
          <ProjectCard
            class="hover:scale-125"
            top="SERA"
            url="sera"
            heading="Architects"
            company="FINE Design"
          />
        </NuxtLink>
      </div>
      <div class="shrink">
        <NuxtLink to="/work/iem/">
          <ProjectCard
            top="IEM"
            url="iem"
            heading="Industrial Electric Mfg"
            company="FINE Design"
          />
        </NuxtLink>
      </div>
      <div class="shrink">
        <NuxtLink to="/work/gff/">
          <ProjectCard
            top="GFF"
            url="gff"
            heading="Gray Family Foundation"
            company="Studio Rover"
          />
        </NuxtLink>
      </div>
      <div class="shrink">
        <NuxtLink to="/work/spectrum/">
          <ProjectCard
            top="Spectrum"
            heading="Equity"
            url="spectrum"
            company="FINE Design"
          />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
pageMeta({
  title: "Parsley Garden | Portfolio",
  description: "Internet gardens built by Conner Parsley",
});
</script>
