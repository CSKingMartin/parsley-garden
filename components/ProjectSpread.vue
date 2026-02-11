<template>
  <div
    class="project-spread pb-xl py-sm flex gap-lg md:gap-md flex-wrap justify-center items-start relative"
    v-reveal="{ deep: true }"
  >
    <slot />
  </div>
</template>
<style lang="postcss">
.project-spread .project-card {
  /* margin: 0 var(--space-sm); */
  width: 105%;

  @screen sm {
    margin: 0;
    max-width: calc(50% - var(--space-sm) * 1.6);
    transition: transform 2s ease;
  }

  @screen md {
    max-width: calc(33% - var(--space-sm) * 1.6);
  }

  @screen 2xl {
    /* max-width: calc(20% - var(--space-sm) * 1.6); */
  }
}
</style>
