import style from '../css/app.css'
import Vue from 'vue'
import Hello from './components/Hello.vue'
// import 'phoenix_html'
// import socket from './socket'

Vue.component('hello', Hello)

const app = new Vue({
  el: '#app',
})
