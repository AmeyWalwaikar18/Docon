const express = require("express");
const mongoose = require("mongoose");

exports.connect = () => {
    mongoose.connect(process.env.MONGODB_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then(() => console.log("DB Connected Successfully"))
    .catch((error) => {
        console.log("DB C onnection Failed");
        console.log(error);
        process.exit(1);
    })
}