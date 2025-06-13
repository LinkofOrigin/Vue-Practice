<script setup lang="ts">
import { RouterView, RouterLink } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Homepage</RouterLink>
      <RouterLink to="/world-greeting">Hello World</RouterLink>
    </nav>
  </header>

  <main>
    <RouterView />
  </main>
</template>

<style scoped>
header {
  flex-grow: 0;
  flex-shrink: 1;
  width: 100%;
  background-color: #64898e;
  border-width: 6px;
  border-color: #3e4c84;
  border-top: 0;
}

header nav {
  display: flex;
  flex-direction: row;
  padding: .6rem 0;
}

header nav a {
  color: black;
  font-weight: 600;
  padding: 0 1em;
}

main {
  flex-grow: 1;
}
</style>
