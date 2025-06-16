<script setup lang="ts">
import { ref } from 'vue';
import RefPanel from '../refComponents/RefPanel.vue';
import RefPanelSection from '../refComponents/RefPanelSection.vue';
import PlaygroundSideBySide from './PlaygroundSideBySide.vue';
import HookPuppet from './HookPuppet.vue';

// Button click to update ref value
const currentXp = ref(0)
function increaseXp() {
    currentXp.value++;
}

// Two-way sync model to keep a value in sync with the DOM
const formInput = ref('')

// Lifecycle hooks to demonstrate timing and order of operations
const maxStack = 5
const hookStack = ref(["test"])
const puppetId = ref("puppet")
const puppets = ;
function pushToStack(data: string) {
    if (hookStack.value.length >= maxStack) {
        hookStack.value.shift()
    }
    hookStack.value.push(data)
}
function puppetEmitCallback(msg: string) {
    pushToStack(msg)
}
function createPuppet() {
    // let newPuppet = Vue.component()
}
function destroyPuppet() {
    document.getElementById(puppetId.value)?.remove()
}

</script>

<template>
    <RefPanel title="Playground">
        <PlaygroundSideBySide>
            <template v-slot:left>
                <RefPanelSection title="Clickies">
                    <p>Click the button! Defeat monsters! Gain XP! Become STRONK!</p>
                    <p>(Basic example of syncing updating reactive state to update the DOM.)</p>
                </RefPanelSection>
            </template>
            <template v-slot:right>
                <button @click="increaseXp">Gain XP</button>
                <span>Current XP: {{ currentXp }}</span>
            </template>
        </PlaygroundSideBySide>
        <hr>
        <PlaygroundSideBySide>
            <template v-slot:left>
                <RefPanelSection title="Forms">
                    <p>I'll grant your wish to double something of your choosing. What is would you like doubled?</p>
                    <p>(<code>v-model</code> keeps a value in sync with the DOM contents, aka two-way sync.)</p>
                </RefPanelSection>
            </template>
            <template v-slot:right>
                <input v-model="formInput" placeholder="Type to double your wish" />
                <span>{{ formInput }}</span>
            </template>
        </PlaygroundSideBySide>
        <hr>
        <PlaygroundSideBySide>
            <template v-slot:left>
                <RefPanelSection title="Hooks">
                    <p>Wield the power to create and destroy with a mere twitch of your finger!</p>
                    <p>(Use the buttons to mount, unmount, and update the DOM to and observe the hooked events.)</p>
                </RefPanelSection>
            </template>
            <template v-slot:right>
                <div>
                    <button @click="createPuppet">Create</button>
                    <button @click="destroyPuppet">Destroy</button>
                    <div>
                        <span v-for="stackItem in hookStack">{{ stackItem }}</span>
                    </div>
                </div>
                <div>
                    <component :is="">
                </div>
            </template>
        </PlaygroundSideBySide>
    </RefPanel>
</template>

<style scoped>

</style>