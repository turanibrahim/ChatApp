const mongoose = require("../config/database");
const schema = {
  name: {
    type: mongoose.SchemaTypes.String,
    require: true
  },
  members:[
    {
      memberId: {
        type: mongoose.SchemaTypes.String,
      },
      memberUsername: {
        type: mongoose.SchemaTypes.String,
      }
    }
  ],
  messages: [
    {
      message: {
        type: mongoose.SchemaTypes.String,
      },
      sender: {
        type: mongoose.SchemaTypes.String,
      },
      senderUsername: {
        type: mongoose.SchemaTypes.String,
      },
      date: {
        type: mongoose.SchemaTypes.Date,
      }
    }
  ]
};
const collectionName = "room"; // Name of the collection of documents
const roomSchema = mongoose.Schema(schema);
const Room = mongoose.model(collectionName, roomSchema);
module.exports = Room;
