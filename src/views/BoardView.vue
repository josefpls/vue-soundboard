<script setup>
    import SoundConfigs from "../components/SoundConfigs.vue"
    import BoardButtons from "../components/BoardButtons.vue"

    window.onbeforeunload = function(event) {
        return confirm("Confirm refresh");
    };
</script>

<template>
    <div class="wrapper">
        <SoundConfigs />
        <BoardButtons />
    </div>
</template>

<style scoped>
.wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
}
</style>