<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
<nav>
    <div class="brand">
        <h3>SoundBoard</h3>
    </div>
</nav>
<RouterView />
</template>

<style scoped>
nav {
    background-color: pink;
    display: flex;
    justify-content: space-between;
}
</style>
