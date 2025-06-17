<script setup lang="ts">

</script>

<template>
    <div class="sideBySide">
        <div class="side">
            <slot name="left" />
        </div>
        <div class="arrowContainer"><img class="arrow" src="./plain-arrow.svg"/></div>
        <div class="side">
            <slot name="right" />
        </div>
    </div>
</template>

<style scoped>
.sideBySide {
    display: grid;
    grid-template-columns: 4fr 1fr 4fr;
    margin: 0.5rem 1rem;
}

.side {
    flex-grow: 2;
}

.arrowContainer {
    padding: 30px;
    margin: 0 1rem;
    border-style: solid;
    border-color: black;
    border-width: 3px;
    border-top-width: 0;
    border-bottom-width: 0;
    place-content: center;
}

.arrow {
    rotate: -90deg;
}
</style>