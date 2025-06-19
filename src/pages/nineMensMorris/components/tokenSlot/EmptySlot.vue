<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
    highlight: boolean,
}>()

const highlightClass = computed(() => {
    let highlight = ""
    if (props.highlight) {
        highlight = "highlightClass"
    }
    return highlight
})
</script>
<template>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" :class="highlightClass">
        <g class="" transform="translate(0,0)">
            <path d="M256 23.05C127.5 23.05 23.05 127.5 23.05 256S127.5 488.9 256 488.9 488.9 384.5 488.9 256 384.5 23.05 256 23.05zm0 17.9c118.9 0 215.1 96.15 215.1 215.05S374.9 471.1 256 471.1c-118.9 0-215.05-96.2-215.05-215.1C40.95 137.1 137.1 40.95 256 40.95z"
                fill="#000000"
                fill-opacity="1">
            </path>
            <slot />
        </g>
    </svg>
</template>

<style scoped>
svg {
    max-height: 5rem;
    max-width: 5rem;
    border-radius: 1000px;
}

.highlightClass {
    background: radial-gradient(red, rgba(0,0,0,0));
}
</style>