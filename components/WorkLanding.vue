<template>
  <div class="work-landing relative">
    <div
      class="flex flex-col md:flex-row-reverse md:items-start gap-md items-center max-md:items-stretch py-md md:align-start"
    >
      <!-- COLUMN 1 -->
      <div
        ref="sticky-block"
        class="md:top-xl md:sticky bg-black md:h-[calc(100vh-var(--space-3xl))] md:py-xl md:py-[0] flex flex-col w-full"
      >
        <div
          :class="`text-${color}`"
          class="max-md:my-auto max-md:mt-lg relative bg-black text-panel md:p-sm md:mt-xl"
        >
          <slot />
        </div>
      </div>
      <!-- COLUMN 2 -->
      <div class="flex flex-col basis-[50%] items-center">Column B</div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
