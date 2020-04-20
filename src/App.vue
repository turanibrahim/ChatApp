<template>
  <v-app>
    <template v-if="user.token != null">
      <ChatScreen/>
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
        this.user = this.$cookies.get('user');
      } 
    }
  }
};
</script>
<style>

</style>