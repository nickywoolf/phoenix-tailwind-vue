import style from '../css/app.css'

import Vue from 'vue'

Vue.component('hello', require('./components/Hello.vue').default)

const app = new Vue({
  el: '#app',
})
