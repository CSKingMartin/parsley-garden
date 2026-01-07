<template>
  <div class="graphic-text py-xl mx-auto">
    <h1 v-reveal="{ deep: 'true' }">
      <span data-reveal aria-hidden>PAR</span
      ><span data-reveal aria-hidden>SLEY</span>
      <span data-reveal aria-hidden>GAR</span
      ><span data-reveal aria-hidden>DEN</span>
      <span class="sr-only">Parsley Garden</span>
    </h1>
  </div>
</template>
<style lang="postcss" scoped>
.graphic-text {
  font-family: "TenaliRamakrishna";
  font-size: 12rem;
  line-height: 0.7;
  max-width: 310px;
  text-align: center;
  word-break: break-word;

  @screen sm {
    max-width: 100%;
  }
}
</style>
