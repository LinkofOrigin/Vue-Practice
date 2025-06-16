<script setup lang="ts">
import RefPanel from '../refComponents/RefPanel.vue';
import RefPanelSection from '../refComponents/RefPanelSection.vue';
</script>

<template>
    <RefPanel title="Lifecycle">
        <RefPanelSection title="Mount">
            <ul>
                <li><code>onMounted()</code> runs after all child components have mounted and this component has entered the DOM.</li>
                <li><code>onBeforeMount()</code> runs after reactive state is ready, but before any DOM nodes have been created.</li>
                <li><code>onUnmounted()</code> runs after all child components have unmounted and all reactive effects have resolved.</li>
                <li><code>onBeforeUnmount()</code> runs just before the component is about to unmount.</li>
            </ul>
        </RefPanelSection>
        <RefPanelSection title="Mount">
            <ul>
                <li><code>onUpdated()</code> runs after the components DOM has been updated as a result of reactive state change (called after children updates). NOT SAFE TO UPDATE STATE HERE!</li>
                <li><code>onBeforeUpdate()</code> runs just before the DOM would be updated due to reactive state change. Safe to update state here!</li>
            </ul>
        </RefPanelSection>
    </RefPanel>
</template>