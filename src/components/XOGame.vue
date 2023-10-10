<script setup>
import { reactive, ref } from 'vue';

const players = reactive({
    p1: {
        key: 'x',
        results: [],
        win: false,
    },
    p2: {
        key: 'o',
        results: [],
        win: false,
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
const wins = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
];

const checkResults = () => {
    if (currentPlayer.value.results.length < 3) {
        return;
    }
    const result = wins.some(win => {
        let isContained = true;
        for (const w of win) {
            console.log(w);
            if (!currentPlayer.value.results.includes(`${w}`)) {
                isContained = false;
                break;
            }
        }
        return isContained;
    });
    if (result) {
        currentPlayer.value.win = true;
    }

} 
</script>
<template>
    <div class="grid grid-cols-3 h-60 w-60">
        <div v-for="(data, cell) in board"
            class="col-span-1 border border-green-500 aspect-square flex items-center justify-center text-4xl"
            @click="onPlayerclick(cell)">
             {{ data }}
        </div>
        <div v-for="(player, key) in players">

            <div v-if="player.win">
                {{ key }} won!
            </div>
        </div>
    </div>
</template>
