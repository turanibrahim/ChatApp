const mongoose = require("../config/database");
const schema = {
    message: {
      type: mongoose.SchemaTypes.String,
      require: true
    },
    date: {
      type: mongoose.SchemaTypes.Date,
      require: true
    },
    sender: {
      type: mongoose.SchemaTypes.String,
      require: true,
    },
    receiver: {
      type: mongoose.SchemaTypes.String,
      require: true,
    },
    senderUsername: {
      type: mongoose.SchemaTypes.String,
      require: true
    },
    receiverUsername: {
      type: mongoose.SchemaTypes.String,
      require: true
    },
};
const collectionName = "message"; // Name of the collection of documents
const messageSchema = mongoose.Schema(schema);
const Message = mongoose.model(collectionName, messageSchema);
module.exports = Message;
