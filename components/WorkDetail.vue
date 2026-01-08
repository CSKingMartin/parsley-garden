<template>
  <div class="work-detail relative">
    <div class="flex flex-col md:flex-row gap-md items-stretch py-md">
      <!-- COLUMN 1 -->
      <ProjectCard
        class="bg-camel top-md sticky mx-md md:mx-lg"
        top="SERA"
        url="sera"
        heading="Architects"
        company="FINE Design"
        data-reveal
      />
      <div
        ref="sticky-block"
        class="sticky top-3xl bg-black h-[calc(100vh-var(--space-3xl))] py-xl flex flex-col"
      >
        <div class="my-auto">
          <slot />
          <!-- viewport for photos -->
          <div class="aspect-[4/3] block overflow-hidden mt-md">
            <div
              :style="{ '--percentage': `${state.percentage * -1000}%` }"
              class="flex flex-row h-full strip relative"
            >
              <template v-for="(image, i) in images">
                <img
                  :class="i !== 0 && 'ml-xl'"
                  :src="image.src"
                  :alt="image.alt"
                />
              </template>
            </div>
          </div>
        </div>
        <div class="py-md">
          <button @click="goBack()">Go back!</button>
        </div>
      </div>
      <!-- phantom spacers -->
      <!-- add width of all photos + xl * (n-1) where n is number of photos -->
      <div ref="phantom">
        <div
          class="phantom"
          :style="{ '--phantom-height': `${calculatedValue}vw` }"
        />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  top?: string;
  heading: string;
  company: string;
  url: string;
  images: {
    src: String;
    alt: String;
  }[];
}>();

const phantomRef = useTemplateRef("phantom");

const state = reactive({
  percentage: 0,
});
onMounted(() => {
  // observe the phantom
  // report when we are scrolling through it
  let options = {
    rootMargin: "0px",
    threshold: 0.1,
  };

  let observer = new IntersectionObserver((e) => {
    if (e[0] && e[0].isIntersecting) {
      console.log("i see you");
      // observer.disconnect();

      document.addEventListener("scroll", () => {
        state.percentage =
          1 -
          (document.body.clientHeight -
            window.scrollY -
            phantomRef.value.scrollHeight -
            40) /
            phantomRef.value.scrollHeight;
      });
    }
  }, options);

  observer.observe(phantomRef.value);
});

const calculatedValue = computed(() => {
  return props.images.length * 95;
});

function goBack() {
  history.back();
}
</script>
<style lang="postcss" scoped>
.phantom {
  display: block;
  height: var(--phantom-height);
}

.strip {
  transform: translateX(var(--percentage));
}
</style>
