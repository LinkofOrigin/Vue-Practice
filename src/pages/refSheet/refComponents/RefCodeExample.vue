<script setup lang="ts">

const props = defineProps<{
    code: string,
}>()
</script>

<template>
    <pre class="templateText"><code>{{ props.code }}</code></pre>
</template>

<style scoped>
.templateText {
    background-color: #e3e3e3;
    color: black;
    font-size: 11px;
    line-height: 140%;
    padding: 4px;
    margin: 3px 0;
}
</style>