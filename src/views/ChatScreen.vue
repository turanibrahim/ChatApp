<template>
    <v-container fluid class="fill-height  pa-0 ma-0" id="chat-screen">
      <v-row 
        class="fill-height"
        justify="center"
        align="center"     
      >
        <v-col
          xl="8"
          lg="10"
          sm="12"
          class="fill-height px-0"
        >
          <v-card
            height="50vh"
          >
            <v-row
              class="fill-height"
              no-gutters
            >
              <v-col
                cols="4"
                class="pa-0"
              >
                <v-row
                  class="fill-height flex-column flex-nowrap"
                  align="start"
                  no-gutters
                >
                  <v-col cols="auto" class="py-0" align-self="stretch" style="border-right:1px solid #ECEFF1">
                    <v-toolbar
                      dark
                      color="blue-grey darken-4"
                    >
                      <v-btn
                        color="white"
                        icon
                        v-show="whichLeftBar > 0"
                        @click="setLeftBar('0')"
                      >
                        <v-icon>mdi-arrow-left-thick</v-icon>
                      </v-btn>
                      <v-spacer></v-spacer>
                      <v-tooltip bottom>
                        <template v-slot:activator="{ on }">
                          <v-btn
                            color="white"
                            icon
                            v-show="whichLeftBar != '1'"
                            @click="setLeftBar('1')"
                            v-on="on"
                          >
                            <v-icon>mdi-message</v-icon>
                          </v-btn>
                        </template>
                        <span>Kullanıcı Listesi</span>
                      </v-tooltip>
                    </v-toolbar>
                  </v-col>
                  <v-col 
                    cols="grow" 
                    class="py-0 px-0"
                    align-self="stretch"
                    style="background-color:#ECEFF1;overflow-y:auto"
                  >         
                    <template v-if="whichLeftBar == '0'">
                      <ChatScreenList
                        v-for="conversation in conversationList"
                        :key="conversation._id"
                        :name="conversation.receiverUsername"
                        @click.native="setChatArea(conversation.receiverId, conversation.receiverUsername)"
                      />
                    </template>
                    <template v-if="whichLeftBar == '1'">
                      <ChatScreenOnlineUsers
                        v-for="user in users"
                        :key="user._id"
                        :username="user.username"
                        :isOnline="user.isOnline"
                        @click.native="setChatArea(user._id, user.username)"
                      />
                    </template>
                  </v-col>
                </v-row>
              </v-col>
              <v-col
                cols="8"
              >
                <v-card
                  class="fill-height"
                >
                  <v-row
                    class="fill-height flex-column flex-nowrap"
                    align="start"
                    no-gutters
                  >
                    <v-col cols="auto" class="py-0" align-self="stretch">
                      <v-toolbar
                        dark
                        color="blue-grey darken-4"
                      >
                        <span class="title">{{ receiverUsername }}</span>
                        <v-spacer></v-spacer>
                      </v-toolbar>
                    </v-col>
                    <v-col 
                      cols="grow" 
                      class="py-0 px-0"
                      align-self="stretch"
                    >         
                      <v-card
                        tile
                        flat
                        class="flex-column flex-nowrap aling-end chat-screen"
                        style="overflow-y:auto"
                        height="80vh"
                        id="chatArea"
                      >
                        <v-row
                          align="stretch"
                          no-gutters=""
                                    
                        >
                          <template
                            v-for="message in messages"
                          >
                            <!-- Başkasından mejaz geliyorsa burası -->
                            <v-col 
                              cols="10"
                              v-if="message.senderUsername != user.username"
                              :key="message.id" 
                              class="ma-0 py-2"
                              align-self="start"
                            >
                              <v-row
                                align="start"
                                no-gutters
                                class="pl-2"
                              >
                                <v-col
                                  cols="auto"
                                >
                                  <v-card
                                    color="blue-grey lighten-3"
                                  >
                                    <v-card-title class="subtitle-2 py-0 black--text">{{ message.senderUsername }}</v-card-title>
                                    <v-card-text class="py-0 black--text">
                                      {{ message.message }} 
                                    </v-card-text>
                                    <v-card-actions class="py-0">
                                      <v-row
                                        align="end"
                                        no-gutters
                                      >
                                        <v-col cols="auto">
                                          <span class="overline py-0">{{ message.time }}</span>
                                        </v-col>
                                      </v-row>
                                    </v-card-actions>
                                  </v-card>
                                </v-col>
                              </v-row>
                            </v-col>
                            <!-- Başkasından mejaz geliyorsa burası -->
                            <!-- Ben meşaz atmışşsam burası -->
                            <v-col 
                              cols="12"
                              v-else
                              :key="message.id" 
                              class="ma-0 py-2"
                            >
                              <v-row
                                align="end"
                                justify="end"
                                no-gutters
                                class="pr-2"
                              >
                                <v-col
                                  cols="9"
                                >
                                  <v-row
                                    align="end"
                                    justify="end"
                                    no-gutters
                                  >
                                    <v-col cols="auto">
                                      <v-card
                                        color="light-blue lighten-3"
                                      >
                                        <v-card-text class="black--text">
                                          {{ message.message }}
                                        </v-card-text>
                                      </v-card>
                                    </v-col>
                                  </v-row>
                                </v-col>
                              </v-row>
                            </v-col>
                            <!-- Ben meşaz atmışşsam burası -->
                          </template>
                        </v-row>
                      </v-card>
                    </v-col>
                    <v-col 
                      cols="auto" 
                      class="py-0 px-0"
                      align-self="stretch"
                    >         
                      <v-toolbar
                        color="amber accent-4"
                      >
                        <v-row
                          no-gutters
                        >
                          <v-col cols="grow">
                            <v-text-field
                              v-model="message"
                              label="Yollamak istediğiniz mejazı yazınız"
                              solo
                              hide-details
                            ></v-text-field>
                          </v-col>
                          <v-col cols="auto ml-2">
                            <v-btn
                              icon
                              dark
                              @click="sendMessage"
                            >
                              <v-icon>mdi-send</v-icon>
                            </v-btn>
                          </v-col>
                        </v-row>
                      </v-toolbar>
                    </v-col>
                  </v-row>
                </v-card>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
      <v-snackbar
        top
        color="success"
        :timeout=snackbarTimeout
        v-model="showSnackBar"
      >
        <v-row
          justify="center"
          align="center"
        >
          <v-col cols="auto">{{ newOnlineUser }} şuan Online!</v-col>
        </v-row>
      </v-snackbar>
    </v-container>
