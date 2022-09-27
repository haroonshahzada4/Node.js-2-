const mongoose = require("mongoose");


const userschema=new mongoose.Schema({
pay_id:{type:mongoose.Schema.Types.ObjectId , ref:"pay"},
FIRSTNAME:{type:String},
LASTNAME:{type:String},
email:{type:String},
password:{type:Number},
phone:{type:Number},
token:{type:String},

})

module.exports= mongoose.model("user", userschema);