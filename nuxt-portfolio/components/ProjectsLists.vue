<template>
  <div>
    <section v-if="pending"><p>Loading...</p></section>
    <section v-else-if="error"><p>Something went wrong...</p></section>
    <section v-else>
      <ul class="flex flex-col gap-4">
        <li
          v-for="(repo, index) in repos"
          :key="index"
          class="border border-gray-200 rounded-sm hover:bg-gray-100"
        >
          <a :href="repo.html_url" target="_blank" class="block p-4">
            <div class="flex items-center">
              <span class="font-semibold">{{ repo.name }}</span>
              <span class="ml-auto">{{ repo.stargazers_count }} ⭐</span>
            </div>
            <p class="text-sm">
              {{ repo.description }}
            </p>
          </a>
        </li>
      </ul>
    </section>
  </div>
</template>
<script setup>
const { error, pending, data } = await useFetch(
  "https://api.github.com/users/cliffordwilliam/repos"
);
// BIND DATA REF TO REPOS CONST
const repos = computed(() => {
  return data.value
    .filter((repo) => repo.description)
    .sort((a, b) => b.stargazers_count - a.stargazers_count);
});
</script>
