<script setup>
    import { useSoundStore } from '../stores/SoundStore';
    const soundStore = useSoundStore();
    const playSound = (sound) => {
        new Audio(sound).play()
    }
</script>

<template>
    <div class="wrapper">
        <button v-for="(sound) of soundStore['sounds']" v-bind:key="sound" v-on:click="$event => playSound(sound['sound'])"> {{ sound["name"] }} </button>
    </div>
</template>

<style scoped>
.wrapper {
    padding: 2em;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1em;
}

button {
    color: white;
    border: none;
    border-radius: 25px;
    background-color: slateblue;
}

button:hover {
    background-color: darkslateblue;
    transition: 300ms ease;
}
</style>