<script setup lang="ts">
import { computed } from 'vue';
import PlayerToken from '../playerPiece/playerToken';
import PlayerTokenIcon from '../playerPiece/PlayerTokenIcon.vue';
import EmptySlot from './EmptySlot.vue';

const props = defineProps<{
    playerToken: PlayerToken | null,
}>()
const emit = defineEmits(['slotViewClicked'])
const highlighted = computed(() => {
    if (props.playerToken?.isHighlighted) {
        return true
    }
    return false
})

function slotViewClicked() {
    emit('slotViewClicked')
}

function tokenNotNull() {
    return props.playerToken !== null
}

</script>

<template>
    <EmptySlot @click="slotViewClicked" :highlight="highlighted">
        <PlayerTokenIcon v-if="tokenNotNull()" :token="props.playerToken" />
    </EmptySlot>
</template>

<style scoped>

</style>