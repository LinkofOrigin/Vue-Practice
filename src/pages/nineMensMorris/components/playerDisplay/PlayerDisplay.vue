<script setup lang="ts">
import { computed, ref } from 'vue';
import type Player from './player';

const props = defineProps<{
    turnIndicatorText: string,
    playerOne: Player,
    playerTwo: Player,
}>();

const playerOneHand = ref(props.playerOne.tokensInHand);
const playerTwoHand = ref(props.playerTwo.tokensInHand);

function removeTokenFromHand(playerId: number) {
    if (playerId === props.playerOne.id) {
        props.playerOne.removeFromHand();
    }
    else if (playerId === props.playerTwo.id) {
        props.playerTwo.removeFromHand();
    }
}

</script>

<template>
    <div class="display">
        <div class="playerData">
            <h2>Player One</h2>
            <div>In Hand: {{ playerOneHand.length }}</div>
            <!-- <button @click="removeTokenFromHand(props.playerOne.id)">Test Remove</button> -->
        </div>

        <h3 class="turnIndicator">It's Player {{ turnIndicatorText }}'s turn!</h3>

        <div class="playerData">
            <h2>Player Two</h2>
            <div>In Hand: {{ playerTwoHand.length }}</div>
            <!-- <button @click="removeTokenFromHand(props.playerTwo.id)">Test Remove</button> -->
        </div>
    </div>
</template>

<style scoped>
.display {
    width: 100%;
    display: flex;
    flex-direction: row;
    margin-bottom: 2rem;
}

.playerData {
    flex-shrink: 1;
}

.turnIndicator {
    flex-grow: 1;
    text-align: center;
}
</style>