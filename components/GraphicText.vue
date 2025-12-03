<template>
  <h1 class="graphic-text py-xl mx-auto"><slot /></h1>
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
