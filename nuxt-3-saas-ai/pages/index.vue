<template>
  <div>{{ user }}</div>
  <Button @click="signOut">Sign out</Button>
</template>

<script setup lang="ts">
const user = useSupabaseUser();
const supabase = useSupabaseClient();

async function signOut() {
  const { error } = await supabase.auth.signOut();

  if (error) {
    console.error(error);
    return;
  }

  await navigateTo("/auth");
}
</script>

<style scoped></style>
