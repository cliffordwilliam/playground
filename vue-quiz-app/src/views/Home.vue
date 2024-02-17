<script setup>
import { ref, watch } from "vue";
import q from "../data/quizes.json"; // moved static data there so easier to read here
import QuizCardItem from "../components/QuizCardItem.vue";

const quizes = ref(q);
const search = ref("");
watch(search, () => {
  quizes.value = q.filter((quiz) =>
    quiz.name.toLowerCase().includes(search.value.toLowerCase())
  );
});
</script>

<template>
  <header class="container">
    <h1>Quizes</h1>
    <input v-model.trim="search" type="text" placeholder="Search..." />
  </header>
  <main>
    <div class="container">
      <QuizCardItem v-for="quiz in quizes" :key="quiz.id" :quiz="quiz" />
      <!-- <div v-for="quiz in quizes" :key="quiz.id" class="card">
        <img :src="quiz.img" :alt="quiz.name" />
        <h2>{{ quiz.name }}</h2>
        <p>{{ quiz.questions.length }} questions</p>
      </div> -->
    </div>
  </main>
</template>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}
</style>
