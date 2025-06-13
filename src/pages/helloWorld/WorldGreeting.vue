<script setup lang="ts">
import HelloWorld from '@/components/HelloWorld.vue';
import TheWelcome from '@/components/TheWelcome.vue';
</script>

<template>
    <div class="container">
        <div class="leftHello">
            <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
            
            <div class="wrapper">
                <HelloWorld msg="You did it!" />
            </div>
        </div>

        <main>
            <TheWelcome />
        </main>
    </div>
</template>


<style scoped>
.container {
    display: grid;
}

.leftHello {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  .container {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  .container .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>