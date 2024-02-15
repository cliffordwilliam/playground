# playground

# 15/FEB/2024

# STACKS

- NUXT 3 - vue framework
- SUPABASE - db
- STRIPE - payment
- OPEN AI - generation
- SHADCN - UI
- CRISP - live chat

# NUXT PAK

REF: https://nuxt.com/docs/getting-started/installation

```bash
npx nuxi@latest init proj-name
```

# RUN 3000

```bash
npm run dev
```

# SHADCN PAK + OTHER STEPS READ DOC

ref: https://www.shadcn-vue.com/docs/installation/nuxt

```bash
npm install -D typescript
npm install -D @nuxtjs/tailwindcss
npm install -D shadcn-nuxt
```

# NUXT.CONFIG.TS -> RESTART APP / >reload ctrl shift p

```ts
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "shadcn-nuxt"],
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: "",
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: "./components/ui",
  },
});
```

# SHADCN INIT

```bash
npx shadcn-vue@latest init
```

# TRY BUTTON

```bash
npx shadcn-vue@latest add button
```

# APP.VUE

```vue
<template>
  <div>
    <Button>Click me</Button>
  </div>
</template>
```

# AUTH SUPABASE PAK

READ ALL STEPS HERE: https://github.com/nuxtbase/auth-ui-vue

```bash
npm add @nuxtjs/supabase @supabase/auth-ui-shared @nuxtbase/auth-ui-vue -D
```

# NUXT.CONFIG.TS

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ["@nuxtjs/supabase"],
});
```

# .ENV - GO TO SUPABASE TO GET VAL supabase.com/dashboard/project

```.env
SUPABASE_URL="<INSERT PROJECT URL>"
SUPABASE_KEY="<INSERT PROJECT ANON API KEY>"
```

# LAYOUT FOR AUTH PAGE root/layouts/home.vue

VBASE -> TS-SETUP SNIPPET SHORTCUT -> ADD SLOT

```vue
<template>
  <div><slot /></div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
```

# SUPABASE CLIENT root/pages/auth.vue

```vue
<!-- App.vue -->
<template>
  ...
  <Auth
    :supabaseClient="supabaseClient"
    :appearance="{
      theme: ThemeSupa,
    }"
  />
  ...
</template>

<script setup lang="ts">
// Import predefined theme
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { Auth } from "@nuxtbase/auth-ui-vue";

const supabaseClient = useSupabaseClient();
</script>
```

# UPDATE APP.VUE TO USE LAYOUT

```vue
<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
```

# UPDATE AUTH.VUE PAGE TO USE HOME LAYOUT EXPLICITLY -> RESTART APP / >reload ctrl shift p

```vue
<!-- App.vue -->
<template>
  ...
  <Auth
    :supabaseClient="supabaseClient"
    :appearance="{
      theme: ThemeSupa,
    }"
  />
  ...
</template>

<script setup lang="ts">
// Import predefined theme
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { Auth } from "@nuxtbase/auth-ui-vue";

const supabaseClient = useSupabaseClient();
definePageMeta({ layout: "home" });
</script>
```

# SET REDIRECT OPTION UPDATE NUXT.CONFIG.TS

READ: supabase.nuxtjs.org/get-started

```ts
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "shadcn-nuxt", "@nuxtjs/supabase"],
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: "",
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: "./components/ui",
  },
  supabase: {
    // Options
    redirectOptions: {
      login: "/auth",
      callback: "/confirm",
      exclude: [],
      cookieRedirect: false,
    },
  },
});
```

PUT PAGES U DONT WANT TO PROTECT IN EXCLUDE - LANDING PAGE

# PAK SHADCN CARD

```bash
npx shadcn-vue@latest add card
```

# WRAP AUTH PAGE WITH SHADCN CARD

```vue
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
          :appearance="{
            theme: ThemeSupa,
          }"
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
definePageMeta({ layouts: "home" });
</script>
```

# UPDATE TAILWIND CSS TO MAKE ROOT 100% HEIGHT? - IMPOSSIBLE - DIFF DOM LAYOUT

# SET LOGIN OAUTH OPTIONS

```vue
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
definePageMeta({ layouts: "home" });
</script>
```

# UPDATE REDIRECT AFTER LOGIN TO HOMEPAGE

```ts
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
definePageMeta({ layouts: "home" });
</script>
```

# EMAIL BY DEFUALT IS ENABLED IN SUPABASE AUTH SIDEBAR TAB

# TRY SIGN-UP WITH EMAIL

CONFIRM EMAIL -> CHECK SUPABASE AUTH USERS

# DO THIS AFTER AFTER SIGN IN -> CREATE ROOT PAGE AND GO THERE

pages/index.vue

VBASE -> TS-SETUP SNIPPET SHORTCUT

```vue
<template>
  <div>{{ user }}</div>
