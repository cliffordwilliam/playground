<script setup>
import { useRoute, RouterView, useRouter } from "vue-router";
const route = useRoute();
const router = useRouter();
import quizes from "../data/quizes.json";
import { ref, watch, computed } from "vue";
import QuizPercentage from "../components/QuizPercentage.vue";

const quiz = quizes.find((q) => q.id === +route.params.id);
const currentQuestionIndex = ref(0);
// let questionStatus = `${currentQuestionIndex.value}/${quiz.questions.length}`; // need this to update too? USE WATCH
// watch(
//   () => currentQuestionIndex.value, // if U USE .VALUE, NEED TO WRITE LIKE THIS -> OTHERWISE SAME AS SEARCH
//   () => {
//     questionStatus = `${currentQuestionIndex.value}/${quiz.questions.length}`;
//   }
// );

// OR COMPUTE questionStatus based on currentQuestionIndex.value
const questionStatus = computed(() => {
  return `${currentQuestionIndex.value}/${quiz.questions.length}`;
});
const barPercentage = computed(() => {
  return `${(currentQuestionIndex.value / quiz.questions.length) * 100}`;
});
const onOptionSelected = (dummyData) => {
  console.log(dummyData);
};
</script>

<template>
  <h1>QuizDetail {{ route.params.id }}</h1>
  <button @click="router.push(`/quiz/${route.params.id}/child`)">Child</button>
  <h2>{{ questionStatus }}</h2>
  <!-- QUESTIONS + NEXT BTN -->
  <div v-if="currentQuestionIndex < quiz.questions.length">
    <div
      v-for="option in quiz.questions[currentQuestionIndex].options"
      :key="option.id"
    >
      <p>{{ option.label }}: {{ option.text }}</p>
    </div>
    <button @click="currentQuestionIndex++">next</button>
  </div>
  <!-- DONE -->
  <div v-else><p>Done</p></div>
  <QuizPercentage
    :questionStatus="questionStatus"
    :barPercentage="barPercentage"
    @selectOption="onOptionSelected"
  />
  <RouterView />
</template>
