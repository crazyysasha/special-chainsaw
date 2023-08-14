<script setup>
import { ref } from 'vue';

const message = ref('typed message');

function onSubmitHandler({ target }) {
    fetch(`https://api.telegram.org/bot6402575980:AAFZhWCfT6SxFZYu9L0Wc9Ps_vShbElfuJI/sendMessage?chat_id=795034428&text=${message.value}`);
    message.value = '';
}
</script>
<template>
    <form class="flex flex-col gap-4" @submit.prevent.stop="onSubmitHandler">
        <input class="border border-green-500 rounded-xl px-4 py-2" type="text" v-model="message">
        <!-- <input class="border border-green-500 rounded-xl px-4 py-2" type="text"
        @input="message = $event.target.value" v-bind:value="message"> -->
        <button v-bind:class.dsa="{}">create</button>
    </form>
</template>