<script setup>
import { computed, ref } from 'vue';

const time = ref(Date.now());

setInterval(() => {
    time.value +=1000;
    
    emit('on-next-second', time.value);
}, 1000);

const computedTime = computed(() => {
    return (new Date(time.value)).toString();   
});

const emit = defineEmits(['on-next-second']);
</script>
<template>
    <div>
        {{ computedTime }}
    </div>
</template>