<script setup lang="ts">
import PageLink from '@/components/PageLink.vue'
import router from '@/router';

const routes = router.getRoutes()
</script>

<template>
    <title>Homepage</title>
    <div class="grid" v-for="route in routes">
        <PageLink :route="route" :image_path="page.image" />
    </div>
</template>

<style scoped>
.grid {
    display: grid;
}
</style>