<script setup lang="ts">
import { computed, ref } from 'vue';
import NineMensMorris from './nineMensMorris';
import PlayerDisplay from './components/playerDisplay/PlayerDisplay.vue';
import Board from './components/board/Board.vue';

const nineMensMorris = ref(new NineMensMorris());
nineMensMorris.value.startNewGame();

const turnIndicatorText = computed(() => {
    let turnIndicator = "";
    if (nineMensMorris.value.currentPlayer !== null) {
        turnIndicator = nineMensMorris.value.currentPlayer === nineMensMorris.value.playerOne ? "One" : "Two";
    }
    return turnIndicator;
});
const playerOne = ref(nineMensMorris.value.playerOne);
const playerTwo = ref(nineMensMorris.value.playerTwo);

</script>

<template>
    <PlayerDisplay :turn-indicator-text="turnIndicatorText" :player-one="playerOne" :player-two="playerTwo" />
    <Board :board="nineMensMorris.board"/>
</template>