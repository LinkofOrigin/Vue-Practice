<script setup lang="ts">

const props = defineProps<{
    title: string,
}>()
</script>

<template>
    <h4 class="title">{{ props.title }}</h4>
    <div class="content">
        <slot />
    </div>
</template>

<style scoped>
.title {
    font-size: 13px;
    font-weight: 800;
}

.content {
    font-size: 12px;
    font-weight: 500;
    margin-bottom: 10px;
}
</style>