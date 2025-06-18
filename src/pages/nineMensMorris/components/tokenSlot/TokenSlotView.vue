<script setup lang="ts">
import { onBeforeMount, onMounted, ref } from 'vue';
import PlayerToken from '../playerPiece/playerToken';
import PlayerTokenIcon from '../playerPiece/PlayerTokenIcon.vue';
import EmptySlot from './EmptySlot.vue';
import TokenSlot from './tokenSlot';

const props = defineProps<{
    playerToken: PlayerToken | null,
}>()
const emit = defineEmits(['slotViewClicked'])

function slotViewClicked() {
    emit('slotViewClicked')
}

</script>

<template>
    <EmptySlot @click="slotViewClicked">
        <PlayerTokenIcon v-if="playerToken !== null" :token="playerToken" />
    </EmptySlot>
</template>

<style scoped>

</style>