const mongoose = require("../config/database");
const schema = {
    username: { type: mongoose.SchemaTypes.String, required: true },
    password: { 
        type: mongoose.SchemaTypes.String, 
        required: true,
    },
    isOnline: {
        type: mongoose.SchemaTypes.Boolean,
        setDefaultsOnInsert: false
    },
    socketId:{
        type: mongoose.SchemaTypes.String,
    }
};
const collectionName = "user"; // Name of the collection of documents
const userSchema = mongoose.Schema(schema);
const User = mongoose.model(collectionName, userSchema);
module.exports = User;
