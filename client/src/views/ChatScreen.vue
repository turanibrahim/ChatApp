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
          height="95vh"
        >
          <v-row
            class="fill-height"
            no-gutters
          >
          <!-- Left list area start -->
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
                          v-show="whichLeftBar != '2'"
                          @click="setLeftBar('2')"
                          v-on="on"
                        >
                          <v-icon>mdi-account-group</v-icon>
                        </v-btn>
                      </template>
                      <span>Oda Listesi</span>
                    </v-tooltip>
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
                    <ChatScreenList
                      v-for="user in users"
                      :key="user._id"
                      :username="user.username"
                      :isOnline="user.isOnline"
                      @click.native="setChatArea(user._id, user.username)"
                    />
                  </template>
                  <template v-if="whichLeftBar == '2'">
                    <ChatScreenList
                      v-for="room in rooms"
                      :key="room._id"
                      isRoom 
                      :name="room.name"
                      @click.native="joinRoom(room._id)"
                    />
                  </template>
                </v-col>
              </v-row>
            </v-col>
          <!-- Left list area end -->
          <!-- Chat area start -->
            <v-col
              cols="8"
            >
              <v-card
                class="fill-height"
                v-if="(receiverId || roomId) != null"
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
                      <span class="title">{{ (receiverUsername) ? receiverUsername : roomName }}</span>
                      <v-spacer></v-spacer>
                    </v-toolbar>
                    <v-progress-linear
                      :active="loadingChat"
                      :indeterminate="loadingChat"
                      bottom
                      color="amber accent-4"
                    ></v-progress-linear>
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
                            :key="(message.id) ? message.id : message._id" 
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
                                      justify="end"
                                      align="end"
                                      no-gutters
                                    >
                                      <v-col cols="12 text-end">
                                        <span class="overline py-0">{{ message.date | moment("calendar")}}</span>
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
                            :key="(message.id) ? message.id : message._id" 
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
                            @keyup.enter.native="sendMessage"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="auto ml-2">
                          <v-btn
                            icon
                            dark
                            @click="sendMessage"
                            :loading="loadingChat"
                          >
                            <v-icon>mdi-send</v-icon>
                          </v-btn>
                        </v-col>
                      </v-row>
                    </v-toolbar>
                  </v-col>
                </v-row>
              </v-card>
              <v-card
                class="fill-height"
                v-else
              >
                <v-container fluid class="fill-height">
                  <v-row
                    justify="center"
                    align="center"
                  >
                    <v-col
                      cols="8"
                      class="text-center"
                    >
                      <p class="body-1">Lütfen sol alandan bir konuşma seçin.</p>
                      <p class="body-1">Sol alanda liste bulunmuyorsa. Lüften <v-icon>mdi-message</v-icon> simgesine tıklayarak bir kullanıcı seçin veya 
                      <v-icon>mdi-account-group</v-icon> simgesine tıklayarak bir odaya katılın.</p>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card>
            </v-col>
          <!-- Chat area end -->
          </v-row>
        </v-card>
      </v-col>
    </v-row>

    <!-- Snackbar for online user start -->
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
    <!--Snackbar for online user end -->
    <!-- Snackbar for new room message start -->
      <v-snackbar
        top
        color="amber accent-4"
        :timeout=snackbarTimeout
        v-model="newRoomMessageAlert.show"
        @click="setRoomAsChatScreen(newRoomMessageAlert.roomIndex)"
      >
        <v-row
          justify="start"
          align="center"
        >
          <v-col cols="12" >
            <span class="font-weight-bold title-1 black--text">{{ newRoomMessageAlert.name }}</span>
          </v-col>
          <v-col cols="auto" >
            <span class="font-weight-bold black--text">{{ newRoomMessageAlert.senderUsername }}: </span> 
            <span class="black--text">{{ newRoomMessageAlert.message }}</span>
          </v-col>
        </v-row>
      </v-snackbar>
    <!-- Snackbar for new room message emd -->
    <!-- Loading -->
    <v-dialog
      v-model="loadingDialog"
      persistent
      width="50vh"
    >
      <v-card
        color="blue-grey darken-4"
        dark
      >
        <v-card-title>
          <h1 class="title">Lütfen Bekleyin</h1>
        </v-card-title>
        <v-card-text class="text-center">
          <v-progress-linear
            indeterminate
            color="amber accent-4"
            height="10"
          ></v-progress-linear>
        </v-card-text>
      </v-card>
    </v-dialog>
    <!-- Loading -->
  </v-container>
</template>

<script>
import io from 'socket.io-client';
import ChatScreenList from '../components/ChatScreenList';

