<script setup>
</script>
<template>
  <div class="">
    <input type="text" placeholder="Name">
    <input type="text" placeholder="Surname">
    <input type="text" placeholder="Email">
    <input type="password" placeholder="password">
    <button v-bind="class">Send</button>
    {{ massage }}
  </div>
</template>