</template>

<script>
import io from 'socket.io-client';
import ChatScreenList from '../components/ChatScreenList';
import ChatScreenOnlineUsers from '../components/ChatScreenUsers';

export default {
  props:{
    user: Object,
  },
  components:{
    ChatScreenList,
    ChatScreenOnlineUsers
  },
  mounted: async function(){
    const vm = this;
    await this.socket.emit('SET_ONLINE', this.user);
    await this.socket.on('USER_CONNECTED', function(data){
      console.log(data);
      vm.newOnlineUser = data;
      vm.showSnackBar = true;
    });
    this.socket.on('GET_MESSAGE', async function(data){
      vm.allMessages.push(data);
      await vm.filterMessages();
      vm.scrollToEnd();
    });
    await this.fetchMessages();
    this.getOnlineUsers();
  },
  data: () => ({
    socket : io('localhost:81'),
    message: null,
    dialog: false,
    drawer: true,
    receiverId: null,
    receiverUsername: null,
    users: [],
    whichLeftBar: "0",
    messages: [],
    allMessages: [],
    newOnlineUser: '',
    conversationList:[],
    showSnackBar: false,
    snackbarTimeout: 6000
  }),
  methods:{
    scrollToEnd: function() {    	
      var chatArea = this.$el.querySelector("#chatArea");
      chatArea.scrollTop = chatArea.scrollHeight;
    },
    fetchMessages: function(){
      const vm = this;
      this.socket.emit('FETCH_MESSAGES', this.user._id);
      this.socket.on('ALL_MESSAGES', function(data){
        vm.allMessages = data;
        vm.createConversationList();
      });
    },
    sendMessage: async function(){
      const vm = this;
      if(this.message != null){
        this.socket.emit('SEND_MESSAGE', vm.message , vm.user._id, vm.receiverId);
        this.socket.once('MESSAGE_CALLBACK', (data) =>{
          const message = {
            _id: data,
            message: vm.message,
            date: Date.now(),
            sender: vm.user._id,
            receiver: vm.receiverId,
            receiverUsername: vm.receiverUsername,
            senderUsername: vm.user.username,
          };
          vm.allMessages.push(message);
          vm.messages.push(message);
          return this.message = null;
        });
      }
    },
    getOnlineUsers: async function(){
      const vm = this;
      await this.socket.on('USERS', (data) => {
        vm.users = data;
        let index = vm.users.findIndex( value => { return value._id == this.user._id });
        vm.users.splice(index, 1);
      });
    },
    setLeftBar: function(value){
      this.whichLeftBar = value;
    },
    setChatArea: async function(userId, username){

        this.receiverId = userId;
        this.receiverUsername = username;
        await this.filterMessages();
        await this.scrollToEnd();
    },
    filterMessages: async function(){
      if(this.receiverId != null && this.receiverUsername != null){
        this.messages = await this.allMessages.filter(value => {return (value.sender == this.user._id && value.receiver == this.receiverId) || ( value.receiver == this.user._id && value.sender == this.receiverId) })
        await this.scrollToEnd();
      }
    },
    createConversationList: function(){
      this.allMessages.forEach( value => {
        if(value.sender == this.user._id){
          if(!this.conversationList.some( conv => { return conv.receiverId == value.receiver})){
            this.conversationList.push({
              receiverId: value.receiver,
              receiverUsername: value.receiverUsername
            });
          }
        }else{
          if(!this.conversationList.some( conv => { return conv.receiverId == value.sender})){
            this.conversationList.push({
              receiverId: value.sender,
              receiverUsername: value.senderUsername
            });
          }
        }
      })
    }
  },
  computed: {
    
    
  }

}
</script>

<style>
.chat-screen{
  background-image:url('https://scontent.fesb4-2.fna.fbcdn.net/v/t1.0-9/18199550_1095758703903833_467087994582235397_n.jpg?_nc_cat=109&_nc_sid=dd9801&_nc_oc=AQlgOl7KeCwqThc3KPgK-JTqY7mGI0njAUR6WwBKy5SJhl0bRtt7bagFLwMTiiUxGp0&_nc_ht=scontent.fesb4-2.fna&oh=704e23286c498dec095b0e8ba01dc0b3&oe=5EBCBA69');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
#chat-screen{
  background-image:url('https://i.hizliresim.com/AXlNcQ.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
</style>