<script setup>
import { defineProps } from "vue";
import { RouterLink } from "vue-router";
const props = defineProps(["quiz"]);
const { quiz } = props;
</script>

<template>
  <RouterLink :to="`/quiz/${quiz.id}`" class="card">
    <img :src="quiz.img" :alt="quiz.name" />
    <h2>{{ quiz.name }}</h2>
    <p>{{ quiz.questions.length }} questions</p>
  </RouterLink>
</template>

<style scoped>
.card {
  border: 1px solid #000;
  padding: 1rem;
}
img {
  display: block;
}
</style>
