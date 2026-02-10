<template>
  <div class="work-landing relative">
    <div
      class="text-pink bg-sky-blue bg-red bg-grape bg-terracotta bg-camel bg-pink hover:text-pink hover:text-camel text-camel bg-yellow text-yellow hover:text-yellow hover:text-red hover:text-terracotta hover:text-sky-blue hover:text-grape hover:text-shamrock hover:text-bold-blue"
    />
    <div
      class="flex flex-col md:flex-row gap-md items-start py-md md:align-start"
    >
      <!-- COLUMN 1 -->
      <div
        class="flex md:h-[calc(100vh-var(--space-3xl))] flex-col md:basis-[40%] lg:basis-[30%] pt-2xl h-full"
      >
        <div class="sticky top-2xl">
          <h1 class="header-1 uppercase font-bold">Work</h1>
          <p class="font-bold">
            My career is highlighted by aiding web and design agencies make
            their dreams an interactive and compelling reality. Even if a
            website isn't going to change the world my craft had the power to
            change the perception of these digital brands and uplift their
            creators.
          </p>
        </div>
      </div>
      <!-- COLUMN 2 -->
      <div
        class="bg-black md:pt-2xl md:py-[0] flex flex-col w-full md:basis-[60%] lg:basis-[70%]"
      >
        <div
          class="max-md:my-auto max-md:mt-lg relative bg-black text-panel md:p-sm md:pt-2xl"
        >
          <div class="text-black">
            <template v-for="project in work">
              <div
                class="rounded-t-[4px] last:rounded-b-[4px] -mt-3xs px-2xs pt-2xs pb-xs transition-all"
                :class="`bg-${project.color} hover:text-${project.color} hover:bg-black`"
              >
                <NuxtLink :to="`/work/${project.slug.current}`">
                  <div class="flex items-center justify-between">
                    <p class="header-4 uppercase font-bold">
                      {{ project.title }}
                    </p>
                    <p class="ml-lg header-5 uppercase font-bold">
                      {{ project.year }}
                    </p>
                  </div>
                </NuxtLink>
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  work: {
    title: string;
    slug: string;
    color: string;
    company: {
      title: string;
      slug: string;
      url: string;
    };
  }[];
}>();
</script>
