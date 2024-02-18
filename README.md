# playground

# NUXT PORTFOLIO APP

# CREATE NUXT PROJ

```bash
npx nuxi@latest init <project-name>
```

# START FE SERVER / APP

```bash
npm run dev
```

# APP.VUE -> SETUP PAGE ROUTING

```vue
<template>
  <!-- CAN ADD NAVBAR HERE -> USE NUXTLINK === GLOBAL LAYOUT -->
  <div>
    <NuxtPage />
  </div>
</template>
```

# CREATE PAGES DIR ROOT CHILD

# CAN SEE PAGES IN DEV TOOL

- root
  - pages
    - index.vue -> /
    - about.vue -> /about
    - BLOG DIR
      - index.vue -> /blog
      - [id].vue -> /blog/:id

# GET ID PARAMS

```vue
<template>
  <h1>blog detail {{ route.params.id }}</h1>
</template>
<script setup>
const route = useRoute();
</script>
```

# CREATE LAYOUTS DIR ROOT CHILD + UPDATE APP.VUE TO USE LAYOUT

# CAN SEE LAYOUTS IN DEV TOOL

```vue
<template>
  <nav>
    <ul>
      <li><NuxtLink to="/">Home</NuxtLink></li>
      <li><NuxtLink to="/about">About</NuxtLink></li>
    </ul>
  </nav>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
```

# GLOBAL / DEFAULT LAYOUT === DEFAULT.VUE -> BETTER DO LIKE THIS FOR GLOBAL LAYOUT

# APP.VUE GLOBAL LAYOUT SETUP

```vue
<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
```

# LAYOUTS/DEFAULT.VUE

```vue
<template>
  <div>
    <nav>
      <ul>
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/about">About</NuxtLink></li>
      </ul>
    </nav>
    <slot />
  </div>
</template>
```

# LAYOUT FOR ABOUT PAGE ONLY?

# LAYOUTS/ANOTHER.VUE

```vue
<template>
  <div>
    <p>ANOTHER</p>
    <slot />
  </div>
</template>
```

# METHOD 1: APP.VUE -> CONTROLS WHAT LAYOUT TO USE

```vue
<template>
  <NuxtLayout :name="layout">
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup>
const layout = "another";
</script>
```

# METHOD 2: SETUP PER PAGE

```vue
<template><h1>about</h1></template>
<script setup>
definePageMeta({ layout: "another" });
</script>
```

# METHOD 2 + DYNAMIC: ONCLICK

```vue
<template>
  <div>
    <h1>about</h1>
    <button @click="changeLayout">CHANGE LAYOUT</button>
  </div>
</template>
<script setup>
const changeLayout = () => {
  setPageLayout("another");
};
definePageMeta({ layout: false });
</script>
```

# TAILWIND CSS -> A MODULE IN NUXT -> THERE IS A LOT nuxt.com/modules

# CAN SEE MODULES IN DEV TOOL

# TAILWIND PAK

```bash
npm install --save-dev @nuxtjs/tailwindcss
```

# NUXT.CONFIG.TS

```ts
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
});
```

# STYLE DEFAULT.VUE

```vue
<template>
  <div>
    <!-- HEADER -->
    <header class="border-b">
      <!-- HEADER CEN CON -->
      <div class="container mx-auto flex items-center gap-4 p-4">
        <!-- LOGO -->
        <div class="mr-auto">
          <!-- LOGO LINK -->
          <NuxtLink to="/" class="p-2">
            <!-- LOGO CONTENT -->
            <span class="text-xl font-semibold">William</span>
          </NuxtLink>
        </div>
        <!-- NAV -->
        <nav>
          <ul class="flex items-center gap-4">
            <li><NuxtLink to="/">Home</NuxtLink></li>
            <li><NuxtLink to="/about">About</NuxtLink></li>
          </ul>
        </nav>
      </div>
    </header>
    <slot />
  </div>
</template>
```

# COMPONENTS -> COMPONENTS DIR ROOT CHILD

THE ONE USING COMP

```vue
<template>
  <div>
    <Header />
    <slot />
  </div>
</template>
```

THE COMPONENTS/HEADER.VUE

```vue
<template>
  <div>
    <!-- HEADER -->
    <header class="border-b">
      <!-- HEADER CEN CON -->
      <div class="container mx-auto flex items-center gap-4 p-4">
        <!-- LOGO -->
        <div class="mr-auto">
          <!-- LOGO LINK -->
          <NuxtLink to="/" class="p-2">
            <!-- LOGO CONTENT -->
            <span class="text-xl font-semibold">William</span>
          </NuxtLink>
        </div>
        <!-- NAV -->
        <nav>
          <ul class="flex items-center gap-4">
            <li><NuxtLink to="/">Home</NuxtLink></li>
            <li><NuxtLink to="/about">About</NuxtLink></li>
          </ul>
        </nav>
      </div>
    </header>
  </div>
</template>
```

