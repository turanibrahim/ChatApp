<script>
import { mapActions } from 'vuex';
import feathersClient from './feathers/client';

export default {
  name: 'App',
  async created() {
    await this.authenticateWithJWT();
  },
  methods: {
    ...mapActions({
      authenticate: 'auth/authenticate',
      logout: 'auth/logout',
    }),
    async authenticateWithJWT() {
      try {
        await feathersClient.reAuthenticate();
      } catch (e) {
        await this.logout();
        await this.$router.push({
          name: 'Login',
        });
      }
    },
  },
};
</script>

<template>
  <v-app>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>
