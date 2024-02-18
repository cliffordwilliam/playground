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
