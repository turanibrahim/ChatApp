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
                      <v-spacer></v-spacer>
                      <v-btn
                        color="white"
                        icon
                      >
                        <v-icon>mdi-message</v-icon>
                      </v-btn>
                    </v-toolbar>
                  </v-col>
                  <v-col 
                    cols="grow" 
                    class="py-0 px-0"
                    align-self="stretch"
                    style="background-color:#ECEFF1;overflow-y:auto"
                  >         
                    <v-list-item 
                      two-line 
                      link
                      avatar
                      v-for="n in 10"
                      :key="1+n"
                      @click="scrollToEnd"
                    >
                      <v-list-item-avatar>
                        <v-img src="https://cdn.vuetifyjs.com/images/lists/1.jpg"></v-img>
                      </v-list-item-avatar>
                      <v-list-item-content >
                        <v-list-item-title>
                          <v-badge
                            color="green"
                            content="6"
                          >
                            İbrahim Turan
                          </v-badge>
                        </v-list-item-title>
                        <v-list-item-subtitle>
                          <span>Meşazını aldım İbrahim gardaşım...</span>
                        </v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
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
                        <span class="title">İbrahim Turan</span>
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
                              v-if="message.sendById != 2"
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
                                    <v-card-title class="subtitle-2 py-0 black--text">{{ message.sendByName }}</v-card-title>
                                    <v-card-text class="py-0 black--text">
                                      {{ message.message }} 
                                    </v-card-text>
                                    <v-card-actions class="py-0">
                                      <v-row
                                        align="end"
                                        no-gutters
                                      >
                                        <v-col cols="auto">
                                          <span class="overline py-0">{{ message.sendAt }}</span>
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
    </v-container>
</template>

<script>
import io from 'socket.io-client';

export default {
  components:{
  },
  mounted:function(){
    this.socket.on('messages', (data) => {
      this.messages = data;
      this.$nextTick().then( ()=> {
        this.scrollToEnd()
      });
    });
    this.socket.on('MESSAGE', (data) => {
      this.messages.push(data);
      this.$nextTick().then( ()=> {
        this.scrollToEnd()
      });
    });
    this.scrollToEnd();
  },
  data: () => ({
    socket : io('localhost:80'),
    message: null,
    dialog: false,
    drawer: true,
    messages:[],
  }),
  methods:{
    scrollToEnd: function() {    	
      var chatArea = this.$el.querySelector("#chatArea");
      chatArea.scrollTop = chatArea.scrollHeight;
    },
    sendMessage() {
      if(this.message != null){
        this.socket.emit('SEND_MESSAGE', {
          conversationId: 1,
          sendById: 2,
          sendByName: "İbrahim Turan",
          sendAt: Date.now(),
          message: this.message,
          seen: true
        });
        this.message = null;
      }
    }
  },

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