<script setup>

defineProps({
    data: {
        type: Array
    }
});
</script>
<template>
    <tbody>
        <tr v-for="item in data">
            <td class="p-1 border border-gray-500">
                {{ item.id }}
            </td>
            <td class="p-1 border border-gray-500">
                {{ item.name }}
            </td>
            <td class="p-1 border border-gray-500">
                {{ item.surname }}
            </td>
            <td class="p-1 border border-gray-500">
                {{ item.birthday }}
            </td>
        </tr>
    </tbody>
</template>