export default {
  props:{
    user: Object,
  },
  components:{
    ChatScreenList,
  },
  data: () => ({
    socket : io(process.env.VUE_APP_SOCKET_ADDRESS),
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
    snackbarTimeout: 3000,
    rooms: [],
    roomId: null,
    roomName: null,
    socketId: null,
    newRoomMessageAlert: {
      roomName: null,
      senderUsername: null,
      message: null,
      roomIndex: null,
      show: false,
    },
    loadingDialog: true,
    loadingChat: false,
  }),
  created: async function(){
    const vm = this;
    await this.socket.emit('SET_ONLINE', this.user);
    await this.socket.on('USER_CONNECTED', function(data){
      vm.newOnlineUser = data;
      vm.showSnackBar = true;
    });
    await this.fetchRooms();
    await this.fetchMessages();
    await this.getUsers();
    this.socket.on('GET_MESSAGE', async function(data){
      vm.allMessages.push(data);
      await vm.filterMessages();
      await vm.updateConversationList(data);
    });
    this.socket.on('GET_ROOM_MESSAGE', function(room, message){
      const index = vm.findRoomIndex(room);
      vm.rooms[index].messages.push(message);
      vm.showAlert(index, message);
    });
  },
  mounted: function(){
    const vm = this;
    setTimeout(function(){ 
      vm.loadingDialog = false;
    }, 2000);
  },
  updated: function(){
    if(this.receiverId || this.roomId){
      this.$nextTick(() => this.scrollToEnd());
    }
  },
  methods:{
    scrollToEnd: function() {    	
      var chatArea = this.$el.querySelector("#chatArea");
      chatArea.scrollTop = chatArea.scrollHeight;
    },
    fetchMessages: function(){
      const vm = this;
      this.socket.emit('FETCH_PRIVATE_MESSAGES', this.user._id);
      this.socket.on('PRIVATE_MESSAGES', function(data){
        vm.allMessages = data;
        vm.createConversationList();
      });
    },
    sendMessage: async function(){
      const message = this.message;
      this.loadingChat = true;
      const vm = this;
      if(this.message != null){
        if(this.receiverId != null){
          this.socket.emit('SEND_MESSAGE', vm.message , vm.user._id, vm.receiverId);
          this.socket.once('MESSAGE_CALLBACK', (data) =>{
            const newMessage = {
              _id: data,
              message: message,
              date: Date.now(),
              sender: vm.user._id,
              receiver: vm.receiverId,
              receiverUsername: vm.receiverUsername,
              senderUsername: vm.user.username,
            };
            vm.allMessages.push(newMessage);
            vm.messages.push(newMessage);
            vm.updateConversationList(newMessage);
            vm.setLeftBar('0');
          });
        }else{
          const message = vm.message;
          await this.socket.emit('SEND_ROOM_MESSAGE', vm.message, vm.roomId, vm.user._id, vm.user.username, vm.socket.id);
          await this.socket.once('ROOM_MESSAGE_CALLBACK', function(data){
            const newMessage = {
              _id: data,
              message: message,
              sender: vm.user_id,
              senderUsername: vm.user.username,
              date: Date.now()
            };
            const index = vm.rooms.findIndex( value => { return value._id == vm.roomId});
            vm.rooms[index].messages.push(newMessage);
          });
        }
        this.loadingChat = false;
        return this.message = null;
      }
    },
    getUsers: async function(){
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
    setChatArea: async function(id, name){
        this.loadingChat = true;
        this.receiverId = id;
        this.receiverUsername = name;
        this.roomId = null,
        this.roomName = null;
        await this.filterMessages();
        this.loadingChat = false;
    },
    filterMessages: async function(){
      if(this.receiverId != null && this.receiverUsername != null){
        this.messages = await this.allMessages.filter(value => {return (value.sender == this.user._id && value.receiver == this.receiverId) || ( value.receiver == this.user._id && value.sender == this.receiverId) })
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
    },
    updateConversationList: function(message){
      if(message.sender == this.user._id){
        if(!this.conversationList.some( conv => { return conv.receiverId == message.receiver})){
          this.conversationList.push({
            receiverId: message.receiver,
            receiverUsername: message.receiverUsername
          });
        }
      }else{
        if(!this.conversationList.some( conv => { return conv.receiverId == message.sender})){
          this.conversationList.push({
            receiverId: message.sender,
            receiverUsername: message.senderUsername
          });
        }
      }
    },
    fetchRooms: function(){
      const vm = this;
      this.socket.emit('FETCH_ROOMS', vm.user._id);
      this.socket.on('ALL_ROOMS', function(data){
        vm.rooms = data;
      });
    },
    joinRoom(roomId){
      const vm = this;
      this.socket.emit('JOIN_ROOM', roomId, vm.user._id, vm.user.username);
      this.socket.on('FETCH_ROOM', function(data){
        const index = vm.findRoomIndex(data._id);
        vm.rooms[index] = data;
        vm.setRoomAsChatScreen(index);
      });
    },
    setRoomAsChatScreen: function(roomIndex){
      this.loadingChat = true;
      this.messages = this.rooms[roomIndex].messages;
      this.roomId = this.rooms[roomIndex]._id;
      this.roomName = this.rooms[roomIndex].name;
      this.receiverUsername= null;
      this.receiverId = null;
      this.$nextTick().then(() => {
        this.loadingChat = false;
      })
    },
    findRoomIndex: function(room){
      return this.rooms.findIndex( value => { return value._id == room});
    },
    showAlert: function(roomIndex, message){
      this.newRoomMessageAlert.message = message.message;
      this.newRoomMessageAlert.senderUsername = message.senderUsername;
      this.newRoomMessageAlert.name = this.rooms[roomIndex].name;
      this.newRoomMessageAlert.roomIndex = roomIndex;
      this.newRoomMessageAlert.show = true;
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