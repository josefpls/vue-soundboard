<script setup>
    import SoundInput from '../components/SoundInput.vue';
    import { useSoundStore } from '../stores/SoundStore';
    const soundStore = useSoundStore()
</script>

<template>
    <div class="wrapper">
        <div class="soundConfig" v-for="(sound, index) of soundStore['sounds']" v-bind:key="sound">
            <SoundInput :index="index" :name="sound['name']" />
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