# CSS -> TAILWIND CONTENT

```vue
<template>
  <div>
    <header class="header">
      <div class="header-cen-con">
        <div class="header-logo-con">
          <NuxtLink to="/" class="header-logo-link">
            <Logo />
          </NuxtLink>
        </div>
        <!-- NAV -->
        <nav>
          <ul class="header-nav-ul">
            <li><NuxtLink class="header-link" to="/">Home</NuxtLink></li>
            <li><NuxtLink class="header-link" to="/about">About</NuxtLink></li>
          </ul>
        </nav>
      </div>
    </header>
  </div>
</template>
<style scoped>
.header {
  @apply border-b;
}
.header-cen-con {
  @apply container mx-auto flex items-center gap-4 p-4;
}
.header-logo-con {
  @apply mr-auto;
}
.header-logo-link {
  @apply p-2;
}
.header-nav-ul {
  @apply flex items-center gap-4;
}
.header-link {
  @apply hover:text-blue-600;
}
</style>
```

# SEO STUFF

# GET THE CODE FOR EDITITNG THE META FROM THE DEVTOOL

# OPEN GRAPH SIDE BAR -> OPEN SNIPPET + COPY

# GO TO THE INDEX.VUE -> ADD THAT TO SCRIPT TAG

```vue
<template>
  <div><h1>root</h1></div>
</template>
<script setup>
useSeoMeta({
  title: "Home page",
  description: "[description]",
  ogTitle: "[og:title]",
  ogDescription: "[og:description]",
  ogImage: "[og:image]",
  ogUrl: "[og:url]",
  twitterTitle: "[twitter:title]",
  twitterDescription: "[twitter:description]",
  twitterImage: "[twitter:image]",
  twitterCard: "summary",
});

useHead({
  htmlAttrs: {
    lang: "en",
  },
  link: [
    {
      rel: "icon",
      type: "image/png",
      href: "/favicon.png",
    },
  ],
});
</script>
```

# DYNMAIC TAB TITLE -> LAYOUT DEFAULT

LAYOUT.VUE

```vue
<script setup>
useHead({ titleTemplate: `%s - William` });
</script>
```

ABOUT.VUE

```vue
<template>
  <div><h1>about</h1></div>
</template>
<script setup>
useHead({ title: `About` });
</script>
```

# CAN CHANGE FONTS WITH GOOGLE FONTS CDN

DOCS/GETTING-STARTED/SEO-META#EXTERNAL-CSS

DEFAULT.VUE

```vue
<script setup lang="ts">
useHead({
  link: [
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Roboto&display=swap",
      crossorigin: "",
    },
  ],
});
</script>
```

# FETCH DATA - GET GITHUB PROJECTS IN NEW PAGE

https://nuxt.com/docs/api/utils/dollarfetch

https://api.github.com/users/cliffordwilliam/repos

# METHOD 1: BAD

THIS IS DONE 2X = SERVER + CLIENT

```vue
const res = await $fetch("https://api.github.com/users/cliffordwilliam/repos");
```

# METHOD useFetch = FETCH ONCE ONLY ON EITHER CLIENT OR SERVER

```vue
const {error, pending, data} = await
useFetch("https://api.github.com/users/cliffordwilliam/repos");
```

# PROJECTSLISTS.VUE

show the ones with DESC ONLY + SORT WITH HIGHEST TO LOWEST STARS

```vue
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
```

# DARK MODE - DEFAULT.VUE

```vue
<style>
body {
  @apply dark:bg-gray-900 dark:text-gray-300;
}
</style>
```

# GET THE NUXT COLOR MODE MODULE

https://color-mode.nuxtjs.org/#setup

# CREATE THE TAILWIND CONFIG FILE

https://color-mode.nuxtjs.org/#tailwindcss

if this gives error do npm run build

```ts
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/color-mode"],
  colorMode: {
    classSuffix: "",
  },
});
```

# USE IT - DEFAULT.VUE / WHEREVER

```vue
const colorMode = useColorMode() console.log(colorMode.preference)
```

# HEADER TOGGLE BUTTON

