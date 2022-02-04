import Vue from 'vue'; // Note that 'vue' in this case is a Node module installed with 'npm install Vue'
Vue.component('hello-world', require('./hello-world'); // global registeration
  new Vue({
    el:'body',
    // Templates can be defined as inline strings, like so:
    template:'<div class="app-container"><hello-world></hello-world></div>'
  }
);
