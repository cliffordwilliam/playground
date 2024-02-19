<template>
  <h1>blog detail {{ route.params.slug }}</h1>
  <article>
    <ContentDoc />
  </article>
</template>
<script setup>
const route = useRoute();
</script>
