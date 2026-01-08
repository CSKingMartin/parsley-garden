<template>
  <div class="shrink project-card aspect-[.7/1]">
    <component :is="props.url ? NuxtLink : 'span'" :to="`/work/${props.url}`">
      <div class="text-black h-full">
        <div class="p-xs text-center flex flex-col justify-between h-full">
          <h3>
            <template v-if="top || abbv"
              ><span class="paragraph-lg font-bold">{{ top }}{{ abbv }}</span
              ><br
            /></template>
            <span class="header-4 leading-[1] uppercase font-bold">{{
              heading
            }}</span>
          </h3>
          <div>
            <!-- <div
          class="relative aspect-square w-[0] overflow-visible my-xs mx-auto"
        >
          <div
            class="portal rounded-full bg-black aspect-square w-3xl -translate-x-1/2 -translate-y-1/2 absolute"
          ></div>
        </div> -->
            <p class="paragraph font-serif">with {{ company }}</p>
            <div class="flex mt-xs justify-center items-center gap-3xs">
              <div class="rounded-full bg-black w-xs aspect-square"></div>
              <div class="rounded-full bg-black w-xs aspect-square"></div>
              <div class="rounded-full bg-black w-xs aspect-square"></div>
            </div>
          </div>
        </div>
      </div>
    </component>
  </div>
</template>
<script lang="ts" setup>
import { NuxtLink } from "#components";
const props = defineProps<{
  top?: string;
  abbv?: string;
  heading: string;
  company: string;
  url?: string;
}>();

const state = reactive({
  active: false,
});

function onClick() {
  state.active = true;
}
</script>
<style lang="postcss" scoped>
.project-card {
  /* background: var(--color-white); */
  border-radius: 4px;

  /* &:hover {
    background: linear-gradient(
      to right bottom,
      var(--color-lime),
      var(--color-green)
    );
  } */
}
</style>
