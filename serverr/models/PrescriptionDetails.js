const mongoose = require("mongoose");
const prescriptionDetailsSchema = new mongoose.Schema({
    date:{
        type:String,
    },
    // jisne doctor ne prescribe kari uska naam
    firstName:{
        type:String,
        trim:true,
    },
    lastName:{
        type:String,
        trim:true,
    },
    email:{
        type:String,
        trim:true,
    },
    disease:{
        type : String,
        // requried:true,
        trim:true,
    },
    symptoms:{
        type:String,
        // requried:true,
    },
    medicines:{
        type:String,
        // requried:true,
    },
},{timestamps:true});

module.exports = mongoose.model("PrescriptionDetails", prescriptionDetailsSchema);