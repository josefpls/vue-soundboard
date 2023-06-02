import { defineStore } from "pinia";

export const useSoundStore = defineStore("soundStore", {
    state: () => ({
        sounds: [
            { name: "Sound 1", sound: "" },
            { name: "Sound 2", sound: "" },
            { name: "Sound 3", sound: "" },
            { name: "Sound 4", sound: "" },
            { name: "Sound 5", sound: "" },
            { name: "Sound 6", sound: "" },
            { name: "Sound 7", sound: "" },
            { name: "Sound 8", sound: "" },
        ]
    }),
    getters: {},
    actions: {
        updateSound(index, sound) {
            this.sounds[index]["sound"] = sound;
        }
    }
})