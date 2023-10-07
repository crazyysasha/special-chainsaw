<script setup>
import { computed, onMounted, ref, watch } from 'vue';

const props = defineProps({
    currentTime: {
        type: Number,
    }
});
// watch(() => props.currentTime, (newval) => {
//     console.log(newval);
// });
const timerTime = ref();
const onCreateTimer = () => {
    console.dir((new Date(props.currentTime)).getTime());
    timerTime.value = (new Date(props.currentTime)).setMinutes((new Date(props.currentTime)).getMinutes() + 1);
}

const diff = computed(() => {
    return (timerTime.value - props.currentTime)/1000;
});

</script>

<template>
    <div>

        <div v-if="diff > 0">
            оставшееся время {{ diff }}
        </div>
        <div v-else>
            времени не осталось
        </div>

        <button @click="onCreateTimer">запустить таймер</button>

    </div>
</template>