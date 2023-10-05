<script setup>
// import TheCalculator from './components/TheCalculator.vue';
import TheButton from './components/TheButton.vue';
import TheClock from './components/TheClock.vue';
</script>

<template>
  <div> 
    
    <TheButton content="register" @on-hover="console.log($event)">
    </TheButton>
    <TheButton content="login"></TheButton>
    <TheButton content="logout"></TheButton>
    <!-- <TheCalculator>
    </TheCalculator> -->
    <TheClock @on-next-second=""></TheClock>

    <TheAlarm>
      
    </TheAlarm>
  </div>
</template>

