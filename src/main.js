import Vue from 'vue';
import App from './App.vue';

import { BootstrapVue } from 'bootstrap-vue';
Vue.use(BootstrapVue);
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
library.add(fas);

Vue.component('fa-icon', FontAwesomeIcon);

new Vue({
  el: '#app',
  render: h => h(App)
});
