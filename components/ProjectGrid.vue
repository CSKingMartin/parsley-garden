<template>
  <div class="project-grid">
    <div class="py-md grid sm:grid-cols-2 md:grid-cols-3 gap-sm">
      <div class="card text-black">
        <img src="/images/fpo-16-9.png" />
        <div class="p-xs">
          <h3 class="header-3">SERA Architects</h3>
          <p class="paragraph-sm">Some description about the card...</p>
          <a class="button">Read More</a>
        </div>
      </div>
      <div class="card text-black">
        <img src="/images/fpo-16-9.png" />
        <div class="p-xs">
          <h3 class="header-3">IEM</h3>
          <p class="paragraph-sm">Some description about the card...</p>
          <a class="button">Read More</a>
        </div>
      </div>
      <div class="card text-black">
        <img src="/images/fpo-16-9.png" />
        <div class="p-xs">
          <h3 class="header-3">Gray Family Foundation</h3>
          <p class="paragraph-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <a class="button">Read More</a>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="postcss" scoped>
.card {
  background: linear-gradient(
    to right bottom,
    var(--color-lime),
    var(--color-green)
  );
  border-radius: 4px;
  overflow: hidden; /* tucks image corners inside border radius */
}
</style>
