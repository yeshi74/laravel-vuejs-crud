require('./bootstrap');

import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

window.Vue = require('vue').default;

Vue.component('todo', require('./components/Todo.vue').default);

const app = new Vue({
    el: '#app',
});
