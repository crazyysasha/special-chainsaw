import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import Test2Component from './components/Test2Component.vue'

const app = createApp(App);


app.component('test2', Test2Component);

// app.config.errorHandler = (err) => {
//     console.error('наша ошибка: ', err);
// }

app.mount('#app');
