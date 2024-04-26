// const mongoose = require("mongoose");
// const userSchema = new mongoose.Schema(
//   {
//     _id: mongoose.Schema.Types.ObjectId,
//     firstName: {
//       type: String,
//       required: true,
//       trim: true,
//     },
//     lastName: {
//       type: String,
//       required: true,
//       trim: true,
//     },
//     email: {
//       type: String,
//       required: true,
//       trim: true,
//       unique: true,
//     },
//     accountType: {
//       type: String,
//       enum: ["Doctor", "Patient"],
//       required: true,
//     },
//     image: {
//       type: String,
//       required: true,
//     },
//     password: {
//         type: String,
//         required: true,
//     },
//     token: {
//       type: String,
//     },
//     // approved: {
//     //   type: Boolean,
//     //   default: true,
//     // },
//     additionalDetails:{
//       type:mongoose.Schema.Types.ObjectId,
//       required:true,
//       ref:"Profile",
//     },
//     notifications:[{
//       type:mongoose.Schema.Types.ObjectId,
//       required:true,
//       ref:"Notifications",
//     }],
//     // prescriptionDetails:{
//     //   type:mongoose.Schema.Types.ObjectId,
//     //   required:true,
//     //   ref:"PrescriptionDetails",
//     // }
//   },
//   { timestamps: true }
// );

// module.exports = mongoose.model("User", userSchema);

const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    accountType: {
      type: String,
      enum: ["Doctor", "Patient"],
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    password: {
        type: String,
        required: true,
    },
    token: {
      type: String,
    },
    // approved: {
    //   type: Boolean,
    //   default: true,
    // },
    additionalDetails:{
      type:mongoose.Schema.Types.ObjectId,
      required:true,
      ref:"Profile",
    },
    notifications:[{
      type:mongoose.Schema.Types.ObjectId,
      required:true,
      ref:"Notifications",
    }],
    prescriptionDetails:[{
      type:mongoose.Schema.Types.ObjectId,
      required:true,
      ref:"PrescriptionDetails",
    }]
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
