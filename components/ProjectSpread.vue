<template>
  <div
    class="project-spread pb-xl py-sm flex gap-sm flex-wrap justify-center items-start relative w-screen"
    v-reveal="{ deep: true }"
  >
    <slot />
  </div>
</template>
<style lang="postcss">
.project-spread .project-card {
  width: 100%;

  @screen sm {
    max-width: calc(50% - var(--space-sm) * 1.6);
  }

  @screen md {
    max-width: calc(33% - var(--space-sm) * 1.6);
  }

  @screen 2xl {
    max-width: calc(20% - var(--space-sm) * 1.6);
  }
}
</style>
