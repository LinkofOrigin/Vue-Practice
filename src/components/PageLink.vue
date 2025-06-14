<script setup lang="ts" >
import { RouterLink, type RouteRecord } from 'vue-router';
const props = defineProps<{
    route: RouteRecord,
    image_path: string,
}>()

// Vue Router with TypeScipt is kinda funky it seems...
function getRouteName(route: RouteRecord): string {
    return route.name as string
}

</script>

<template>
    <RouterLink class="routeLink" :to="{ name: getRouteName(props.route) }" activeClass="routeActiveOverride" exactActiveClass="routeExactActiveOverride">
        <h2 class="link_heading">{{ getRouteName(props.route) }}</h2>
        <img class="link_image" :src="props.route.meta.imagePath" :alt="getRouteName(props.route)"/>
    </RouterLink>
</template>

<style scoped>
.routeLink {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.routeActiveOverride {
    background-color: rgba(0, 0, 0, 0);
}

.routeExactActiveOverride {
    background-color: rgba(0, 0, 0, 0);
}

.page_link {
    border-radius: 4px;
    border-width: 2px;
    border-color: black;
    background-color: #a2a2a2;
    display: flex;
    flex-direction: column;
    padding: 0.5rem;
}

.link_heading {
    font-weight: 600;
    font-size:x-large;
    color: white;
}

.link_image {
    /* width: 2em;
    height: 2em; */
    flex-grow: 1;
    padding: 1rem;
}
</style>