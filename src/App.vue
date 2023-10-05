<script setup>
import { ref, watch } from 'vue';
import TheCalculator from './components/TheCalculator.vue';
const text = ref();

watch(text, (newValue, oldValue) => {

  console.log(newValue, oldValue);
});

const x = ref();
const y = ref();
watch([x, y], ([newX, newY], [oldX, oldY]) => {

});
</script>

<template>
  <div>
    <!-- <TheCalculator>
    </TheCalculator> -->
    <input type="text" class="border p-2 rounded-lg border-green-500" v-model="text">
    <p>{{ text }}</p>
  </div>
</template>

