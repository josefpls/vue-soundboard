<script setup>
    import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
<nav>
    <div class="brand">
        <h3>Sound Board</h3>
    </div>
    <div class="links">
        <button role="button">Settings</button>
    </div>
</nav>
<RouterView />
</template>

<style scoped>
nav {
    padding: 0 2em;
    background-color: pink;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

nav .links button {
    border: none;
    padding: .5em 1em;
    background-color: yellow;
    border-radius: 5px;
}
</style>
