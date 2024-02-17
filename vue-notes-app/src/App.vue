<script setup>
import { ref } from "vue";
const showModal = ref(false);
const newNote = ref("");
const notes = ref([]);

const addNote = () => {
  notes.value.push({ text: newNote.value });
  showModal.value = false;
  newNote.value = "";
};
</script>

<template>
  <div class="modal card" v-if="showModal">
    <textarea
      v-model.trim="newNote"
      name="note"
      id="note"
      cols="30"
      rows="10"
    ></textarea>
    <button @click="addNote">Add new</button>
    <button @click="showModal = false">Close</button>
  </div>
  <header>
    <h1>Notes</h1>
    <button @click="showModal = true">Add new</button>
  </header>
  <main>
    <div class="card-container">
      <div
        v-for="note in notes"
        :key="note.text"
        class="card"
        :style="{ backgroundColor: '#eef' }"
      >
        <p>{{ note.text }}</p>
      </div>
    </div>
  </main>
</template>

<style scoped>
.card-container {
  margin-top: 1rem;
  gap: 1rem;
  display: flex;
  flex-wrap: wrap;
}
.card {
  border: 1px solid #000;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.modal {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 0 100vw #000a;
}
</style>
