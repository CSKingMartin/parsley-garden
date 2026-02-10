<template>
  <div class="work-landing relative">
    <div
      class="hover:text-red hover:text-terracotta hover:text-sky-blue hover:text-grape"
    />
    <div
      class="flex flex-col md:flex-row gap-md items-start py-md md:align-start"
    >
      <!-- COLUMN 1 -->
      <div
        class="flex md:h-[calc(100vh-var(--space-3xl))] flex-col md:basis-[40%] lg:basis-[30%] items-center pt-2xl h-full"
      >
        <h1 class="sticky top-2xl header-1 uppercase font-bold">Work</h1>
      </div>
      <!-- COLUMN 2 -->
      <div
        class="bg-black md:py-xl md:py-[0] flex flex-col w-full md:basis-[60%] lg:basis-[70%]"
      >
        <div
          class="max-md:my-auto max-md:mt-lg relative bg-black text-panel md:p-sm"
        >
          <div class="text-black">
            <template v-for="project in work">
              <div
                class="px-2xs py-2xs transition-all"
                :class="`bg-${project.color} hover:text-${project.color} hover:bg-black`"
              >
                <NuxtLink :to="`/work/${project.slug.current}`">
                  <p class="header-4 uppercase font-bold">
                    {{ project.title }}
                  </p>
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
