<script>
import { mapActions } from 'vuex';

export default {
  name: 'Login',
  data() {
    return {
      loginForm: {
        username: '',
        password: '',
      },
      passwordFieldType: 'password',
      loginError: null,
    };
  },
  computed: {
    passwordFieldIcon() {
      return this.passwordFieldType === 'password' ? 'mdi-eye' : 'mdi-eye-off';
    },
  },
  methods: {
    ...mapActions({
      authenticateUser: 'authenticateUser',
    }),
    changePasswordFieldType() {
      this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password';
    },
    redirectToRegisterPage() {
      this.$router.push('Register');
    },
    async handleLogin() {
      const { to } = this.$route.params;
      const path = to ? {
        path: to.path,
      } : {
        name: 'Home',
      };

      const result = await this.authenticateUser(this.loginForm);

      if (result.status) {
        await this.$router.push(path);
      } else {
        this.loginError = result.errorMessage;
      }
    },
  },
};
</script>

<template>
  <v-container fluid class="fill-height login-page grey lighten-4">
    <v-row justify="center">
      <v-col cols="11">
        <v-container fluid>
          <v-row justify="center">
            <v-col cols="auto">
              <v-icon size="96" color="primary">
                mdi mdi-forum
              </v-icon>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="auto">
              <h4 class="text-sm-h6">Login into ChatApp</h4>
              <p class="text-sm-caption">
                ChatApp is experimental online conversation app.
                It's an hobby project based on javascript front-end and back-end
                frameworks.
              </p>
            </v-col>
          </v-row>

          <v-row v-if="loginError">
            <v-col cols="12">
              <v-alert type="error">
                {{ loginError }}
              </v-alert>
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <v-text-field outlined v-model="loginForm.username" label="Username" />
            </v-col>
          </v-row>

          <v-row no-gutters>
            <v-col>
              <v-text-field
                v-model="loginForm.password"
                :type="passwordFieldType"
                :append-icon="passwordFieldIcon"
                outlined
                label="Password"
                @click:append="changePasswordFieldType"
              />
            </v-col>
          </v-row>

          <v-row no-gutters class="pb-2">
            <v-col>
              Do need an account?
              <v-btn
                color="primary"
                small
                plain
                text
                link
                @click="redirectToRegisterPage"
              >register</v-btn>
            </v-col>
          </v-row>

          <v-row justify="end" no-gutters class="pb-3">
            <v-col cols="auto">
              <v-btn color="success" @click="handleLogin">
                login
              </v-btn>
            </v-col>
          </v-row>
    </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss" scoped>
.login-page {
  height: 80vh;
  overflow-y: auto;
}
</style>
