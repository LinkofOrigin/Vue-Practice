<script setup lang="ts">
import VueBasics from './basics/VueBasics.vue';
import VueComponents from './components/VueComponents.vue';
import VueLifecycleHooks from './lifecycleHooks/VueLifecycleHooks.vue';
import VuePlayground from './playground/VuePlayground.vue';
import VueRendering from './rendering/VueRendering.vue';
</script>

<template>
    <div class="container">
        <VueBasics />
        <VueRendering />
        <VueComponents />
        <VueLifecycleHooks />
    </div>
    <VuePlayground />
</template>

<style scoped>
.container {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    column-gap: 2rem;
    row-gap: 1rem;
}

@media (min-width: 640px) {
    .container {
        grid-template-columns: repeat(2, 1fr);
    }
}
@media (min-width: 1280px) {
    .container {
        grid-template-columns: repeat(3, 1fr);
    }
}
</style>