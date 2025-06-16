<script setup lang="ts">
import { onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated, ref } from 'vue';


type HookFn = () => void
const props = defineProps<{
    id: string,
}>()

const data = ref(0)

const emit = defineEmits(['mounted', 'beforeMount', 'unmounted', 'beforeUnmount', 'updated', 'beforeUpdate'])

onMounted(() => {
    emit('mounted', 'Puppet mounted!')
})

onBeforeMount(() => {
    emit('beforeMount', 'Puppet about to mount!')
})

onUnmounted(() => {
    emit('unmounted', 'Puppet unmounted!')
})

onBeforeUnmount(() => {
    emit('beforeUnmount', 'Puppet about to unmount!')
})

onUpdated(() => {
    emit('updated', 'Puppet updated!')
})

onBeforeUpdate(() => {
    emit('beforeUpdate', 'Puppet about to update!')
})

function updateValue() {
    data.value++;
}
</script>

<template>
    <div :id="id">Look at me! Here I am! Hope you don't destroy me!</div>
    <button @click="updateValue">Current Data: {{ data }}</button>
</template>