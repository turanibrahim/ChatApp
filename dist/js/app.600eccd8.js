(function(e){function t(t){for(var r,i,o=t[0],c=t[1],l=t[2],d=0,h=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&h.push(a[i][0]),a[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);u&&u(t);while(h.length)h.shift()();return n.push.apply(n,l||[]),s()}function s(){for(var e,t=0;t<n.length;t++){for(var s=n[t],r=!0,o=1;o<s.length;o++){var c=s[o];0!==a[c]&&(r=!1)}r&&(n.splice(t--,1),e=i(i.s=s[0]))}return e}var r={},a={app:0},n=[];function i(t){if(r[t])return r[t].exports;var s=r[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=e,i.c=r,i.d=function(e,t,s){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(s,r,function(t){return e[t]}.bind(null,r));return s},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var u=c;n.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},1:function(e,t){},"2bf9":function(e,t,s){"use strict";var r=s("7e4b"),a=s.n(r);a.a},"3dfd":function(e,t,s){"use strict";var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-app",[null!=e.user.token?[s("ChatScreen",{attrs:{user:e.user}})]:[e.isLogin?[s("login",{attrs:{isLogin:e.isLogin},on:{updateIsLogin:e.updateIsLogin,updateUserCredentials:e.updateUserCredentials}})]:[s("Signup",{attrs:{isLogin:e.isLogin},on:{updateIsLogin:e.updateIsLogin,updateUserCredentials:e.updateUserCredentials}})]]],2)},a=[],n=(s("96cf"),s("1da1")),i=s("bc3a"),o=s.n(i),c=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-container",{staticClass:"fill-height  pa-0 ma-0",attrs:{fluid:"",id:"chat-screen"}},[s("v-row",{staticClass:"fill-height",attrs:{justify:"center",align:"center"}},[s("v-col",{staticClass:"fill-height px-0",attrs:{xl:"8",lg:"10",sm:"12"}},[s("v-card",{attrs:{height:"95vh"}},[s("v-row",{staticClass:"fill-height",attrs:{"no-gutters":""}},[s("v-col",{staticClass:"pa-0",attrs:{cols:"4"}},[s("v-row",{staticClass:"fill-height flex-column flex-nowrap",attrs:{align:"start","no-gutters":""}},[s("v-col",{staticClass:"py-0",staticStyle:{"border-right":"1px solid #ECEFF1"},attrs:{cols:"auto","align-self":"stretch"}},[s("v-toolbar",{attrs:{dark:"",color:"blue-grey darken-4"}},[s("v-btn",{directives:[{name:"show",rawName:"v-show",value:e.whichLeftBar>0,expression:"whichLeftBar > 0"}],attrs:{color:"white",icon:""},on:{click:function(t){return e.setLeftBar("0")}}},[s("v-icon",[e._v("mdi-arrow-left-thick")])],1),s("v-spacer"),s("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on;return[s("v-btn",e._g({directives:[{name:"show",rawName:"v-show",value:"2"!=e.whichLeftBar,expression:"whichLeftBar != '2'"}],attrs:{color:"white",icon:""},on:{click:function(t){return e.setLeftBar("2")}}},r),[s("v-icon",[e._v("mdi-account-group")])],1)]}}])},[s("span",[e._v("Oda Listesi")])]),s("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on;return[s("v-btn",e._g({directives:[{name:"show",rawName:"v-show",value:"1"!=e.whichLeftBar,expression:"whichLeftBar != '1'"}],attrs:{color:"white",icon:""},on:{click:function(t){return e.setLeftBar("1")}}},r),[s("v-icon",[e._v("mdi-message")])],1)]}}])},[s("span",[e._v("Kullanıcı Listesi")])])],1)],1),s("v-col",{staticClass:"py-0 px-0",staticStyle:{"background-color":"#ECEFF1","overflow-y":"auto"},attrs:{cols:"grow","align-self":"stretch"}},["0"==e.whichLeftBar?e._l(e.conversationList,(function(t){return s("ChatScreenList",{key:t._id,attrs:{name:t.receiverUsername},nativeOn:{click:function(s){return e.setChatArea(t.receiverId,t.receiverUsername)}}})})):e._e(),"1"==e.whichLeftBar?e._l(e.users,(function(t){return s("ChatScreenList",{key:t._id,attrs:{username:t.username,isOnline:t.isOnline},nativeOn:{click:function(s){return e.setChatArea(t._id,t.username)}}})})):e._e(),"2"==e.whichLeftBar?e._l(e.rooms,(function(t){return s("ChatScreenList",{key:t._id,attrs:{isRoom:"",name:t.name},nativeOn:{click:function(s){return e.joinRoom(t._id)}}})})):e._e()],2)],1)],1),s("v-col",{attrs:{cols:"8"}},[null!=(e.receiverId||e.roomId)?s("v-card",{staticClass:"fill-height"},[s("v-row",{staticClass:"fill-height flex-column flex-nowrap",attrs:{align:"start","no-gutters":""}},[s("v-col",{staticClass:"py-0",attrs:{cols:"auto","align-self":"stretch"}},[s("v-toolbar",{attrs:{dark:"",color:"blue-grey darken-4"}},[s("span",{staticClass:"title"},[e._v(e._s(e.receiverUsername?e.receiverUsername:e.roomName))]),s("v-spacer")],1),s("v-progress-linear",{attrs:{active:e.loadingChat,indeterminate:e.loadingChat,bottom:"",color:"amber accent-4"}})],1),s("v-col",{staticClass:"py-0 px-0",attrs:{cols:"grow","align-self":"stretch"}},[s("v-card",{staticClass:"flex-column flex-nowrap aling-end chat-screen",staticStyle:{"overflow-y":"auto"},attrs:{tile:"",flat:"",height:"80vh",id:"chatArea"}},[s("v-row",{attrs:{align:"stretch","no-gutters":""}},[e._l(e.messages,(function(t){return[t.senderUsername!=e.user.username?s("v-col",{key:t.id?t.id:t._id,staticClass:"ma-0 py-2",attrs:{cols:"10","align-self":"start"}},[s("v-row",{staticClass:"pl-2",attrs:{align:"start","no-gutters":""}},[s("v-col",{attrs:{cols:"auto"}},[s("v-card",{attrs:{color:"blue-grey lighten-3"}},[s("v-card-title",{staticClass:"subtitle-2 py-0 black--text"},[e._v(e._s(t.senderUsername))]),s("v-card-text",{staticClass:"py-0 black--text"},[e._v(" "+e._s(t.message)+" ")]),s("v-card-actions",{staticClass:"py-0"},[s("v-row",{attrs:{justify:"end",align:"end","no-gutters":""}},[s("v-col",{attrs:{cols:"12 text-end"}},[s("span",{staticClass:"overline py-0"},[e._v(e._s(e._f("moment")(t.date,"calendar")))])])],1)],1)],1)],1)],1)],1):s("v-col",{key:t.id?t.id:t._id,staticClass:"ma-0 py-2",attrs:{cols:"12"}},[s("v-row",{staticClass:"pr-2",attrs:{align:"end",justify:"end","no-gutters":""}},[s("v-col",{attrs:{cols:"9"}},[s("v-row",{attrs:{align:"end",justify:"end","no-gutters":""}},[s("v-col",{attrs:{cols:"auto"}},[s("v-card",{attrs:{color:"light-blue lighten-3"}},[s("v-card-text",{staticClass:"black--text"},[e._v(" "+e._s(t.message)+" ")])],1)],1)],1)],1)],1)],1)]}))],2)],1)],1),s("v-col",{staticClass:"py-0 px-0",attrs:{cols:"auto","align-self":"stretch"}},[s("v-toolbar",{attrs:{color:"amber accent-4"}},[s("v-row",{attrs:{"no-gutters":""}},[s("v-col",{attrs:{cols:"grow"}},[s("v-text-field",{attrs:{label:"Yollamak istediğiniz mejazı yazınız",solo:"","hide-details":""},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.sendMessage(t)}},model:{value:e.message,callback:function(t){e.message=t},expression:"message"}})],1),s("v-col",{attrs:{cols:"auto ml-2"}},[s("v-btn",{attrs:{icon:"",dark:"",loading:e.loadingChat},on:{click:e.sendMessage}},[s("v-icon",[e._v("mdi-send")])],1)],1)],1)],1)],1)],1)],1):s("v-card",{staticClass:"fill-height"},[s("v-container",{staticClass:"fill-height",attrs:{fluid:""}},[s("v-row",{attrs:{justify:"center",align:"center"}},[s("v-col",{staticClass:"text-center",attrs:{cols:"8"}},[s("p",{staticClass:"body-1"},[e._v("Lütfen sol alandan bir konuşma seçin.")]),s("p",{staticClass:"body-1"},[e._v("Sol alanda liste bulunmuyorsa. Lüften "),s("v-icon",[e._v("mdi-message")]),e._v(" simgesine tıklayarak bir kullanıcı seçin veya "),s("v-icon",[e._v("mdi-account-group")]),e._v(" simgesine tıklayarak bir odaya katılın.")],1)])],1)],1)],1)],1)],1)],1)],1)],1),s("v-snackbar",{attrs:{top:"",color:"success",timeout:e.snackbarTimeout},model:{value:e.showSnackBar,callback:function(t){e.showSnackBar=t},expression:"showSnackBar"}},[s("v-row",{attrs:{justify:"center",align:"center"}},[s("v-col",{attrs:{cols:"auto"}},[e._v(e._s(e.newOnlineUser)+" şuan Online!")])],1)],1),s("v-snackbar",{attrs:{top:"",color:"amber accent-4",timeout:e.snackbarTimeout},on:{click:function(t){return e.setRoomAsChatScreen(e.newRoomMessageAlert.roomIndex)}},model:{value:e.newRoomMessageAlert.show,callback:function(t){e.$set(e.newRoomMessageAlert,"show",t)},expression:"newRoomMessageAlert.show"}},[s("v-row",{attrs:{justify:"start",align:"center"}},[s("v-col",{attrs:{cols:"12"}},[s("span",{staticClass:"font-weight-bold title-1 black--text"},[e._v(e._s(e.newRoomMessageAlert.name))])]),s("v-col",{attrs:{cols:"auto"}},[s("span",{staticClass:"font-weight-bold black--text"},[e._v(e._s(e.newRoomMessageAlert.senderUsername)+": ")]),s("span",{staticClass:"black--text"},[e._v(e._s(e.newRoomMessageAlert.message))])])],1)],1),s("v-dialog",{attrs:{persistent:"",width:"50vh"},model:{value:e.loadingDialog,callback:function(t){e.loadingDialog=t},expression:"loadingDialog"}},[s("v-card",{attrs:{color:"blue-grey darken-4",dark:""}},[s("v-card-title",[s("h1",{staticClass:"title"},[e._v("Lütfen Bekleyin")])]),s("v-card-text",{staticClass:"text-center"},[s("v-progress-linear",{attrs:{indeterminate:"",color:"amber accent-4",height:"10"}})],1)],1)],1)],1)},l=[],u=(s("4de4"),s("c740"),s("4160"),s("45fc"),s("a434"),s("b0c0"),s("159b"),s("8055")),d=s.n(u),h=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-list-item",{attrs:{link:"",avatar:""}},[e.isRoom?e._e():[s("v-list-item-avatar",[s("v-img",{attrs:{src:"https://cdn.vuetifyjs.com/images/lists/1.jpg"}})],1)],s("v-list-item-content",[s("v-list-item-title",[e.isRoom?e._e():[e.username?s("v-badge",{staticClass:"font-weight-bold",attrs:{color:e.isOnline?"green":"red",content:e.isOnline?"Online":"Offline"}},[e._v(" "+e._s(e.username?e.username:"")+" ")]):e._e()],s("span",{staticClass:"font-weight-bold"},[e._v(e._s(e.name?e.name:""))])],2)],1)],2)},f=[],m={props:{username:String,isOnline:Boolean,isRoom:Boolean,name:String}},v=m,p=s("2877"),g=s("6544"),b=s.n(g),k=s("4ca6"),j=s("adda"),w=s("da13"),y=s("8270"),C=s("5d23"),_=Object(p["a"])(v,h,f,!1,null,null,null),x=_.exports;b()(_,{VBadge:k["a"],VImg:j["a"],VListItem:w["a"],VListItemAvatar:y["a"],VListItemContent:C["a"],VListItemTitle:C["b"]});var E={props:{user:Object},components:{ChatScreenList:x},data:function(){return{socket:d()(""),message:null,dialog:!1,drawer:!0,receiverId:null,receiverUsername:null,users:[],whichLeftBar:"0",messages:[],allMessages:[],newOnlineUser:"",conversationList:[],showSnackBar:!1,snackbarTimeout:3e3,rooms:[],roomId:null,roomName:null,socketId:null,newRoomMessageAlert:{roomName:null,senderUsername:null,message:null,roomIndex:null,show:!1},loadingDialog:!0,loadingChat:!1}},created:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=this,e.next=3,this.socket.emit("SET_ONLINE",this.user);case 3:return e.next=5,this.socket.on("USER_CONNECTED",(function(e){t.newOnlineUser=e,t.showSnackBar=!0}));case 5:return e.next=7,this.fetchRooms();case 7:return e.next=9,this.fetchMessages();case 9:return e.next=11,this.getUsers();case 11:this.socket.on("GET_MESSAGE",function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(s){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.allMessages.push(s),e.next=3,t.filterMessages();case 3:return e.next=5,t.updateConversationList(s);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),this.socket.on("GET_ROOM_MESSAGE",(function(e,s){var r=t.findRoomIndex(e);t.rooms[r].messages.push(s),t.showAlert(r,s)}));case 13:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),mounted:function(){var e=this;setTimeout((function(){e.loadingDialog=!1}),2e3)},updated:function(){var e=this;(this.receiverId||this.roomId)&&this.$nextTick((function(){return e.scrollToEnd()}))},methods:{scrollToEnd:function(){var e=this.$el.querySelector("#chatArea");e.scrollTop=e.scrollHeight},fetchMessages:function(){var e=this;this.socket.emit("FETCH_PRIVATE_MESSAGES",this.user._id),this.socket.on("PRIVATE_MESSAGES",(function(t){e.allMessages=t,e.createConversationList()}))},sendMessage:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t,s,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t=this.message,this.loadingChat=!0,s=this,null==this.message){e.next=16;break}if(null==this.receiverId){e.next=9;break}this.socket.emit("SEND_MESSAGE",s.message,s.user._id,s.receiverId),this.socket.once("MESSAGE_CALLBACK",(function(e){var r={_id:e,message:t,date:Date.now(),sender:s.user._id,receiver:s.receiverId,receiverUsername:s.receiverUsername,senderUsername:s.user.username};s.allMessages.push(r),s.messages.push(r),s.updateConversationList(r),s.setLeftBar("0")})),e.next=14;break;case 9:return r=s.message,e.next=12,this.socket.emit("SEND_ROOM_MESSAGE",s.message,s.roomId,s.user._id,s.user.username,s.socket.id);case 12:return e.next=14,this.socket.once("ROOM_MESSAGE_CALLBACK",(function(e){var t={_id:e,message:r,sender:s.user_id,senderUsername:s.user.username,date:Date.now()},a=s.rooms.findIndex((function(e){return e._id==s.roomId}));s.rooms[a].messages.push(t)}));case 14:return this.loadingChat=!1,e.abrupt("return",this.message=null);case 16:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),getUsers:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t,s=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=this,e.next=3,this.socket.on("USERS",(function(e){t.users=e;var r=t.users.findIndex((function(e){return e._id==s.user._id}));t.users.splice(r,1)}));case 3:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),setLeftBar:function(e){this.whichLeftBar=e},setChatArea:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t,s){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.loadingChat=!0,this.receiverId=t,this.receiverUsername=s,this.roomId=null,this.roomName=null,e.next=6,this.filterMessages();case 6:this.loadingChat=!1;case 7:case"end":return e.stop()}}),e,this)})));function t(t,s){return e.apply(this,arguments)}return t}(),filterMessages:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(null==this.receiverId||null==this.receiverUsername){e.next=4;break}return e.next=3,this.allMessages.filter((function(e){return e.sender==t.user._id&&e.receiver==t.receiverId||e.receiver==t.user._id&&e.sender==t.receiverId}));case 3:this.messages=e.sent;case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),createConversationList:function(){var e=this;this.allMessages.forEach((function(t){t.sender==e.user._id?e.conversationList.some((function(e){return e.receiverId==t.receiver}))||e.conversationList.push({receiverId:t.receiver,receiverUsername:t.receiverUsername}):e.conversationList.some((function(e){return e.receiverId==t.sender}))||e.conversationList.push({receiverId:t.sender,receiverUsername:t.senderUsername})}))},updateConversationList:function(e){e.sender==this.user._id?this.conversationList.some((function(t){return t.receiverId==e.receiver}))||this.conversationList.push({receiverId:e.receiver,receiverUsername:e.receiverUsername}):this.conversationList.some((function(t){return t.receiverId==e.sender}))||this.conversationList.push({receiverId:e.sender,receiverUsername:e.senderUsername})},fetchRooms:function(){var e=this;this.socket.emit("FETCH_ROOMS",e.user._id),this.socket.on("ALL_ROOMS",(function(t){e.rooms=t}))},joinRoom:function(e){var t=this;this.socket.emit("JOIN_ROOM",e,t.user._id,t.user.username),this.socket.on("FETCH_ROOM",(function(e){var s=t.findRoomIndex(e._id);t.rooms[s]=e,t.setRoomAsChatScreen(s)}))},setRoomAsChatScreen:function(e){var t=this;this.loadingChat=!0,this.messages=this.rooms[e].messages,this.roomId=this.rooms[e]._id,this.roomName=this.rooms[e].name,this.receiverUsername=null,this.receiverId=null,this.$nextTick().then((function(){t.loadingChat=!1}))},findRoomIndex:function(e){return this.rooms.findIndex((function(t){return t._id==e}))},showAlert:function(e,t){this.newRoomMessageAlert.message=t.message,this.newRoomMessageAlert.senderUsername=t.senderUsername,this.newRoomMessageAlert.name=this.rooms[e].name,this.newRoomMessageAlert.roomIndex=e,this.newRoomMessageAlert.show=!0}},computed:{}},L=E,O=(s("2bf9"),s("8336")),S=s("b0af"),I=s("99d9"),R=s("62ad"),U=s("a523"),M=s("169a"),A=s("132d"),B=s("8e36"),V=s("0fd9b"),z=s("2db4"),T=s("2fa4"),N=s("8654"),F=s("71d9"),G=s("3a2f"),$=Object(p["a"])(L,c,l,!1,null,null,null),D=$.exports;b()($,{VBtn:O["a"],VCard:S["a"],VCardActions:I["a"],VCardText:I["b"],VCardTitle:I["c"],VCol:R["a"],VContainer:U["a"],VDialog:M["a"],VIcon:A["a"],VProgressLinear:B["a"],VRow:V["a"],VSnackbar:z["a"],VSpacer:T["a"],VTextField:N["a"],VToolbar:F["a"],VTooltip:G["a"]});var K=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-container",{staticClass:"fill-height pa-0 ma-0",attrs:{fluid:""}},[s("v-row",{staticClass:"fill-height",attrs:{justify:"center",align:"center","no-gutters":""}},[s("v-col",{staticClass:"fill-height",attrs:{cols:"6"}},[s("v-card",{staticClass:"fill-height",attrs:{img:""}},[s("v-img",{attrs:{"max-height":"100vh",src:"https://fsb.zobj.net/crop.php?r=N8mhcDNxTXGef4IWjWgnhPRNYInB4j_FF9NfBANIIembS09FOZHMqs205aZzGkwMaqPRNOE0J9LAFsbF12sY7ierkNYx1jp7oB22Te3MeLu0YfvRXa5OUdJ-KXO9cVqYqLca6qvzbnvDY3kJ"}})],1)],1),s("v-col",{attrs:{cols:"6"}},[s("v-row",{attrs:{justify:"center",align:"center"}},[s("v-col",{attrs:{cols:"10"}},[s("v-card",{attrs:{shaped:"",elevation:"24"}},[s("v-card-title",[s("v-row",{attrs:{justify:"center",align:"center"}},[s("v-col",{attrs:{cols:"auto"}},[e._v(" Giriş Yap ")]),s("v-col",{directives:[{name:"show",rawName:"v-show",value:null!=e.authError,expression:"authError != null"}],attrs:{cols:"12"}},[s("v-alert",{attrs:{color:"red",border:"left",icon:"mdi-close",type:"error"}},[e._v(" "+e._s(e.authError)+" ")])],1)],1)],1),s("v-card-text",{staticClass:"py-0"},[s("v-row",{attrs:{justify:"center",align:"start"}},[s("v-col",{staticClass:"py-0",attrs:{cols:"11"}},[s("v-text-field",{attrs:{label:"Kullanıcı Adı",outlined:"","error-messages":e.usernameError},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}})],1),s("v-col",{staticClass:"py-0",attrs:{cols:"11"}},[s("v-text-field",{attrs:{label:"Şifre",outlined:"",type:"password","error-messages":e.passwordError},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1),s("v-col",{staticClass:"py-0 my-0",attrs:{cols:"11"}},[s("span",{staticClass:"px-0 mx-0"},[e._v("Henüz kayıt olmadınız mı? ")]),s("a",{attrs:{color:"primary"},on:{click:e.changeScreen}},[e._v(" Kayıt ol. ")])])],1)],1),s("v-card-actions",[s("v-row",{attrs:{justify:"center",align:"start"}},[s("v-col",{attrs:{cols:"11"}},[s("v-btn",{attrs:{color:"primary",block:"",rounded:"",loading:e.loginButtonLoading},on:{click:e.login,keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.logim(t)}}},[e._v("Giriş Yap")])],1)],1)],1)],1)],1)],1)],1)],1)],1)},Y=[],P={props:{isLogin:Boolean},data:function(){return{username:null,password:null,usernameError:null,passwordError:null,authError:null,loginButtonLoading:!1}},methods:{changeScreen:function(){this.$emit("updateIsLogin",!1)},login:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(null!==this.username&&null!==this.password){e.next=4;break}return null===this.username&&(this.usernameError="Kullanıcı adı boş bırakılamaz"),null===this.password&&(this.passwordError="Şifre boş bırakılamaz"),e.abrupt("return");case 4:if(!(this.username.length<6||this.password.length<6)){e.next=8;break}return this.username.length<6&&(this.usernameError="Kullanıcı adı 6 karakterden uzun olmalı!"),this.password.length<6&&(this.passwordError="Şifre 6 karakterden uzun olmalı!"),e.abrupt("return");case 8:return this.passwordError=null,this.usernameError=null,this.loginButtonLoading=!0,e.next=13,o.a.post("".concat("","/auth/login"),{data:{username:this.username,password:this.password}}).then((function(e){if(1!=e.data.loginFailed){var s={token:e.data.token,_id:e.data.user._id,username:e.data.user.username};t.$emit("updateUserCredentials",s)}else t.authError="Kullanıcı adı yada şifre hatalı!"})).catch((function(e){console.log(e),t.authError="Bir sorun oluştu lütfen sonra tekrar deneyin",t.loadingSignUpButton=!1}));case 13:this.loginButtonLoading=!1;case 14:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}},q=P,J=s("0798"),H=Object(p["a"])(q,K,Y,!1,null,"00d71f11",null),X=H.exports;b()(H,{VAlert:J["a"],VBtn:O["a"],VCard:S["a"],VCardActions:I["a"],VCardText:I["b"],VCardTitle:I["c"],VCol:R["a"],VContainer:U["a"],VImg:j["a"],VRow:V["a"],VTextField:N["a"]});var W=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-container",{staticClass:"fill-height pa-0 ma-0",attrs:{fluid:""}},[s("v-row",{staticClass:"fill-height",attrs:{justify:"center",align:"center","no-gutters":""}},[s("v-col",{attrs:{cols:"6"}},[s("v-row",{attrs:{justify:"center",align:"center"}},[s("v-col",{attrs:{cols:"10"}},[s("v-card",{attrs:{shaped:"",elevation:"24"}},[s("v-card-title",[s("v-row",{attrs:{justify:"center",align:"center"}},[s("v-col",{attrs:{cols:"auto"}},[e._v(" Kayıt Ol ")])],1)],1),s("v-card-text",{staticClass:"py-0"},[s("v-row",{attrs:{justify:"center",align:"start"}},[s("v-col",{staticClass:"py-0",attrs:{cols:"11"}},[s("v-text-field",{attrs:{label:"Kullanıcı Adı",outlined:"","append-icon":1==e.usernameError&&null!=e.usernameError?"mdi-close":null==e.usernameError?"":"mdi-check",success:!1===e.usernameError,error:!0===e.usernameError,"error-messages":e.usernameErrorMessage},on:{change:e.checkUsername},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}})],1),s("v-col",{staticClass:"py-0",attrs:{cols:"11"}},[s("v-text-field",{attrs:{label:"Şifre",outlined:"",type:"password",error:null!=e.passwordConfirmError,"error-messages":e.passwordConfirmError},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1),s("v-col",{staticClass:"py-0",attrs:{cols:"11"}},[s("v-text-field",{attrs:{label:"Şifre Tekrar",outlined:"",type:"password",error:null!=e.passwordConfirmError,"error-messages":e.passwordConfirmError},model:{value:e.passwordConfirm,callback:function(t){e.passwordConfirm=t},expression:"passwordConfirm"}})],1),s("v-col",{staticClass:"py-0 my-0",attrs:{cols:"11"}},[s("span",{staticClass:"px-0 mx-0"},[e._v("Hesabın var mı? ")]),s("a",{attrs:{color:"primary"},on:{click:e.changeScreen}},[e._v(" Giriş yap. ")])])],1)],1),s("v-card-actions",[s("v-row",{attrs:{justify:"center",align:"start"}},[s("v-col",{attrs:{cols:"11"}},[s("v-btn",{attrs:{color:"primary",block:"",rounded:"",loading:e.loadingSignUpButton,disabled:!e.avaliableUsername},on:{click:e.signUp},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.signUp(t)}}},[e._v("Kayıt Ol")])],1)],1)],1)],1)],1)],1)],1),s("v-col",{staticClass:"fill-height",attrs:{cols:"6"}},[s("v-card",{staticClass:"fill-height",attrs:{img:""}},[s("v-img",{attrs:{"max-height":"100vh",src:"https://fsb.zobj.net/crop.php?r=N8mhcDNxTXGef4IWjWgnhPRNYInB4j_FF9NfBANIIembS09FOZHMqs205aZzGkwMaqPRNOE0J9LAFsbF12sY7ierkNYx1jp7oB22Te3MeLu0YfvRXa5OUdJ-KXO9cVqYqLca6qvzbnvDY3kJ"}})],1)],1)],1)],1)},Z=[],Q={props:{isLogin:Boolean},data:function(){return{username:null,password:null,passwordConfirm:null,passwordConfirmError:null,usernameError:null,usernameErrorMessage:null,loadingSignUpButton:!1,avaliableUsername:!1}},methods:{changeScreen:function(){this.$emit("updateIsLogin",!0)},signUp:function(){var e,t,s=this;if(null===this.username)return console.log(this.username),this.usernameError=!0,void(this.usernameErrorMessage="Lütfen 6 haneden uzun kullanıcı adı giriniz!");this.password===this.passwordConfirm?(null===(e=this.password)||void 0===e||null===(t=e.null)||void 0===t?void 0:t.length)<6||null===this.password?this.passwordConfirmError="Lütfen 6 haneden uzun şifre giriniz!":(this.passwordConfirmError=null,this.loadingSignUpButton=!0,this.avaliableUsername&&o.a.post("".concat("","/auth/signUp"),{data:{username:this.username,password:this.password}}).then((function(e){var t={token:e.data.token,_id:e.data.user._id,username:e.data.user.username};s.$emit("updateUserCredentials",t)})).catch((function(e){s.loadingSignUpButton=!1,console.log(e)}))):this.passwordConfirmError="Girdiğiniz şifreler birbiri ile uyuşmuyor!"},checkUsername:function(){var e,t=this;(null===(e=this.username)||void 0===e?void 0:e.length)>6?(this.usernameError=null,this.usernameErrorMessage=null,o.a.post("".concat("","/auth/checkUsername"),{username:this.username}).then((function(e){!0===e.data.isValid?(t.usernameError=!1,t.avaliableUsername=!0):(t.usernameError=!0,t.usernameErrorMessage="Kullanıcı adı kullanılabilir değil!")})).catch((function(e){console.log(e)}))):(this.usernameError=!0,this.usernameErrorMessage="Kullanıcı adı 6 karakterden uzun olmalı!")}}},ee=Q,te=Object(p["a"])(ee,W,Z,!1,null,"36902166",null),se=te.exports;b()(te,{VBtn:O["a"],VCard:S["a"],VCardActions:I["a"],VCardText:I["b"],VCardTitle:I["c"],VCol:R["a"],VContainer:U["a"],VImg:j["a"],VRow:V["a"],VTextField:N["a"]});var re={name:"App",components:{ChatScreen:D,Login:X,Signup:se},mounted:function(){this.fetchCookie()},data:function(){return{user:{token:null,_id:null,username:null},isLogin:!0}},methods:{updateIsLogin:function(e){this.isLogin=e},updateUserCredentials:function(e){this.setCookie(e),this.user=e},setCookie:function(e){this.$cookies.set("user",e)},fetchCookie:function(){if(this.$cookies.isKey("user")){var e=this.$cookies.get("user");if(this.verifyCookie(e.token))return this.user=e;this.$cookies.remove("user")}},verifyCookie:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){var s,r=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return s=null,e.next=3,o.a.post("".concat("","/auth/verifyToken"),{data:{token:t}}).then((function(e){var t;1==(null===(t=e.data)||void 0===t?void 0:t.verified)&&(s=!0)})).catch((function(e){r.loadingSignUpButton=!1,console.log(e)}));case 3:return e.abrupt("return",s);case 4:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()}},ae=re,ne=s("7496"),ie=Object(p["a"])(ae,r,a,!1,null,null,null);t["a"]=ie.exports;b()(ie,{VApp:ne["a"]})},"402c":function(e,t,s){"use strict";var r=s("2b0e"),a=s("f309");r["a"].use(a["a"]),t["a"]=new a["a"]({})},4678:function(e,t,s){var r={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc10","./be.js":"1fc10","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function a(e){var t=n(e);return s(t)}function n(e){if(!s.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=n,e.exports=a,a.id="4678"},"56d7":function(e,t,s){"use strict";s.r(t),function(e){s("e623"),s("e379"),s("5dc8"),s("37e1");var t=s("2b0e"),r=s("2b27"),a=s.n(r),n=s("3dfd"),i=s("402c"),o=s("c1df");s("0e81"),t["a"].config.productionTip=!1,t["a"].use(a.a),t["a"].use(s("2ead"),{moment:o}),t["a"].$cookies.config("7d");var c=new t["a"]({el:"#app",vuetify:i["a"],render:function(e){return e(n["a"])}}).$mount("#app");e.vm=c}.call(this,s("c8ba"))},"7e4b":function(e,t,s){}});
//# sourceMappingURL=app.600eccd8.js.map