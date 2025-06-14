<script setup lang="ts">
import { ref } from 'vue';
import { type PlayerPiece, PLAYER } from './playerPiece';
import { PlayerPieceIcon } from './PlayerPieceIcon.vue';
const props = defineProps<{
    piece: PlayerPiece,
}>()

let player = ref(props.piece)
</script>

<template>
    <PlayerPieceIcon :fillColor="player.color"></PlayerPieceIcon>
</template>

<style scoped>

</style>