import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import { FeathersVuex } from '../feathers/client';
import auth from './store.auth';

Vue.use(Vuex);
Vue.use(FeathersVuex);

const requireModule = require.context(
  './services',
  false,
  /\.js$/,
);
const servicePlugins = requireModule
  .keys()
  .map((modulePath) => requireModule(modulePath).default);

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  getters: {
  },
  actions: {
  },
  plugins: [...servicePlugins, auth, createPersistedState()],
});
