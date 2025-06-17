<script setup lang="ts">
import { computed, ref } from 'vue';
import RefPanel from '../refComponents/RefPanel.vue';
import RefPanelSection from '../refComponents/RefPanelSection.vue';
import PlaygroundSideBySide from './PlaygroundSideBySide.vue';
import HookPuppet from './HookPuppet.vue';

// Button click to update ref value
const levelThresholds = [
    Math.pow(2, 2), Math.pow(3, 2), Math.pow(4, 2), Math.pow(5, 2), 
    Math.pow(4, 3), Math.pow(5, 3), Math.pow(6, 3), Math.pow(7, 3), 
]
const currentLevel = computed(() => {
    let level = 1
    let xpCounter = totalXp.value
    let thresholdIndex = 0
    while (xpCounter >= 0) {
        xpCounter -= levelThresholds[thresholdIndex++]
        if (xpCounter > 0) {
            level++
        }
        else {
            break
        }
    }
    return level
})
const totalXp = ref(0)
function increaseXp() {
    totalXp.value += Math.ceil(Math.random() * 10)
}

// Two-way sync model to keep a value in sync with the DOM
const formInput = ref('')

// Lifecycle hooks to demonstrate timing and order of operations
const maxStack = 5
const hookPuppet = HookPuppet
const hookStack = ref([".", ".", ".", ".", "."])
const showPuppet = ref(true)
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
    showPuppet.value = true
}
function destroyPuppet() {
    showPuppet.value = false
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
                <div class="levelUpContainer">
                    <div>
                        <button @click="increaseXp">Gain XP</button>
                    </div>
                    <div>
                        <p>Total XP: {{ totalXp }}</p>
                        <p>Level: {{ currentLevel }}</p>

                    </div>
                </div>
            </template>
        </PlaygroundSideBySide>
        <hr>
        <PlaygroundSideBySide>
            <template v-slot:left>
                <RefPanelSection title="Forms">
                    <p>I'll grant your wish to double one thing of your choosing. What is it that would you like doubled?</p>
                    <p>(<code>v-model</code> keeps a value in sync with the DOM contents, aka two-way sync.)</p>
                </RefPanelSection>
            </template>
            <template v-slot:right>
                <div class="formModelContainer">
                    <div>
                        <textarea v-model="formInput" placeholder="Type to double your wish" />
                    </div>
                    <p>{{ formInput }}</p>
                </div>
            </template>
        </PlaygroundSideBySide>
        <hr>
        <PlaygroundSideBySide>
            <template v-slot:left>
                <RefPanelSection title="Hooks">
                    <p>Wield the power to create and destroy with a mere twitch of your finger!</p>
                    <p>(Use the buttons to mount, unmount, and update the DOM to observe the emitted hooks & events.)</p>
                </RefPanelSection>
            </template>
            <template v-slot:right>
                <div class="hookControls">
                    <div>
                        <button @click="createPuppet" :disabled="showPuppet">Create</button>
                    </div>
                    <div>
                        <button @click="destroyPuppet" :disabled="!showPuppet">Destroy</button>
                    </div>
                    <div class="hookTextContainer">
                        <ul>
                        <li class="hookControlsText" v-for="stackItem in hookStack">{{ stackItem }}</li>
                        </ul>
                    </div>
                </div>
                <div class="hookPuppetContainer">
                    <component :is="hookPuppet" v-if="showPuppet"
                        @mounted="puppetEmitCallback"
                        @beforeMount="puppetEmitCallback"
                        @unmounted="puppetEmitCallback"
                        @beforeUnmount="puppetEmitCallback"
                        @updated="puppetEmitCallback"
                        @beforeUpdate="puppetEmitCallback"
                    />
                </div>
            </template>
        </PlaygroundSideBySide>
    </RefPanel>
</template>

<style scoped>
/* Reactive Styles */
.levelUpContainer {
    display: flex;
    flex-direction: row;
    height: 100%;
}

.levelUpContainer > div {
    display: flex;
    flex-direction: column;
    place-content: center;
    align-items: center;
    flex-grow: 1;
}

/* Form Model Styles */
.formModelContainer {
    display: grid;
    grid-template-columns: 1fr 1fr;
}

/* Hook Styles */
.hookControls {
    display: grid;
    grid-template-columns: 1fr 1fr 2fr;
}

.hookControls > div {
    display: flex;
    flex-direction: column;
    place-content: center;
}

.hookControls > div > button {
    display: inline;
    margin: 10px 20px;
}

.hookTextContainer {
    background-color: rgb(242, 242, 242);
    border-style: solid;
    border-width: 1px;
    border-color: black;
    padding: 0.2rem 0.5rem;
}

.hookControlsText {
    font-size: 13px;
    color: black;
    line-height: 130%;
}

.hookPuppetContainer {
    min-height: 130px;
}
</style>