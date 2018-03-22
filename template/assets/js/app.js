import style from '../css/app.css'

import Vue from 'vue'

const app = new Vue({
  el: '#app',
  components: {
    'hello': require('./components/Hello.vue').default
  }
})
