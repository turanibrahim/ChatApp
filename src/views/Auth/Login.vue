<template>
    <v-container
      fluid
      class="fill-height pa-0 ma-0"
    >
      <v-row
        justify="center"
        align="center"
        no-gutters
        class="fill-height"
      > 
        <v-col
          cols="6"
          class="fill-height"
        >
          <v-card
            class="fill-height"
            img
          >
            <v-img
              max-height="100vh"
              src="https://fsb.zobj.net/crop.php?r=N8mhcDNxTXGef4IWjWgnhPRNYInB4j_FF9NfBANIIembS09FOZHMqs205aZzGkwMaqPRNOE0J9LAFsbF12sY7ierkNYx1jp7oB22Te3MeLu0YfvRXa5OUdJ-KXO9cVqYqLca6qvzbnvDY3kJ"
            ></v-img>
          </v-card>
        </v-col>
        <v-col
          cols="6"
        >
          <v-row
            justify="center"
            align="center"
          >
            <v-col
              cols="10"
            >
              <v-card
                shaped
                elevation=24
              >
                <v-card-title>
                  <v-row
                    justify="center"
                    align="center"
                  >
                    <v-col cols="auto">
                      Giriş Yap
                    </v-col>
                    <v-col cols="12" v-show="authError != null">
                      <v-alert
                        color="red"
                        border="left"
                        icon="mdi-close"
                        type="error"
                      >
                        {{ authError }}
                      </v-alert>
                    </v-col>
                  </v-row>
                </v-card-title>
                <v-card-text
                  class="py-0"
                >
                  <v-row
                    justify="center"
                    align="start"
                  >
                    <v-col 
                      cols="11"
                      class="py-0"
                    >
                      <v-text-field
                        label="Kullanıcı Adı"
                        outlined
                        v-model="username"
                        :error-messages="usernameError"
                      ></v-text-field>
                    </v-col>
                    <v-col
                      cols="11"
                      class="py-0"
                    >
                      <v-text-field
                        label="Şifre"
                        outlined
                        type="password"
                        v-model="password"
                        :error-messages="passwordError"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="11" class="py-0 my-0">
                      <span class="px-0 mx-0">Henüz kayıt olmadınız mı? </span>
                      <a
                        @click="changeScreen"
                        color="primary"
                      >
                        Kayıt ol.
                      </a>
                    </v-col>
                  </v-row>
                </v-card-text>
                <v-card-actions>
                  <v-row
                    justify="center"
                    align="start"
                  >
                    <v-col cols="11">
                      <v-btn
                        color="primary"
                        block
                        rounded
                        @click="login"
                      >Giriş Yap</v-btn>
                    </v-col>
                  </v-row>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
import axios from 'axios';

export default {
  props:{
    isLogin: Boolean
  },
  data(){
    return{
      username: null,
      password: null,
      usernameError: null,
      passwordError: null,
      authError: null,
    }
  },
  methods:{
    changeScreen: function(){
      this.$emit('updateIsLogin', false)
    },
    login: function(){
      if(this.username === null || this.password === null){
        if(this.username === null) this.usernameError = "Kullanıcı adı boş bırakılamaz"
        if(this.password === null) this.passwordError = "Şifre boş bırakılamaz"
        return;
      }
      if(this.username.length < 6 || this.password.length < 6){
        if(this.username.length < 6) this.usernameError = "Kullanıcı adı 6 karakterden uzun olmalı!"
        if(this.password.length < 6) this.passwordError = "Şifre 6 karakterden uzun olmalı!"

        return;
      }

      this.passwordError = null;
      this.usernameError = null;

      axios.post('http://localhost:81/auth/login', {
        data:{
          username: this.username,
          password: this.password
        }
      })
      .then((response) => {
        if(response.data.loginFailed != true){
            const credentials = {
            token: response.data.token,
            _id: response.data.user._id,
            username: response.data.user.username,
          };
          this.$emit('updateUserCredentials', credentials);
        }else{
          this.authError= "Kullanıcı adı yada şifre hatalı!";
        }
      })
      .catch((error) => {
        console.log(error)
        this.authError = "Bir sorun oluştu lütfen sonra tekrar deneyin"
        this.loadingSignUpButton = false;
      });
    },
  },
}
</script>

<style scoped>
</style>