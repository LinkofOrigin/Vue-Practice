<script setup lang="ts">
import { onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated, ref } from 'vue';

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
    <div class="puppet">
        <h5>Puppet</h5>
        <p>Look at me! Here I am! Hope you don't destroy me!</p>
        <div class="buttonContainer">
            <button @click="updateValue">Current Data: {{ data }}</button>
        </div>
    </div>
</template>

<style scoped>
.puppet {
    background-color: rgb(62, 82, 69);
    margin-top: 10px;
    border-radius: 4px;
    border-style: solid;
    border-color: rgb(216, 184, 55);
    border-width: 3px;
    padding: 0.5rem;
}
h5 {
    font-weight: 800;
    font-size: 16px;
    text-align: center;
}

p {
    font-size: 14px;
    text-align: center;
}

.buttonContainer {
    text-align: center;
}
</style>