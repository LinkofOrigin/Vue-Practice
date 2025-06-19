<script setup lang="ts">
import { computed, onBeforeMount, onUpdated, reactive, ref } from 'vue';
import NineMensMorris from './nineMensMorris';
import PlayerDisplay from './components/playerDisplay/PlayerDisplay.vue';
import Board from './components/board/Board.vue';
import type TokenSlot from './components/tokenSlot/tokenSlot';

const nineMensMorris = reactive(new NineMensMorris());

function handleBoardSlotClicked(tokenSlot: TokenSlot) {
    if (nineMensMorris.currentPlayer.tokensInHand.length > 0) {
        if (tokenSlot.currentToken === null) {
            let nextToken = nineMensMorris.currentPlayer.removeFromHand()
            tokenSlot.setToken(nextToken)
            resolveEndTurn()
        }
    }
    else {
        // Player has placed all tokens on board, start phase 2
        if (tokenSlot.currentToken === null && nineMensMorris.selectedToken !== null) {
            // This slot is empty. If there is a currently selected token, attempt to move it
            if (tokenSlot.isNeighbor(nineMensMorris.selectedToken)) {
                alert('valid neigh')
            }
        }
        else if (tokenSlot.currentToken?.playerId === nineMensMorris.currentPlayer.id) {
            // The player has clicked on their own token, select it to allow moving it
            nineMensMorris.setSelectedToken(tokenSlot.currentToken)
        }
    }
}

function resolveEndTurn() {
    if (nineMensMorris.playerOne.tokens.length <= 2) {
        // player two wins
    }
    else if (nineMensMorris.playerTwo.tokens.length <= 2) {
        // player one wins
    }
    else {
        // the game continues
        nineMensMorris.swapCurrentPlayer()
    }
}

const turnIndicatorText = computed(() => {
    let turnIndicator = "";
    if (nineMensMorris.currentPlayer !== null) {
        turnIndicator = nineMensMorris.currentPlayer === nineMensMorris.playerOne ? "One" : "Two";
    }
    return turnIndicator;
});
const playerOne = ref(nineMensMorris.playerOne);
const playerTwo = ref(nineMensMorris.playerTwo);

onBeforeMount(() => {
    nineMensMorris.startNewGame();
})

</script>

<template>
    <PlayerDisplay :turn-indicator-text="turnIndicatorText" :player-one="playerOne" :player-two="playerTwo" />
    <Board :board="nineMensMorris.board" @slot-clicked="handleBoardSlotClicked"/>
</template>