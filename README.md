# playground

# VSCODE EXTENTIONS VUE3 SNIPPETS + VOLAR + VUE SYNTAX RAHUL

# COUNTER APP - CLICK + OR -

JS ONLY? SELECT BTN + TEXT, SIGNAL -> UPDATE

# CREATE VUE PROJECT

```bash
# NO ALL OPTIONS
npm init vue@latest
cd vue-counter-app
npm install
npm run dev
```

# EMPTY THE SRC/ASSETS/MAIN.CSS

# EDIT SRC/APP.VUE

```vue
<script setup>
import { ref } from "vue";
const count = ref(0);
</script>

<template>
  <main>
    <div>
      <h1>{{ count }}</h1>
      <button @click="count++">+</button>
      <button @click="count--">-</button>
    </div>
  </main>
</template>

<style scoped>
main {
  min-height: 100vh;
  display: flex;
  background-color: #eee;
}
div {
  margin: auto;
  padding: 2rem;
  background-color: #fff;
  text-align: center;
}
</style>
```

# COMPARE WITH HTML VERSION - SIMILAR

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      main {
        min-height: 100vh;
        display: flex;
        background-color: #eee;
      }
      div {
        margin: auto;
        padding: 2rem;
        background-color: #fff;
        text-align: center;
      }
    </style>
  </head>
  <body>
    <main>
      <div>
        <h1>0</h1>
        <button onclick="count++;text.innerHTML = count">+</button>
        <button onclick="count--;text.innerHTML = count">-</button>
      </div>
    </main>
  </body>
  <script>
    const text = document.querySelector("h1");
    let count = 0;
  </script>
</html>
```

# CONCLUSION - 1 VUE FILE

- JS + HTML + CSS IN 1 FILE
- SIMPLER ONCLICK / EVENTS
- FASTER DEV PROCESS

# VUE EXPLANATIONS

# NPM RUN DEV?

NPM RUN DEV = VUE DEV SERVER ON MY MACHINE (PORT 5174)

browser then can request to that PORT 5174

# NPM RUN DEV SEE PACKAGE.JSON SCRIPTS

npm run ...

- "dev": "vite"
- "build": "vite-build"
- ...

SO NPM RUN DEV = VITE

# REQ TO VITE?

1. SENDS BACK THE INDEX.HTML = EMPTY

2. BUDLE ALL LOGIC INTO JS, SENDS BACK JS - HYDRATION

THIS IS CSR & SPA -> ONLY 1 HTML

# WITH THE ABOVE, VUE CSR + SPA = SAME WITH VITE + REACT ALONE

# WHY ALL IN APP.VUE FILE? SEE INDEX.HTML, SCRIPT USES MAIN.JS -> THAT IMPORTS THE APP.VUE -> MOUNTS TO #app DIV (ROOT)

# HTML GOES INTO VUE TEMPLATE HTML TAG -> HTML IS NOT HTML HERE -> @click="..." -> VUE LANGUAGE

# STYLE SCOPED? MEANS IT APPLIES CSS TO THIS FILE ONLY -> NOT ALL

# ORDER DO NOT MATTER, SCRIPT TEMPLATE AND STYLE -> SOMETIMES IT AFFECTS FIXING BUGS?

# SCRIPT SETUP = COMPOSITION API -> WAY OF DEFINE STATE + CALLBACK

# TWO OPTIONS - OPTIONS API (OLD) & COMPOSITION API (NEW)

# `{{ JS THINGS HTML ESCAPE HERE }}`

# LISTENER -> @CLICK="JS GOES HERE" -> @CLICK="onSubmit()"

# CALLBACK -> count = count - 1 -> WILL NOT UPDATE {{COUNT}} WHY? NEED TO TURN COUNT INTO A STATE

# STATE CHANGE? RE-RENDER

# DEFINE COUNT AS STATE -> SAME AS USESTATE

# COUNTER APP CONCLUSION

- `USE STATE`

```js
// FROM
let count = 0;

// TO
import { ref } from "vue";
const count = ref(0);

count.value += 1;

// IN HTML?
count -> THIS GETS THE VALUE IMMEDIATELY
```

```vue
<!-- 3. -->
<script setup>
import { ref } from "vue";
const count = ref(0);
</script>

<!-- 1. HTML GOES INTO VUE TEMPLATE TAG -->
<template>
  <main>
    <div>
      <h1>{{ count }}</h1>
      <button @click="count++">+</button>
      <button @click="count--">-</button>
    </div>
  </main>
</template>

