<script setup lang="ts">
import PlayerToken from './playerToken';

const props = defineProps<{
    token: PlayerToken | null,
}>()

</script>

<template>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="max-height: 4rem; max-width: 4rem;">
        <g class="" transform="translate(0,0)" style="">
            <path
                d="M256 23.05C127.5 23.05 23.05 127.5 23.05 256S127.5 488.9 256 488.9 488.9 384.5 488.9 256 384.5 23.05 256 23.05z"
                :fill="props.token?.color" fill-opacity="1"></path>
        </g>
    </svg>
</template>

<style scoped>

</style>