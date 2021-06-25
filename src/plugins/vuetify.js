import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#006d77',
        secondary: '#edf6f9',
        accent: '#83c5be',
      },
    },
    options: {
      customProperties: true,
    },
  },
});
