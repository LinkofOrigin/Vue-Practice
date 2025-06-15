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
    console.log("Board slot [" + props.row + "," + props.column + "] is token: " + (isToken))
    return isToken;
}
function getToken(): PlayerToken | null {
    let tokenData = null;
    if (props.tokenSlot !== null && props.tokenSlot.currentToken !== null) {
        tokenData = props.tokenSlot.currentToken;
    }
    return tokenData;
}

function isHorzLine(): boolean {
    debugger;
    let isHorz = false;
    if (!isToken() && (props.row - 1) % 2 === 0) {
        isHorz = true;
    }
    return isHorz;
}

function isVertLine(): boolean {
    debugger;
    let isVert = false;
    if (!isToken() && (props.column - 1) % 2 === 0) {
        isVert = true;
    }
    return isVert;

}
</script>

<template>
    <TokenSlotView v-if="isToken()" :player-token="getToken()" />
    <div v-else-if="isHorzLine()" class="horzLine"></div>
    <div v-else-if="isVertLine()" class="vertLine"></div>
</template>

<style scoped>
.horzLine {
    background-color: black;
    height: 2px;
}

.vertLine {
    background-color: black;
    width: 2px;
}
</style>