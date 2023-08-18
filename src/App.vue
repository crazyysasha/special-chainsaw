<script setup>
import { ref } from 'vue';

import TestCondition from './components/TestCondition.vue';

const msg = 'hello <b> world!</b>';
const msg2 = 'hello <b>world!</b>';
const isShow = false;
const isTrue = ref(false);

const users = ['Sarik', 'Azad', 'Adyl']
</script>

<template>
  <div class="text-red-500" v-text="msg">
  </div>
  {{ msg }}

  <div v-html="msg2">

  </div>

  <div v-if="isShow">
    is showed
  </div>
  <div class="!block" v-show="isShow">
    is showed
  </div>

  <button @click="isTrue = !isTrue"> toggle</button>
  <TestCondition v-if="isTrue"></TestCondition>

  <template v-for="user in users">

    <b v-if="user != 'Sarik'"> {{ user }}</b>,
  </template>

  <test2></test2>
</template>
