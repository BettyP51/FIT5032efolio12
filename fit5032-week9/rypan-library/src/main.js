import 'bootstrap/dist/css/bootstrap.min.css';
import { createApp, reactive } from 'vue';
import App from './App.vue';
import router from './router';
import PrimeVue from 'primevue/config';
// import Aura from '@primevue/themes/aura';

const app = createApp(App);

const globalState = reactive({ role: null });

app.provide('globalState', globalState);

app.use(PrimeVue);
app.use(router);

app.mount('#app');
