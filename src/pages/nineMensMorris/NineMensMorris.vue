<script setup lang="ts">
import { computed, onBeforeMount, ref } from 'vue';
import NineMensMorris from './nineMensMorris';
import PlayerDisplay from './components/playerDisplay/PlayerDisplay.vue';
import Board from './components/board/Board.vue';
import type TokenSlot from './components/tokenSlot/tokenSlot';

const nineMensMorris = ref(new NineMensMorris());

function handleBoardSlotClicked(tokenSlot: TokenSlot) {
    if (nineMensMorris.value.currentPlayer.tokensInHand.length > 0) {
        if (tokenSlot.currentToken === null) {
            let nextToken = nineMensMorris.value.currentPlayer.removeFromHand()
            tokenSlot.setToken(nextToken)
        }
    }
    else {
        // Player has placed all tokens on board, start phase 2
    }
}

function resolveEndTurn() {
    if (nineMensMorris.value.playerOne.tokens.length <= 2) {
        // player two wins
    }
    else if (nineMensMorris.value.playerTwo.tokens.length <= 2) {
        // player one wins
    }
    else {
        // the game continues
        nineMensMorris.value.swapCurrentPlayer()
    }
}

const turnIndicatorText = computed(() => {
    let turnIndicator = "";
    if (nineMensMorris.value.currentPlayer !== null) {
        turnIndicator = nineMensMorris.value.currentPlayer === nineMensMorris.value.playerOne ? "One" : "Two";
    }
    return turnIndicator;
});
const playerOne = ref(nineMensMorris.value.playerOne);
const playerTwo = ref(nineMensMorris.value.playerTwo);

onBeforeMount(() => {
    nineMensMorris.value.startNewGame();
})


</script>

<template>
    <PlayerDisplay :turn-indicator-text="turnIndicatorText" :player-one="playerOne" :player-two="playerTwo" />
    <Board :board="nineMensMorris.board" @slot-clicked="handleBoardSlotClicked"/>
</template>