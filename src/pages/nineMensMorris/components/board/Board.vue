<script setup lang="ts">
import Board from './board';
import type TokenSlot from '../tokenSlot/tokenSlot';
import BoardSlot from './BoardSlot.vue';

const props = defineProps<{
    board: Board,
}>()

function getRow(index: number) {
    let row = ((Math.floor(((index - 1) / 13))) % 13) + 1;
    console.log("Index: " + index + " => Row: " + row);
    return row;
}

function getCol(index: number) {
    let col = ((index - 1) % 13) + 1;
    console.log("Index: " + index + " => Col: " + col);
    return col;
}

let tokenIndex = 1;
const tokenSlots = new Map<number, number[]>([
    [1, [1, 7, 13]],
    [3, [3, 7, 11]],
    [5, [5, 7, 9]],
    [7, [1, 3, 5, 9, 11, 13]],
    [9, [5, 7, 9]],
    [11, [3, 7, 11]],
    [13, [1, 7, 13]],
])
function getToken(index: number): TokenSlot | null {
    let tokenData = null;
    if (tokenSlots.get(getRow(index)) !== null) {
        if (tokenSlots.get(getRow(index))?.includes(getCol(index))) {
            tokenData = props.board.grid[tokenIndex++];
        }
    }
    return tokenData;
}
</script>

<template>
    <div class="boardGrid">
        <BoardSlot v-for="index in 169" :row="getRow(index)" :column="getCol(index)" :tokenSlot="getToken(index)" />
    </div>
</template>

<style scoped>
.boardGrid {
    display: grid;
    grid-template-columns: repeat(13, 1fr);
    grid-template-rows: repeat(13, 1fr);
}
</style>