import Vue from 'vue'
import VueCookies from 'vue-cookies'
import App from './App.vue'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false
Vue.use(VueCookies)

// set expire time 7day
Vue.$cookies.config('7d')

var vm = new Vue({
  el: "#app",
  vuetify,
  render: h => h(App)
}).$mount('#app')

global.vm = vm;