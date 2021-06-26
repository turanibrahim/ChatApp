import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: '',
  },
  mutations: {
    setUserToken(state, payload) {
      state.token = payload;
    },
  },
  getters: {
    isAuthenticated(state) {
      return !!state.token;
    },
  },
  actions: {
    authenticateUser({ commit }, payload) {
      if (payload.password === 'start') {
        commit('setUserToken', payload.username);

        return {
          status: true,
        };
      }

      return {
        status: false,
        errorMessage: 'This username or password is invalid',
      };
    },
  },
  modules: {
  },
});
