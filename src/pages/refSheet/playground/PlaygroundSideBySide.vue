<script setup lang="ts">

</script>

<template>
    <div class="sideBySide">
        <div class="side">
            <slot name="left" />
        </div>
        <div><img class="arrow" src="./plain-arrow.svg"/></div>
        <div class="side">
            <slot name="right" />
        </div>
    </div>
</template>

<style scoped>
.sideBySide {
    display: flex;
    flex-direction: row;
}

.side {
    flex-grow: 1;
}

.arrow {
    rotate: -90deg;
}
</style>