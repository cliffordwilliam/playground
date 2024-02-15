<!-- App.vue -->
<template>
  <div class="min-h-screen flex">
    <Card class="container m-auto">
      <CardHeader>
        <CardTitle>Sign in</CardTitle>
        <CardDescription>Enter your account here.</CardDescription>
      </CardHeader>
      <CardContent>
        <Auth
          :supabaseClient="supabaseClient"
          :appearance="{ theme: ThemeSupa }"
          :providers="[`github`, `google`]"
          redirectTo="/"
        />
      </CardContent>
    </Card>
  </div>
</template>

<script setup lang="ts">
// Import predefined theme
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { Auth } from "@nuxtbase/auth-ui-vue";

const supabaseClient = useSupabaseClient();
definePageMeta({ layout: "home" });
</script>
