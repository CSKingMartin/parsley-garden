<template>
  <div class="min-h-screen bg-black text-shamrock">
    <Header class="relative z-10 bg-black" />
    <main class="bg-black relative px-lg z-10 min-h-screen">
      <div class="max-w-container m-auto">
        <slot />
      </div>
    </main>
    <Footer />
  </div>
</template>
