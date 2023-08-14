<script setup>
import { ref } from 'vue';

const todos = ref([]);

const newTodo = ref('');

const onCreateTodo = () => {
    todos.value.push(newTodo.value);
    console.log(todos.value);
    // todos.value.forEach((item) => console.log(item))
    newTodo.value = '';
}
</script>

<template>
    <div class="flex flex-col gap-6">
        <ol v-if="todos.length > 1">
            <li v-for="(todo, index) in todos" class="p-1">
                {{ index + 1 }}. {{ todo }} <button class="bg-red-500 p-1 px-3 rounded-2xl">удалить</button>
            </li>
        </ol>
        <div v-else-if="todos.length > 0">
            есть только одна задача, добавь еще одну!
        </div>
        <div v-else>
            нет задач на сегодня
        </div>

        <button>удалить все задачи</button>
        <form class="flex flex-col gap-4" @submit.prevent="onCreateTodo">
            <input type="text" placeholder="todo title" class="border border-violet-500 rounded-2xl px-4 py-2"
                v-model="newTodo">
            <button class="bg-blue-900 text-white rounded-2xl px-4 py-2">
                create todo
            </button>
        </form>
    </div>
</template>