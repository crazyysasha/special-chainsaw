<script setup>
// import TheCalculator from './components/TheCalculator.vue';
import TheButton from './components/TheButton.vue';
import TheClock from './components/TheClock.vue';
import TheAlarm from "./components/TheAlarm.vue";
import { ref } from 'vue';
const time = ref();
const nextSecondHandler = (t) => {
  time.value = t;
}
</script>

<template>
  <div>

    <TheButton content="register" @on-hover="console.log($event)">
    </TheButton>
    <TheButton content="login"></TheButton>
    <TheButton content="logout"></TheButton>
    <!-- <TheCalculator>
    </TheCalculator> -->
    <TheClock @on-next-second="nextSecondHandler"></TheClock>

    <TheAlarm :current-time="time">
    </TheAlarm>
  </div>
</template>

