<script setup>
const props = defineProps({
    content: {
        type: String,
    }
});

defineEmits(['on-hover']);
</script>

<template>
    <button class="p-2 bg-slate-400 rounded-2xl mx-2" 
        @mouseover="$emit('on-hover', true)"
        @mouseout="$emit('on-hover', false)">
        {{ content }}
    </button>
</template>