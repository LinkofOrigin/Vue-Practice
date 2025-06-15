<script setup lang="ts">
import PlayerToken from '../playerPiece/playerToken';
import PlayerTokenIcon from '../playerPiece/PlayerTokenIcon.vue';
import EmptySlot from './EmptySlot.vue';

const props = defineProps<{
    playerToken: PlayerToken | null,
}>()

</script>

<template>
    <EmptySlot>
        <PlayerTokenIcon v-if="playerToken !== null" :token="playerToken" />
    </EmptySlot>
</template>

<style scoped>

</style>