<script setup>
import { ref } from "vue";
const count = ref(0);
</script>

<template>
  <main>
    <div>
      <h1>{{ count }}</h1>
      <button @click="count++">+</button>
      <button @click="count--">-</button>
    </div>
  </main>
</template>

<style scoped>
main {
  min-height: 100vh;
  display: flex;
  background-color: #eee;
}
div {
  margin: auto;
  padding: 2rem;
  background-color: #fff;
  text-align: center;
}
</style>