<!-- 2. CSS ARE IN STYLES TAG, SCOPED -> SO THAT OTHER VUE FILE NOT AFFECTED, THIS FILE ONLY -->
<style scoped>
main {
  min-height: 100vh;
  display: flex;
  background-color: #eee;
}
div {
  margin: auto;
  padding: 2rem;
  background-color: #fff;
  text-align: center;
}
</style>
```

# NOTES APP

# DIRECTIVES - v-show="true" -> THEN TAG IS BLOCK ELSE HIDDEN

# V-IF -> NOT RENDERED AT ALL -> NO DOM -> MAY BE BAD SEO

# NEED TO USE STATE FOR THE TEXTAREA - INPUT - SAME LIKE REACT -> IN VUE ITS CALLED 2 WAY BINDING

# 2 WAY BIND? STATE + V-MODEL DIRECTIVE

# RENDER MAP ARRAY? DIRECTIVE v-for="note in notes"

# WHY NEED KEY IN MAP? IF 1 ITEM REMOVED, ONLY REMOVE THE REMOVED ONE. WITHOUT KEY, IT DEL EVERYTHING AND RE-ITERATE THE MAP -> KEY = BETTER PERFORMANCE

# NOTES APP CONCLUSION

- `RENDER / NOT RENDER TAG -> MODAL / ERROR MSG`
- `USE STATE INPUT LIKE REACT + TRIM -> REM WHITE SPACE FROM TEXT`
- `RENDER ARRAY LIKE MAP`
- `INLINE STYLING = alt="test" -> :alt="quiz.name"`

```vue
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
```

# QUIZ APP

- `IMPORT FILES`
- `SEARCH FEATURE`
- `WATCH -> USE EFFECT [SEARCH] / 2 WAYS OR WRITING IT- SEARCH && CURRENTQUESTIONINDEX`
- `BETTER WAY THAN WATCH -> JUST WANT TO UPDATE A REF TO ANOTHER? COMPUTE -> 1 VALUE BASED ON OTHER VALUE`
- `COMPONENT -> PASS PROP + MULTIPLE PROP`
- `VIEWS -> PAGES DIR`
- `ROUTING -> FE ROUTES - ROUTER/INDEX.JS -> npm i vue-router -> createRouter`
  - `UPDATE MAIN.JS + UPDATE APP.VUE`
  - `NAV BAR COMP IN APP.VUE + LINKS - a tag refreshes, so USE ROUTERLINK from VUE ROUTER`
  - `STYLE ACTIVE NAVBAR LINK`
  - `DETAIL PAGE - car/:id -> GET ID`
  - `LAYOUT-ISH THING - PAGE CAN HAVE CHILD IN ITS SUB ROUTES -> CANT PASS PROP BUT IT CAN GRAB ID`
  - `PROGRAMMATICALLY KICK -> ON CLICK -> USE ROUTER.PUSH() CLIENT SIDE STYLE`
  - `BLOCK CERTAIN PAGES -> ID === 1? KICK BACK TO ID -> use params to check, if it is kick with router.push`
  - `ID NOT FOUND? USE v-if and v-else -> needs to be sibling div`
  - `404 PAGE -> EDIT THE INDEX.JS -> NEW OBJ PATH CATCH ALL WILDCARD`
  - `REDIRECT CERTAIN FE ROUTE`
  - `EMIT EVENT / SIGNAL LIKE GODOT -> CHILD EMIT -> PARENT LISTEN`

# INDEX.JS

```js
import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import QuizDetail from "../views/QuizDetail.vue";
import QuizDetailChild from "../components/QuizDetailChild.vue";
import NotFound from "../views/NotFound.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", name: "home", component: Home },
    { path: "/home", redirect: "/" },
    { path: "/about", name: "about", component: About },
    {
      path: "/quiz/:id",
      name: "quiz",
      component: QuizDetail,
      children: [{ path: "child", component: QuizDetailChild }],
    },
    { path: "/:catchall(.*)*", name: "Not Found", component: NotFound },
  ],
});

export default router;
```

# APP.VUE

```vue
<script setup>
import { RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
</script>

<template><Navbar /><RouterView /></template>

<style scoped></style>
```

# MAIN.JS

```js
import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(router);

app.mount("#app");
```

# CARD COMP

```vue
<script setup>
import { defineProps } from "vue";
import { RouterLink } from "vue-router";
const props = defineProps(["quiz"]);
const { quiz } = props;
</script>

<template>
  <RouterLink :to="`/quiz/${quiz.id}`" class="card">
    <img :src="quiz.img" :alt="quiz.name" />
    <h2>{{ quiz.name }}</h2>
    <p>{{ quiz.questions.length }} questions</p>
  </RouterLink>
</template>

<style scoped>
.card {
  border: 1px solid #000;
  padding: 1rem;
}
img {
  display: block;
}
</style>
```

# NAVBAR COMP

```vue
<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <RouterLink active-class="active" to="/">Home</RouterLink>
  <RouterLink active-class="active" to="/about">About</RouterLink>
</template>

<style scoped>
.active {
  color: red;
}
</style>
```
