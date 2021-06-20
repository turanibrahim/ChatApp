<script>
export default {
  name: 'Register',
  data() {
    return {
      registerForm: {
        name: '',
        surname: '',
        username: '',
        password: '',
      },
      registerError: null,
      passwordFieldType: 'password',
    };
  },
  computed: {
    passwordFieldIcon() {
      return this.passwordFieldType === 'password' ? 'mdi-eye' : 'mdi-eye-off';
    },
  },
  methods: {
    changePasswordFieldType() {
      this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password';
    },
    redirectToLoginPage() {
      this.$router.push('Login');
    },
  },
};
</script>

<template>
  <v-container fluid class="fill-height register-page grey lighten-4">
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
              <h4 class="text-sm-h6">Register to ChatApp</h4>
              <p class="text-sm-caption">
                ChatApp is experimental online conversation app.
                It's an hobby project based on javascript front-end and back-end
                frameworks.
              </p>
            </v-col>
          </v-row>

          <v-row v-if="registerError">
            <v-col cols="12">
              <v-alert type="error">
                {{ registerError }}
              </v-alert>
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <v-text-field outlined v-model="registerForm.name" label="Name" />
            </v-col>
          </v-row>

          <v-row no-gutters>
            <v-col>
              <v-text-field outlined v-model="registerForm.surname" label="Surname" />
            </v-col>
          </v-row>

          <v-row no-gutters>
            <v-col>
              <v-text-field outlined v-model="registerForm.username" label="Username" />
            </v-col>
          </v-row>

          <v-row no-gutters>
            <v-col>
              <v-text-field
                v-model="registerForm.password"
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
              Do have an account?
              <v-btn
                color="primary"
                small
                plain
                text
                link
                @click="redirectToLoginPage"
              >login</v-btn>
            </v-col>
          </v-row>

          <v-row justify="end" no-gutters class="pb-3">
            <v-col cols="auto">
              <v-btn color="success">
                register
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss" scoped>
.register-page {
  height: 80vh;
  overflow-y: auto;
}
</style>
