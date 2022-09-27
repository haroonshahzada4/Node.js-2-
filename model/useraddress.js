const mongoose = require("mongoose");

const addressschema = mongoose.Schema({
address_id:{type:mongoose.Schema.Types.ObjectId , ref:"User"},
location:{type:String},
country:{type:String},
postal_code :{type:Number},
})


module.exports=mongoose.model("address", addressschema)