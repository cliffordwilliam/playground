<template>
  <div>
    <Header />
    <main class="mt-16">
      <slot />
    </main>
  </div>
</template>
<script setup>
useHead({ titleTemplate: `%s - William` });
</script>
<style>
body {
  @apply dark:bg-gray-900 dark:text-gray-300;
}
</style>
