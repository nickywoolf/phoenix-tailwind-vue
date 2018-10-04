let token = document.head.querySelector("meta[name=\"csrf-token\"]")

window.axios = require("axios")
window.axios.defaults.headers.common["X-CSRF-TOKEN"] = token ? token.content : null
window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest"

import Vue from "vue"
import Hello from './components/Hello.vue'

Vue.component('hello', Hello)

const app = new Vue({
  el: "#app"
})
