import { createI18n } from 'vue-i18n';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';

import en from './assets/json/en.json';
import zh from './assets/json/zh.json';
import zhTW from './assets/json/zh-TW.json';
import ar from './assets/json/ar.json';

const i18n = createI18n({
  legacy: false, 
  locale: 'en', 
  fallbackLocale: 'en', 
  messages: {
    en,
    zh,
    zhTW,
    ar,
  },
});

const app = createApp(App);

app.use(PrimeVue, { theme: { preset: Aura } });
app.use(router);
app.use(i18n);

app.mount('#app');