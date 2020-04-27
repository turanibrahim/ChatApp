import Vue from 'vue'
import VueCookies from 'vue-cookies'
import App from './App.vue'
import vuetify from './plugins/vuetify';

const moment = require('moment')
require('moment/locale/tr')

Vue.config.productionTip = false
Vue.use(VueCookies)
Vue.use(require('vue-moment'), { moment})

// set expire time 7day
Vue.$cookies.config('7d')

var vm = new Vue({
  el: "#app",
  vuetify,
  render: h => h(App)
}).$mount('#app')

global.vm = vm;