</template>

<script setup lang="ts">
const user = useSupabaseUser();
</script>

<style scoped></style>
```

# SETUP GITHUB AND GOOGLE LOGIN WATCH HERE AT 40min MARK

watch: https://wwkw.youtube.com/watch?v=UPxId0g4QyI&list=WL&index=7&t=1010s

# CREATE ROOT/UTILS/INDEX.ts

KEEP CONST HERE

```ts
export const dashboardRoutes = [
  {
    label: "Dashboard",
    icon: "lucide:layout-dashboard",
    link: "/dashboard",
    color: "text-sky-500",
  },
  {
    label: "Conversation",
    icon: "lucide:message-square",
    link: "/conversation",
    color: "text-violet-500",
  },
  {
    label: "Image Generation",
    icon: "lucide:image",
    color: "text-pink-700",
    link: "/image",
  },
  {
    label: "Video Generation",
    icon: "lucide:video",
    color: "text-orange-700",
    link: "/video",
  },
  {
    label: "Music Generation",
    icon: "lucide:music",
    color: "text-emerald-500",
    link: "/music",
  },
  {
    label: "Code Generation",
    icon: "lucide:code",
    color: "text-green-700",
    link: "/code",
  },
  {
    label: "Settings",
    icon: "lucide:settings",
    link: "/settings",
  },
];
export const tools = [
  {
    label: "Conversation",
    icon: "lucide:message-square",
    link: "/conversation",
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
  },
  {
    label: "Image Generation",
    icon: "lucide:image",
    color: "text-pink-700",
    link: "/image",
    bgColor: "bg-pink-700/10",
  },
  {
    label: "Video Generation",
    icon: "lucide:video",
    color: "text-orange-700",
    link: "/video",
    bgColor: "bg-orange-700/10",
  },
  {
    label: "Music Generation",
    icon: "lucide:music",
    color: "text-emerald-500",
    link: "/music",
    bgColor: "bg-emerald-500/10",
  },
  {
    label: "Code Generation",
    icon: "lucide:code",
    color: "text-green-700",
    link: "/code",
    bgColor: "bg-green-700/10",
  },
];
export const resolutionOptions = [
  {
    value: "256x256",
    text: "256x256",
  },
  {
    value: "512x512",
    text: "512x512",
  },
  {
    value: "1024x1024",
    text: "1024x1024",
  },
];

export const amountOptions = [
  {
    value: "1",
    text: "1 Photo",
  },
  {
    value: "2",
    text: "2 Photos",
  },
  {
    value: "3",
    text: "3 Photos",
  },
  {
    value: "4",
    text: "4 Photos",
  },
  {
    value: "5",
    text: "5 Photos",
  },
];

export const MAX_COUNT = 5;
```

# SELF LOGOUT CREATION SUCCESS

```bash
# alr got this
npm install @nuxtjs/supabase
```

# IN ROOT

```vue
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
```

# PROTECT FE SELF ATTEMPT - ON GOING

layout check for user? dont got then redirect to auth page, try this from docs

```vue
<template>
  <!-- Access the supabase user data -->
  {{ supabaseUser.email }}
</template>

<script lang="ts" setup>
import { createClient } from "@supabase/supabase-js";

const supabaseClient = createClient(
  "<INSERT PROJECT URL>",
  "<INSERT PROJECT ANON API KEY>"
);
const { supabaseUser } = useSupabaseUser(supabaseClient);

watch(
  () => supabaseUser.value,
  (user) => {
    if (!user) {
      return router.push("/login");
    }
  },
  { immediate: true }
);
</script>
```

# LAYOUT
