<script setup>
    import { useSoundStore } from '../stores/SoundStore';
    const soundStore = useSoundStore();
    const setSound = (index, sound) => {
        const reader = new FileReader()
        reader.onload = ($event) => {
            soundStore.updateSound(index, $event.target.result)
        }
        reader.readAsDataURL(sound);
    }
</script>

<template>
    <div class="wrapper">
        <div class="soundConfig" v-for="(sound, index) of soundStore['sounds']" v-bind:key="sound">
            <p> {{ sound["name"] }} </p>
            <input type="file" v-on:change="$event => setSound(index, $event.target.files[0])">
        </div>
    </div>
</template>

<style scoped>
.wrapper {
    padding: 2em;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1em;
}
.soundConfig {
    padding: 1em;
    background-color: lightgray;
    border-radius: 5px;
}
.soundConfig p {
    margin-bottom: .5em;
}
</style>