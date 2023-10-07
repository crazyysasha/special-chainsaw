<script setup>
import { reactive, ref } from 'vue';

const players = reactive({
    p1: {
        key: 'x',
        results: [],
    },
    p2: {
        key: 'o',
        results: [],
    },
});

const currentPlayer = ref(players.p1);
const board = reactive({
    1: null,
    2: null,
    3: null,
    4: null,
    5: null,
    6: null,
    7: null,
    8: null,
    9: null,
});

const onPlayerclick = (cell) => {
    if (!!board[cell]) {
        return;
    }

    board[cell] = currentPlayer.value.key;
    currentPlayer.value.results.push(cell);
    checkResults();
    if (currentPlayer.value == players.p1) {
        currentPlayer.value = players.p2;
    } else {
        currentPlayer.value = players.p1;
    }

}

const checkResults = () => {
    const wins = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
    console.log(wins.find((win) => {

        return currentPlayer.value.results.every((e) => {
            console.log(e,);
            return win.includes(e);
        });;
    }));

} 
</script>
<template>
    <div class="grid grid-cols-3 h-60 w-60">
        <div v-for="(data, cell) in board"
            class="col-span-1 border border-green-500 aspect-square flex items-center justify-center text-4xl"
            @click="onPlayerclick(cell)">
            {{ cell }} {{ data }}
        </div>

    </div>
</template>
