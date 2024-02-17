<script setup>
import { defineProps, defineEmits } from "vue";
const { questionStatus, barPercentage } = defineProps([
  "questionStatus",
  "barPercentage",
]);
const emit = defineEmits(["selectOption"]);
const emitSelectedOption = (dummyData) => {
  emit("selectOption", dummyData);
};
</script>

<template>
  <p>{{ barPercentage }}</p>
  <p>{{ questionStatus }}</p>
  <button @click="emitSelectedOption('signal from child')">
    Emit signal to parent
  </button>
</template>
