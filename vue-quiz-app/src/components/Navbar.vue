<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <RouterLink active-class="active" to="/">Home</RouterLink>
  <RouterLink active-class="active" to="/about">About</RouterLink>
</template>

<style scoped>
.active {
  color: red;
}
</style>
