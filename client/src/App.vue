<template>
  <v-app>
    <template v-if="user.token != null">
      <ChatScreen
        :user="user"
      />
    </template>
    <template v-else>
      <template v-if="isLogin">
        <login 
          :isLogin="isLogin" 
          @updateIsLogin="updateIsLogin"
          @updateUserCredentials="updateUserCredentials"
        />
      </template>
      <template v-else>
        <Signup 
          :isLogin="isLogin" 
          @updateIsLogin="updateIsLogin"
          @updateUserCredentials="updateUserCredentials"
        />
      </template>
    </template>
  </v-app>
</template>

<script>
import axios from 'axios'
import ChatScreen from './views/ChatScreen.vue'
import Login from './views/Auth/Login.vue'
import Signup from './views/Auth/Signup.vue'

export default {
  name: 'App',
  components:{
    ChatScreen,
    Login,
    Signup,
  },
  mounted: function(){
    this.fetchCookie();
  },
  data(){
    return{
      user:{
        token: null,
        _id: null,
        username: null
      },
      isLogin: true,
    };
  },
  methods:{
    updateIsLogin: function(value)
    {
      this.isLogin = value;
    },
    updateUserCredentials: function(credentials){
      this.setCookie(credentials);
      this.user = credentials;
    },
    setCookie: function(user){
      this.$cookies.set('user', user);
    },
    fetchCookie: function(){
      if(this.$cookies.isKey('user')){
        const cookie = this.$cookies.get('user');
        if(this.verifyCookie(cookie.token)) return this.user = cookie;

        this.$cookies.remove('user');
      } 
    },
    verifyCookie: async function(token){
      let verified = null

      await axios.post(`${process.env.VUE_APP_SOCKET_ADDRESS}/auth/verifyToken`, {
        data:{
          token
        }
      })
      .then((response) => {
        if(response.data?.verified == true) verified = true;
      })
      .catch((error) => {
        this.loadingSignUpButton = false;
        console.log(error);
      });

      return verified;
    },
  }
};
</script>
<style>

</style>