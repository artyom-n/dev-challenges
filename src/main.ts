import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import 'flexboxgrid';
import router from './router';

createApp(App).use(router).mount('#app');
