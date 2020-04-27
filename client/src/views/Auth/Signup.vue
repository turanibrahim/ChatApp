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
                      Kayıt Ol
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
                        :append-icon="usernameError == true && usernameError != null ? 'mdi-close' : usernameError == null ? '' : 'mdi-check'"
                        v-model="username"
                        :success="usernameError === false"
                        :error="usernameError === true"
                        :error-messages="usernameErrorMessage"
                        @change="checkUsername"
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
                        :error="(passwordConfirmError != null) ? true : false"
                        :error-messages="passwordConfirmError"
                      ></v-text-field>
                    </v-col>
                    <v-col
                      cols="11"
                      class="py-0"
                    >
                      <v-text-field
                        label="Şifre Tekrar"
                        outlined
                        type="password"
                        v-model="passwordConfirm"
                        :error="(passwordConfirmError != null) ? true : false"
                        :error-messages="passwordConfirmError"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="11" class="py-0 my-0">
                      <span class="px-0 mx-0">Hesabın var mı? </span>
                      <a
                        @click="changeScreen"
                        color="primary"   
                      >
                        Giriş yap.
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
                        @click="signUp"
                        @keyup.enter.native="signUp"
                        :loading="loadingSignUpButton"
                        :disabled="!avaliableUsername"
                      >Kayıt Ol</v-btn>
                    </v-col>
                  </v-row>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
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
      passwordConfirm: null,
      passwordConfirmError: null,
      usernameError: null,
      usernameErrorMessage: null,
      loadingSignUpButton: false,
      avaliableUsername: false,
    }
  },
  methods:{
    changeScreen: function(){
      this.$emit('updateIsLogin', true)
    },
    signUp: function(){
      if(this.username === null){
        console.log(this.username)
        this.usernameError = true;
        this.usernameErrorMessage = "Lütfen 6 haneden uzun kullanıcı adı giriniz!";
        return;
      }
      if(this.password !== this.passwordConfirm){
        this.passwordConfirmError = "Girdiğiniz şifreler birbiri ile uyuşmuyor!";
        return;
      }
      if(this.password?.null?.length < 6 || this.password === null){
        this.passwordConfirmError = "Lütfen 6 haneden uzun şifre giriniz!";
        return;
      }

      this.passwordConfirmError = null;
      this.loadingSignUpButton = true;

      if(this.avaliableUsername){
        axios.post(`${process.env.VUE_APP_SOCKET_ADDRESS}/auth/signUp`, {
          data:{
            username: this.username,
            password: this.password
          }
        })
        .then((response) => {
          const credentials = {
            token: response.data.token,
            _id: response.data.user._id,
            username: response.data.user.username,
          };
          this.$emit('updateUserCredentials', credentials);
        })
        .catch((error) => {
          this.loadingSignUpButton = false;
          console.log(error);
        });
      }
    },
    checkUsername: function(){
      if(this.username?.length > 6){
        this.usernameError = null;
        this.usernameErrorMessage = null;
        axios.post(`${process.env.VUE_APP_SOCKET_ADDRESS}/auth/checkUsername`, {
          username: this.username
        })
        .then((response) => {
          if(response.data.isValid === true){
            this.usernameError = false;
            this.avaliableUsername = true;
          }else{
            this.usernameError = true;
            this.usernameErrorMessage = "Kullanıcı adı kullanılabilir değil!"
          }
        })
        .catch((error) => {
          console.log(error);
        });
      }else{
        this.usernameError = true;
        this.usernameErrorMessage = "Kullanıcı adı 6 karakterden uzun olmalı!"
      }
    },
  },
}
</script>

<style scoped>
</style>