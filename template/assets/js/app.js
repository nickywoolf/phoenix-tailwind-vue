// We need to import the CSS so that webpack will load it.
// The MiniCssExtractPlugin is used to separate it out into
// its own CSS file.
import css from '../css/app.css'

// webpack automatically bundles all modules in your
// entry points. Those entry points can be configured
// in "webpack.config.js".
//
// Import dependencies
//
import 'phoenix_html'

import Vue from 'vue'

// Recursively scan this directory for Vue components and
// automatically register them with their "basename."
//
// ./components/HelloWorld.vue -> <hello-world></hello-world?
//
const files = require.context('./', true, /\.vue$/i);
files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));

if (document.getElementById('app')) {
  const app = new Vue({
    el: '#app'
  })
}

// Import local files
//
// Local files can be imported directly using relative paths, for example:
// import socket from "./socket"