```vue
<template>
  <div>
    <header class="header">
      <div class="header-cen-con">
        <div class="header-logo-con">
          <NuxtLink to="/" class="header-logo-link">
            <logo />
          </NuxtLink>
        </div>
        <!-- NAV -->
        <nav>
          <ul class="header-nav-ul">
            <li><NuxtLink class="header-link" to="/">Home</NuxtLink></li>
            <li><NuxtLink class="header-link" to="/about">About</NuxtLink></li>
            <li>
              <NuxtLink class="header-link" to="/projects">Projects</NuxtLink>
            </li>
            <li>
              <button @click="setNextCurrentIndexToCurrent">
                {{ NextMode }}
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  </div>
</template>
<style scoped>
.header {
  @apply border-b;
}
.header-cen-con {
  @apply container mx-auto flex items-center gap-4 p-4;
}
.header-logo-con {
  @apply mr-auto;
}
.header-logo-link {
  @apply p-2;
}
.header-nav-ul {
  @apply flex items-center gap-4;
}
.header-link {
  @apply hover:text-blue-600;
}
</style>
<script setup>
const colorMode = useColorMode();
colorMode.preference = "light"; // LOCAL STORAGE NUXT COLOR MODE

// https://dirask.com/posts/JavaScript-positive-and-negative-around-index-wrapping-overlapping-to-address-items-in-array-pVyrnD
// array[(index % array.length + array.length) % array.length]

const modes = ["system", "light", "dark"];

// BIND NEXTMODE TO colorMode.preference
const NextMode = computed(() => {
  const NextModeIndex = modes.indexOf(colorMode.preference) + 1;
  return modes[((NextModeIndex % modes.length) + modes.length) % modes.length];
});

// NEXT -> NOW
const setNextCurrentIndexToCurrent = () => {
  colorMode.preference = NextMode.value;
};

const modesIcons = { system: "🌓", light: "☀️", dark: "🌙" };
</script>
```

# RENDER SOME PART IN CLIENT ONLY TO PREVENT MISMATCH IN BUTTON TEXT HYDRATION - CLIENT LIGHT, SERVER DARK? CANNOT

```vue
<template>
  <div>
    <header class="header">
      <div class="header-cen-con">
        <div class="header-logo-con">
          <NuxtLink to="/" class="header-logo-link">
            <logo />
          </NuxtLink>
        </div>
        <!-- NAV -->
        <nav>
          <ul class="header-nav-ul">
            <li><NuxtLink class="header-link" to="/">Home</NuxtLink></li>
            <li><NuxtLink class="header-link" to="/about">About</NuxtLink></li>
            <li>
              <NuxtLink class="header-link" to="/projects">Projects</NuxtLink>
            </li>
            <!-- SERVER MISMATCH ON HYFRATION -->
            <ClientOnly>
              <li class="flex items-center gap-2">
                <span class="text-gray-500 text-xs" v-if="showLightDarkLabel"
                  >Change to {{ NextMode }}</span
                >
                <button
                  @click="setNextCurrentIndexToCurrent"
                  class="hover:bg-gray-100 dark:hover:bg-gray-400 px-2 py-1 text-gray-600"
                  @mouseenter="showLightDarkLabel = true"
                  @mouseleave="showLightDarkLabel = false"
                >
                  {{ modesIcons[NextMode] }}
                </button>
              </li>
            </ClientOnly>
          </ul>
        </nav>
      </div>
    </header>
  </div>
</template>
<style scoped>
.header {
  @apply border-b;
}
.header-cen-con {
  @apply container mx-auto flex items-center gap-4 p-4;
}
.header-logo-con {
  @apply mr-auto;
}
.header-logo-link {
  @apply p-2;
}
.header-nav-ul {
  @apply flex items-center gap-4;
}
.header-link {
  @apply hover:text-blue-600;
}
</style>
<script setup>
const colorMode = useColorMode();
colorMode.preference = "light"; // LOCAL STORAGE NUXT COLOR MODE

// https://dirask.com/posts/JavaScript-positive-and-negative-around-index-wrapping-overlapping-to-address-items-in-array-pVyrnD
// array[(index % array.length + array.length) % array.length]

const modes = ["system", "light", "dark"];

// BIND NEXTMODE TO colorMode.preference
const NextMode = computed(() => {
  const NextModeIndex = modes.indexOf(colorMode.preference) + 1;
  return modes[((NextModeIndex % modes.length) + modes.length) % modes.length];
});

// NEXT -> NOW
const setNextCurrentIndexToCurrent = () => {
  colorMode.preference = NextMode.value;
};

const modesIcons = { system: "🌓", light: "☀️", dark: "🌙" };

const showLightDarkLabel = ref(false);
</script>
```

# NUXT CONTENT MODULE - CMS
