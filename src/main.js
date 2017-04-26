// Dependencies
import Vue from 'vue'
import router from '@/router'
import axios from 'axios'
import VueAxios from 'vue-axios'

// Show/Hide the production tip on startup
Vue.config.productionTip = false

// Load config from Webpack to Vue constant
Vue.config.movues = process.env

Vue.use(VueAxios, axios)

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<router-view />'
})
