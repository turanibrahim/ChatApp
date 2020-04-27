const express = require('express');
const app = express();
const cors = require('cors');
const server = require('http').Server(app);
const io = require('socket.io')(server);
const authRoute = require('./Routes/auth');

//Model Schemas
const User = require('./Models/UserModel');
const Message = require('./Models/MessageModel');
const Room = require('./Models/RoomModel');

//DotENV for key security
require('dotenv').config()

//Middleware
app.use(express.json());

server.listen(81);
// WARNING: app.listen(80) will NOT work here!

//MAIN ROUTE FOR FRONTEND
app.use('/', express.static(path.join(__dirname, 'client/dist')));

//USER ROUTES
app.use('/auth/', authRoute);

//SOCKET CONNECTION
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

  socket.on('SEND_MESSAGE',async function(message, sender, receiver){
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

  socket.on('FETCH_PRIVATE_MESSAGES', async function(userId){
    await Message.find({ $or:[ {'receiver':userId}, {'sender':userId} ]}, function(err, docs){
      if(err) return console.log(err)

      User.findById(userId, function(err, doc){
        if(err) console.log(err);
        return io.to(doc.socketId).emit('PRIVATE_MESSAGES', docs)
      })
    });
  });
  
  socket.on('JOIN_ROOM', async function(roomId, userId, username){
    await Room.findById(roomId, function(err, doc){
      if(err) console.log(err)

      if(!doc.members.some(value => { return value.memberId == userId})){
        doc.members.push({
          memberId: userId,
          memberUsername: username
        });
      }

      doc.save(function(err, savedDoc){
        if(err) return console.log(err)
        User.findById(userId, function(err,user){
          if(err) console.log(err);
          socket.join(roomId)
          return io.to(user.socketId).emit('FETCH_ROOM',savedDoc);
        })
      });
    });
  });

  socket.on('FETCH_ROOMS', async function(userId){
    let rooms = []
    await Room.find({
     "members.memberId": { $nin: userId}
    },
    '_id name members'
    , function(err, docs){
      if(err) return console.log(err)
      rooms = docs;
    });

    await Room.find({
      members: {
        $elemMatch: {
          memberId: { $in: [userId] }
        }
      }
    },
    '_id name members messages'
    , function(err, docs){
      if(err) return console.log(err)
      
      docs.forEach( value => {
        socket.join(value._id);
      });

      rooms = rooms.concat(docs);
    });

    User.findById(userId, function(err, user){
      if(err) console.log(err)

      return io.to(user.socketId).emit('ALL_ROOMS',rooms)
    })
  });

  socket.on('SEND_ROOM_MESSAGE', function(message, room, sender, senderUsername, senderSocketId){
    const newMessage = {
      message,
      sender,
      senderUsername,
      date: Date.now()
    };

    Room.findOneAndUpdate(
    {_id: room}, 
    {$push: {'messages': newMessage}}, 
    {new: true}, 
    (err, result) => {
      if(err) return console.log(er)

      socket.broadcast.to(room).emit('GET_ROOM_MESSAGE', result._id, result.messages[result.messages.length-1]);
      return io.to(senderSocketId).emit('ROOM_MESSAGE_CALLBACK', result.messages[result.messages.length-1]._id);
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