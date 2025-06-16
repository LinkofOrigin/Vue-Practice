<script setup lang="ts">
import { ref } from 'vue';
import RefCodeExample from '../refComponents/RefCodeExample.vue';
import RefPanel from '../refComponents/RefPanel.vue';
import RefPanelSection from '../refComponents/RefPanelSection.vue';

const fileTemplate = ref(
`<script setup lang="ts">

<\/script>

<template>

<\/template>

<style scoped>

<\/style>`);

const reactiveTemplate = ref(
`const reactiveValue = ref(2)
const reactiveObject = reactive({ dataKey: 3 })
const computedValue = computed(() => {
 return reactiveValue.value * reactiveObject.value.dataKey
})`);
</script>

<template>
    <RefPanel title="Basics">
        <RefPanelSection title="Reactive Rendering">
            <ul>
                <li><code>ref</code> creates a reactive state around a single value.</li>
                <li><code>reactive</code> creates a reactive state for a deeply-accessed proxy object.</li>
                <li><code>computed</code> creates a reactive state that also reacts when its dependencies change.</li>
            </ul>
            <RefCodeExample :code="reactiveTemplate" />
        </RefPanelSection>
        
        <RefPanelSection title="File Template">
            <div>The basics for a .vue file</div>
            <RefCodeExample :code="fileTemplate" />
        </RefPanelSection>
    </RefPanel>
</template>

<style scoped>

</style>