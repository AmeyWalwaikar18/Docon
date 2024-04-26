const mongoose = require("mongoose");
const NotificationsSchema = new mongoose.Schema({
    message:{
        type : String,
        // requried:true,
        trim:true,
    },
    request:{
        type:String,
        // requried:true,
        enum: ["Yes", "No","hold"],
    },
    time:{
        type:String,
        // requried:true,
    },
    date:{
        type:Date,
        // required:true,
    },
    firstName:{
        type:String,
        trim:true,
    },
    lastName:{
        type:String,
        trim:true,
    },
    userEmail:{
        type:String,
        trim:true,
    }

},{timestamps:true});

module.exports = mongoose.model("Notifications", NotificationsSchema);