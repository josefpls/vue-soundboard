<script setup>
    import { useSoundStore } from '../stores/SoundStore';
    const props = defineProps(["index", "name"])
    const soundStore = useSoundStore()
    const setSound = (index, sound) => {
        const reader = new FileReader()
        reader.onload = ($event) => {
            soundStore.updateSound(index, $event.target.result)
        }
        reader.readAsDataURL(sound);
    }
</script>

<template>
    <div class="content-wrapper">
        <span>{{ props.name }}</span>
        <input type="file" accept="audio/mp3" v-on:change="$event => setSound(props.index, $event.target.files[0])">
    </div>
</template>

<style scoped>
    .content-wrapper {
        display: flex;
        flex-direction: column;
    }
    input {
        margin-top: .5em;
    } 
</style>
