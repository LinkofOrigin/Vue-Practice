<script setup lang="ts">
import PageLink from '@/components/PageLink.vue'
import router from '@/router';

const maxColumns = 3
const routes = router.getRoutes().filter((route) => route.path !== "/") // Filter out the homepage from the homepage

function getGridColTemplate(): string {
    let num = routes.length > maxColumns ? maxColumns : routes.length
    let gridColTemplate = ""
    for (let i = 0; i < num; i++) {
        gridColTemplate += "1fr "
    }
    return "grid-template-columns: " + gridColTemplate
}

</script>

<template>
    <div class="pageContainer">
        <div class="grid" :style="getGridColTemplate()">
            <PageLink  v-for="route in routes" :route="route" :image_path="route.meta.imagePath" />
        </div>
    </div>
</template>

<style scoped>
.pageContainer {
    display: flex;
    flex-grow: 1;
    place-content: center;
    place-items: center;
}

.grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    flex-shrink: 1;
    flex-grow: 0;
    gap: 2rem;
}
</style>