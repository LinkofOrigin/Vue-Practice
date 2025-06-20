<script setup lang="ts">
import { ref } from 'vue';
import TicTacToe from './ticTacToe';

const ticTacToe = ref(new TicTacToe())

ticTacToe.value.startGame()

function getPlayerClass(gridIndex: number): string {
    let playerClass = ""
    if (ticTacToe.value.grid[gridIndex].marker === 1) {
        playerClass = "playerOneColor"
    }
    else if (ticTacToe.value.grid[gridIndex].marker === 2) {
        playerClass = "playerTwoColor"
    }
    return playerClass
}

function getMarkerText(gridIndex: number) {
    let markerText = ""
    if (ticTacToe.value.grid[gridIndex].marker === 1) {
        markerText = "X"
    }
    else if (ticTacToe.value.grid[gridIndex].marker === 2) {
        markerText = "O"
    }
    return markerText
}

function gameCanBeReset() {
    return ticTacToe.value.winningPlayer !== 0 || ticTacToe.value.boardIsInDrawState()
}

function attemptMoveAt(index: number) {
    console.log("index is: " + index)
    if (ticTacToe.value.winningPlayer === 0) {
        ticTacToe.value.placeMarkerOnGrid(ticTacToe.value.currentPlayer, ticTacToe.value.grid[index])
    }
}

function resetGame() {
    ticTacToe.value.startGame()
}
</script>
<template>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Comic+Neue:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap" rel="stylesheet">
    
    <h2>Player Turn: {{ ticTacToe.currentPlayer }}</h2>
    <div v-if="gameCanBeReset()">
        <h3 v-if="ticTacToe.winningPlayer === 0">It's a draw!</h3>
        <h3 v-else>Player {{ ticTacToe.currentPlayer }} has won!</h3>
        <button @click="resetGame">Restart Game</button>
    </div>
    <div class="grid">
        <div class="gridSlot gridBorder gridBorderHideLeft gridBorderHideTop"
            @click="attemptMoveAt(0)"><p :class="getPlayerClass(0)">{{ getMarkerText(0) }}</p></div> 
        <div class="gridSlot gridBorder gridBorderHideTop"
            @click="attemptMoveAt(1)"><p :class="getPlayerClass(1)">{{ getMarkerText(1) }}</p></div> 
        <div class="gridSlot gridBorder gridBorderHideTop gridBorderHideRight"
            @click="attemptMoveAt(2)"><p :class="getPlayerClass(2)">{{ getMarkerText(2) }}</p></div> 
        <div class="gridSlot gridBorder gridBorderHideLeft"
            @click="attemptMoveAt(3)"><p :class="getPlayerClass(3)">{{ getMarkerText(3) }}</p></div> 
        <div class="gridSlot gridBorder"
            @click="attemptMoveAt(4)"><p :class="getPlayerClass(4)">{{ getMarkerText(4) }}</p></div> 
        <div class="gridSlot gridBorder gridBorderHideRight"
            @click="attemptMoveAt(5)"><p :class="getPlayerClass(5)">{{ getMarkerText(5) }}</p></div> 
        <div class="gridSlot gridBorder gridBorderHideLeft gridBorderHideBottom"
            @click="attemptMoveAt(6)"><p :class="getPlayerClass(6)">{{ getMarkerText(6) }}</p></div> 
        <div class="gridSlot gridBorder gridBorderHideBottom"
            @click="attemptMoveAt(7)"><p :class="getPlayerClass(7)">{{ getMarkerText(7) }}</p></div> 
        <div class="gridSlot gridBorder gridBorderHideBottom gridBorderHideRight"
            @click="attemptMoveAt(8)"><p :class="getPlayerClass(8)">{{ getMarkerText(8) }}</p></div> 
    </div>
</template>

<style scoped>
.grid {
    width: 300px;
    height: 300px;
    display: grid;
    grid-template-columns: repeat(3, 100px);
    grid-template-rows: repeat(3, 100px);
    column-gap: 0;
    row-gap: 0;
}

.gridSlot {
    width: 97px;
    height: 97px;
    font-family: "Comic Neue";
    text-align: center;
    font-size: 50px;
}

.gridBorder {
    border-style: solid;
    border-width: 3px;
    border-color: white;
}
.gridBorderHideTop {
    border-top-width: 0px;;
}
.gridBorderHideBottom {
    border-bottom-width: 0px;;
}
.gridBorderHideLeft {
    border-left-width: 0px;;
}
.gridBorderHideRight {
    border-right-width: 0px;;
}

.playerOneColor {
    color: blue;
}
.playerTwoColor {
    color: red;
}
</style>