<template>
  <div class="project-grid pb-xl">
    <div class="py-md grid gap-sm sm:grid-cols-2 md:grid-cols-3 fancy">
      <slot />
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
