<script setup lang="ts">
import type PlayerToken from '../playerPiece/playerToken';
import type TokenSlot from '../tokenSlot/tokenSlot';
import TokenSlotView from '../tokenSlot/TokenSlotView.vue';

const props = defineProps<{
    row: number,
    column: number,
    tokenSlot: TokenSlot | null,
}>()

function isToken(): boolean {
    let isToken = props.tokenSlot !== null;
    if (isToken) {
        console.log("Board slot [" + props.row + "," + props.column + "] is TOKEN")
    }
    return isToken;
}
function getToken(): PlayerToken | null {
    let tokenData = null;
    if (props.tokenSlot !== null && props.tokenSlot.currentToken !== null) {
        tokenData = props.tokenSlot.currentToken;
    }
    return tokenData;
}
</script>

<template>
    <TokenSlotView v-if="isToken()" :player-token="getToken()" />
    <div v-else class="empty"></div>
</template>

<style scoped>
.empty {
    /* flex-grow: 1; */
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