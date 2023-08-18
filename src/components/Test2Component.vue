<script setup>
import { ref } from 'vue';


const age = ref(0);
</script>

<template>
    <div>
        test {{ 2 + 34 }}
    </div>

    <div>
        <input type="number" v-model="age" @input="console.log($event, window)">
    </div>
    <div  :class="{ 'text-red-500': age < 0, 'text-blue-500': age == 0, 'text-green-500': age > 0 }">
        {{ age }}
    </div>
</template>