<script setup lang="ts">
import { ref } from 'vue';
import RefCodeExample from '../refComponents/RefCodeExample.vue';
import RefPanel from '../refComponents/RefPanel.vue';
import RefPanelSection from '../refComponents/RefPanelSection.vue';

const loopTemplate = ref(
`
const loopList = ref([1, 2, 3])
...
<ul> // forEach loop over a reactive list
    <li v-for="item in loopList">Found item: {{ item }}</li>
</ul>

<ul> // standard for loop over a range (starts at 1!)
    <li v-for="index in 9">Wild item: {{ index }}</li>
</ul>`);

const conditionsTemplate = ref(
`let testNumber = ref(7);
function divisibleByTwo(num: number) { return num % 2 === 0 }
function divisibleByThree(num: number) { return num % 3 === 0 }
...
<div v-if="divisibleByTwo(testNumber)">{{ testNumber }} is divisible by 2!</div>
<div v-else-if="divisibleByThree(testNumber)">{{ testNumber }} is divisible by 3!</div>
<div v-else>{{ testNumber }} is weird!</div>
`);

</script>

<template>
    <RefPanel title="Rendering">
        <RefPanelSection title="Loops">
            <ul>
                <li><code>v-for:</code> allows for creating elements by passing some loop logic.</li>
            </ul>
            <RefCodeExample :code="loopTemplate" />
        </RefPanelSection>

        <RefPanelSection title="Conditionals">
            <ul>
                <li><code>v-if: / v-else-if: / v-else:</code> can be used to conditionally render elements.</li>
            </ul>
            <RefCodeExample :code="conditionsTemplate" />
        </RefPanelSection>
    </RefPanel>
</template>