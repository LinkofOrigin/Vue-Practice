<script setup lang="ts">

const props = defineProps<{
    title: string,
}>()
</script>

<template>
    <div class="panel">
        <h3 class="title">{{ props.title }}</h3>
        <hr class="divider">
        <div class="content">
            <slot>Empty Panel!</slot>
        </div>
    </div>
</template>

<style scoped>
.panel {
    background-color: darkviolet;
    border-style: solid;
    border-color: rgb(38, 195, 223);
    border-width: 2px;
    border-radius: 8px;
    padding: 0.2rem 0.3rem;
    margin: 0.5rem 0;
}

.title {
    font-weight: 800;
    text-align: center;
    color: whitesmoke;
}

.divider {
    height: 2px;
    background: rgb(39, 39, 39);
    border: none;
    margin: 10px 0;
}

.content {
    font-weight: 600;
    color: white;
}

</style>

<style>
.content ul {
    padding-left: 25px;
}
</style>