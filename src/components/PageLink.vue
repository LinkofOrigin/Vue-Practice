<script setup lang="ts" >
import type { Ref } from 'vue'
import { ref } from 'vue'
import { RouterLink, type RouteRecord } from 'vue-router';
const props = defineProps<{
    route: RouteRecord,
    image_path: string,
}>()

const link_class: Ref<string, string> = ref('page_link')
const heading_class: Ref<string, string> = ref('link_heading')
const image_class: Ref<string, string> = ref('link_image')

</script>

<template>
    <RouterLink to="props.route.path">
        <h2 :class="heading_class">{{ props.route.name }}</h2>
        <image :class="image_class" :src="props.image_path" :alt="props.route.name" />
    </RouterLink>
</template>

<style scoped>
.page_link {
    border-radius: 4px;
    border-width: 2px;
    border-color: black;
    background-color: #a2a2a2;
    display: flex;
    flex-direction: column;
}

.link_heading {
    font-weight: 600;
    font-size: larger;
    color: white;
}

.link_image {
    width: 2em;
    height: 2em;
    flex-grow: 1;
}
</style>