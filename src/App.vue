<script setup lang="ts">
import { RouterView, RouterLink } from 'vue-router'
import router from '@/router'

const routes = router.getRoutes()
</script>

<template>
  <header>
    <nav>
      <RouterLink v-for="route in routes" :to="route.path">{{ route.name }}</RouterLink>
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
  padding: .6rem 1rem;
}

header nav a {
  color: black;
  font-weight: 600;
  padding: 0 1em;
}

main {
  display: flex;
  flex-grow: 1;
  place-content: center;
  flex-direction: column;
  max-width: 100%;
}
</style>
