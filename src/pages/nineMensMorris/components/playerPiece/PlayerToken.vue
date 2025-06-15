<script setup lang="ts">
import { ref } from 'vue';
import PlayerToken from './playerToken';
import PlayerTokenIcon from './PlayerTokenIcon.vue';
const props = defineProps<{
    token: PlayerToken,
}>()

let player = ref(props.token)
</script>

<template>
    <PlayerTokenIcon :fillColor="player.color" />
</template>

<style scoped>

</style>