<template>
  <div class="project-grid pb-xl">
    <h2 class="uppercase font-tenali header-1 text-center">Featured Work</h2>
    <div class="py-md grid gap-sm sm:grid-cols-2 md:grid-cols-3 fancy">
      <ProjectCard
        top="SERA"
        url="sera"
        heading="Architects"
        company="FINE Design"
      />
      <ProjectCard
        top="IEM"
        url="iem"
        heading="Industrial Electric Mfg"
        company="FINE Design"
      />
      <ProjectCard
        top="GFF"
        url="gff"
        heading="Gray Family Foundation"
        company="Studio Rover"
      />
    </div>
  </div>
</template>
<style lang="postcss" scoped>
.project-grid .fancy {
  /* @screen md {
    .project-card {
      max-width: 300px;
    }
  } */
}
</style>
