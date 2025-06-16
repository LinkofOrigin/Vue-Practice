<script setup lang="ts">
import { ref } from 'vue';
import RefPanel from '../refComponents/RefPanel.vue';
import RefPanelSection from '../refComponents/RefPanelSection.vue';
import RefCodeExample from '../refComponents/RefCodeExample.vue';

const propsTemplate = ref(
`const props = defineProps<{
    name: string,
    faveNumber: number,
    isFriendly: boolean,
}()`)

const slotsTemplate = ref(
`// Child (CoolAndFun)
<template>
    <header>Cool Header</header>
    <slot />
    <footer>Fun Footer</footer>
</template>
...
// Parent
<template>
    <CoolAndFun>
        <div>Kind Body</div>
        <p>Cool, fun, and kind?! What can't you do?!</p>
    </CoolAndFun>
</template>
`)
</script>

<template>
    <RefPanel title="Components">
        <RefPanelSection title="Props">
            <ul>
                <li><code>defineProps</code> lets you pass data from a parent to a child.</li>
            </ul>
            <RefCodeExample :code="propsTemplate" />
        </RefPanelSection>
        
        <RefPanelSection title="Slots">
            <ul>
                <li><code>slot</code> lets you pass a DOM structure into a specific part of a child's DOM from a parent.</li>
            </ul>
            <RefCodeExample :code="slotsTemplate" />
        </RefPanelSection>
    </RefPanel>
</template>