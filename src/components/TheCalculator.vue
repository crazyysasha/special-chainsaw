<script setup>
import { computed, onMounted, ref } from 'vue';

const expression = ref('');


const isEqualsRequested = ref(false);

const computedExpression = computed(() => {
    try {
        return eval(expression.value.replace(/(\+$)|(\/$)|(\-$)|(\*$)/g, (val) => ''));

    } catch (e) {
        return '';
    }
});

const onClickedSymbol = (symbol) => {

    calc.value.focus();
    console.log(symbol);
    if (![0, 1, 2, 3, 4, 5, 6, 7, 8, 9, '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '*', '/', 'Enter', 'Delete', 'Backspace'].includes(symbol)) {
        return;
    }
    if (symbol == 'Enter') {
        return onEqualsRequested();
    }
    if (symbol == 'Delete') {
        return onClearExpression();
    }
    if (symbol == 'Backspace') {
        return onBackspaceRequested();
    }

    if (`${symbol}`.search(/(\*)|(\-)|(\/)|(\+)/gi)) {
        return expression.value += symbol;
    }

    if (/(\+$)|(\/$)|(\-$)|(\*$)/g.exec(expression.value)) {
        expression.value = expression.value.replace(/(\+$)|(\/$)|(\-$)|(\*$)/g, (val) => symbol);
    } else {
        expression.value += symbol;
    }
}
const onEqualsRequested = () => {
    isEqualsRequested.value = true;
}

const onClearExpression = () => {
    expression.value = '';
    isEqualsRequested.value = false;

}

const onBackspaceRequested = () => {
    expression.value = expression.value.slice(0, -1);

}

const calc = ref();
onMounted(() => {
    window.addEventListener('keyup', (e) => onClickedSymbol(e.key));
});
</script>

<template>
    <div class="bg-secondary rounded-5xl p-8 py-10 max-w-sm " ref="calc" tabindex="-1">
        
        <div class="h-60 flex flex-col justify-end pb-10 items-end">
            <div class="text-[#818181] text-2xl"
                v-html="expression.replaceAll(/(\*)|(\-)|(\/)|(\+)/gi, (value) => `<span class='text-[#109DFF]'>${value}</span>`)">
            </div>
            <div v-if="isEqualsRequested" class="text-white text-5xl font-medium truncate w-full flex justify-end">
                {{ computedExpression }}
            </div>
        </div>
        <div class="grid grid-cols-4 grid-rows-5 gap-5">
            <button class="block h-16 rounded-2xl col-span-1 p-5 bg-[#616161]" @click="onClearExpression">Ac</button>
            <button class="h-16 rounded-2xl col-span-1 p-5 bg-[#616161] flex justify-center items-center"
                @click="onBackspaceRequested">
                <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M6.53499 1.11994e-08H21C21.2652 1.11994e-08 21.5196 0.105357 21.7071 0.292893C21.8946 0.48043 22 0.734784 22 1V17C22 17.2652 21.8946 17.5196 21.7071 17.7071C21.5196 17.8946 21.2652 18 21 18H6.53499C6.3704 18 6.20835 17.9594 6.06321 17.8818C5.91807 17.8042 5.79434 17.6919 5.70299 17.555L0.369993 9.555C0.260354 9.39067 0.201843 9.19755 0.201843 9C0.201843 8.80245 0.260354 8.60933 0.369993 8.445L5.70299 0.445C5.79434 0.308084 5.91807 0.195832 6.06321 0.118205C6.20835 0.0405779 6.3704 -2.46193e-05 6.53499 1.11994e-08ZM7.06999 2L2.40399 9L7.06999 16H20V2H7.06999ZM13 7.586L15.828 4.757L17.243 6.172L14.414 9L17.243 11.828L15.828 13.243L13 10.414L10.172 13.243L8.75699 11.828L11.586 9L8.75699 6.172L10.172 4.757L13 7.586Z"
                        fill="#A5A5A5" />
                </svg>
            </button>
            <button class="block h-16 rounded-2xl col-span-1 p-5 bg-primary aspect-square"
                @click="onClickedSymbol('/')">/</button>
            <button class="block h-16 rounded-2xl col-span-1 p-5 bg-primary aspect-square"
                @click="onClickedSymbol('*')">*</button>
            <button class="block h-16 rounded-2xl col-span-1 p-5 bg-[#303136]" @click="onClickedSymbol(7)">7</button>
            <button class="block h-16 rounded-2xl col-span-1 p-5 bg-[#303136]" @click="onClickedSymbol(8)">8</button>
            <button class="block h-16 rounded-2xl col-span-1 p-5 bg-[#303136]" @click="onClickedSymbol(9)">9</button>
            <button class="block h-16 rounded-2xl col-span-1 p-5 bg-primary aspect-square"
                @click="onClickedSymbol('-')">-</button>

            <button class="block h-16 rounded-2xl col-span-1 p-5 bg-[#303136]" @click="onClickedSymbol(4)">4</button>
            <button class="block h-16 rounded-2xl col-span-1 p-5 bg-[#303136]" @click="onClickedSymbol(5)">5</button>
            <button class="block h-16 rounded-2xl col-span-1 p-5 bg-[#303136]" @click="onClickedSymbol(6)">6</button>
            <button class="block h-16 rounded-2xl col-span-1 p-5 bg-primary aspect-square"
                @click="onClickedSymbol('+')">+</button>

            <button class="block h-16 rounded-2xl col-span-1 p-5 bg-[#303136]" @click="onClickedSymbol(1)">1</button>
            <button class="block h-16 rounded-2xl col-span-1 p-5 bg-[#303136]" @click="onClickedSymbol(2)">2</button>
            <button class="block h-16 rounded-2xl col-span-1 p-5 bg-[#303136]" @click="onClickedSymbol(3)">3</button>
            <button class="block rounded-2xl col-span-1 row-span-2 p-5 bg-primary" @click="onEqualsRequested">=</button>

            <button class="block h-16 rounded-2xl col-span-2 p-5 bg-[#303136]" @click="onClickedSymbol(0)">0</button>
            <button class="block h-16 rounded-2xl col-span-1 p-5 bg-[#303136] aspect-square"
                @click="onClickedSymbol('.')">.</button>
        </div>
    </div>
</template>