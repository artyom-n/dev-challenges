import { createApp } from 'vue';
import axios from 'axios';
import './registerServiceWorker';
import 'flexboxgrid';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faSuitcase,
  faGlobeAmericas,
  faClock,
  faLongArrowAltLeft,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import App from './App.vue';
import router from './router';
import './main.scss';

library.add(faSuitcase, faGlobeAmericas, faClock, faLongArrowAltLeft);

createApp(App)
  .use(router, axios, FontAwesomeIcon)
  .mount('#app');
