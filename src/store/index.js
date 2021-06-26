import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import { FeathersVuex } from '../feathers/client';
import auth from './store.auth';

Vue.use(Vuex);
Vue.use(FeathersVuex);

const serviceFiles = require.context(
  './services',
  false,
  /\.js$/,
);
const moduleFiles = require.context(
  './modules/',
  true,
  /index.js$/,
);

const servicePlugins = serviceFiles
  .keys()
  .map((modulePath) => serviceFiles(modulePath).default);

const modules = moduleFiles.keys().reduce((acc, modulePath) => {
  const moduleName = modulePath.split('/')[1];

  return ({ ...acc, [moduleName]: moduleFiles(modulePath).default });
}, {});

export default new Vuex.Store({
  modules: { ...modules },
  plugins: [...servicePlugins, auth, createPersistedState()],
});
