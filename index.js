const express = require('express');
const app = express();
const cors = require('cors');
const server = require('http').Server(app);
const io = require('socket.io')(server);
const authRoute = require('./Routes/auth');

//Model Schemas
const User = require('./Models/UserModel');
const Message = require('./Models/MessageModel');
//DotENV for key security
require('dotenv').config()

//Middleware
app.use(express.json());

app.use(cors({
  origin: 'http://localhost:8081',
  credentials: true
}));

server.listen(81);
// WARNING: app.listen(80) will NOT work here!

//USER ROUTES
app.use('/auth/', authRoute);

io.on('connection', function(socket) {
  console.log('user connect:'+ socket.id);

  socket.on('SET_ONLINE', async function(user){    

    await User.findByIdAndUpdate(user._id, {
      isOnline: true,
      socketId: socket.id
    })

    User.find({},'_id username socketId isOnline', function(err, docs){
      if(err) return console.log(err);

      socket.broadcast.emit('USER_CONNECTED', user.username)
      io.emit("USERS", docs)
    })
    
  });

  socket.on('SEND_MESSAGE',async function(message, sender, receiver) { 
    
    var senderInfo = null;
    var receiverInfo = null;

    await User.findById(sender, function(err, doc){
      if(err) return console.log(err)

      senderInfo = doc;
    });

    await User.findById(receiver, function(err, doc){
      if(err) return console.log(err)

      receiverInfo = doc;
    });

    const newMessage = new Message({
      message,
      date: Date.now(),
      sender: sender,
      receiver: receiver,
      senderUsername: senderInfo.username,
      receiverUsername: receiverInfo.username,
    });

    newMessage.save(function(err){
      if(err) return console.log(err);
    });

    await io.to(socket.id).emit('MESSAGE_CALLBACK', newMessage._id);

    if(receiverInfo.socketId){
      await io.to(receiverInfo.socketId).emit('GET_MESSAGE', newMessage);
    }
  });

  socket.on('FETCH_MESSAGES', async function(userId){
    await Message.find({ $or:[ {'receiver':userId}, {'sender':userId} ]}, function(err, docs){
      if(err) return console.log(err)

      User.findById(userId, function(err, doc){
        if(err) console.log(err);
        return io.to(doc.socketId).emit('ALL_MESSAGES', docs)
      })
    });
  });

  socket.on('disconnect', async function(){
    await User.findOneAndUpdate({socketId: socket.id}, {
      isOnline: false,
      socketId: null,
    })

    User.find({},'_id username socketId isOnline', function(err, docs){
      if(err) return console.log(err);

      io.emit("USERS", docs)
    })
  });
});