<template>
  <div class="graphic-text mx-auto min-h-screen flex flex-col justify-center">
    <h1 class="flex flex-col xl:flex-row lg:gap-sm" v-reveal="{ deep: 'true' }">
      <span
        ><span data-reveal aria-hidden>PAR</span
        ><span data-reveal aria-hidden>SLEY</span></span
      >
      <span>
        <span data-reveal aria-hidden>GAR</span
        ><span data-reveal aria-hidden>DEN</span>
      </span>
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
