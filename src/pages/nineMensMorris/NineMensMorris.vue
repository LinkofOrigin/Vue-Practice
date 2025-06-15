<script setup lang="ts">
import NineMensMorris from './nineMensMorris';
import PlayerDisplay from './components/playerDisplay/PlayerDisplay.vue';
import { computed, ref } from 'vue';
import Board from './components/board/Board.vue';

const nineMensMorris = new NineMensMorris();
nineMensMorris.startNewGame();

const turnIndicatorText = computed(() => {
    let turnIndicator = "";
    if (nineMensMorris.currentPlayer !== null) {
        turnIndicator = nineMensMorris.currentPlayer === nineMensMorris.playerOne ? "One" : "Two";
    }
    return turnIndicator;
});
const playerOne = ref(nineMensMorris.playerOne);
const playerTwo = ref(nineMensMorris.playerTwo);

</script>

<template>
    <PlayerDisplay :turn-indicator-text="turnIndicatorText" :player-one="playerOne" :player-two="playerTwo" />
    <Board />
</template>