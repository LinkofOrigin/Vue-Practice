<script setup lang="ts">
import { computed, onBeforeMount } from 'vue';
import type PlayerToken from '../playerPiece/playerToken';
import type TokenSlot from '../tokenSlot/tokenSlot';
import TokenSlotView from '../tokenSlot/TokenSlotView.vue';

const props = defineProps<{
    row: number,
    column: number,
    tokenSlot: TokenSlot | null,
}>()

const emit = defineEmits(['boardSlotClicked'])

function boardSlotClicked() {
    emit('boardSlotClicked', props.tokenSlot)
}

const playerToken = computed(() => {
    let tokenData = null;
    if (props.tokenSlot !== null && props.tokenSlot.currentToken !== null) {
        tokenData = props.tokenSlot.currentToken;
    }
    return tokenData;
})


function isToken(): boolean {
    let isToken = props.tokenSlot !== null;
    if (isToken) {
        console.log("Board slot [" + props.row + "," + props.column + "] is TOKEN")
    }
    return isToken;
}
</script>

<template>
    <TokenSlotView v-if="isToken()" :player-token="playerToken" @slot-view-clicked="boardSlotClicked" />
    <div v-else class="empty"></div>
</template>

<style scoped>
.empty {
    color: black;
}

.horzLine {
    background-color: black;
    height: 2px;
}

.vertLine {
    background-color: black;
    width: 2px;
}
</style>